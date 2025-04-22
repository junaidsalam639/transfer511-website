import React, { useState } from "react";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places"];

const DistanceCalculator = ({ GOOGLE_MAPS_API_KEY, onSearch }) => {
    const [startAutocomplete, setStartAutocomplete] = useState(null);
    const [endAutocomplete, setEndAutocomplete] = useState(null);
    const [startAddress, setStartAddress] = useState("");
    const [endAddress, setEndAddress] = useState("");
    const [startCoords, setStartCoords] = useState(null);
    const [endCoords, setEndCoords] = useState(null);
    const [distanceText, setDistanceText] = useState(null);

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const handleStartPlaceSelected = () => {
        if (startAutocomplete) {
            const place = startAutocomplete.getPlace();
            if (place?.formatted_address) {
                setStartAddress(place?.formatted_address);
                setStartCoords(place?.geometry?.location?.toJSON());
                if (endAddress) {
                    calculateDistance(place?.formatted_address, endAddress);
                }
            }
        }
    };

    const handleEndPlaceSelected = () => {
        if (endAutocomplete) {
            const place = endAutocomplete.getPlace();
            if (place?.formatted_address) {
                setEndAddress(place?.formatted_address);
                setEndCoords(place?.geometry?.location?.toJSON());
                if (startAddress) {
                    calculateDistance(startAddress, place?.formatted_address);
                }
            }
        }
    };

    const calculateDistance = (origin, destination) => {
        if (!origin || !destination) return;

        const service = new window.google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [origin],
                destinations: [destination],
                travelMode: window.google.maps.TravelMode.DRIVING,
                unitSystem: window.google.maps.UnitSystem.METRIC,
            },
            (response, status) => {
                if (status === "OK") {
                    const distText = response?.rows[0]?.elements[0]?.distance?.text;
                    setDistanceText(distText);
                } else {
                    console.error("Distance Matrix error:", status);
                }
            }
        );
    };

    const getPricePerKm = (distance) => {
        if (distance >= 20 && distance < 40) return 1.55;
        else if (distance >= 40 && distance < 60) return 1.5;
        else if (distance >= 60 && distance < 80) return 1.45;
        else if (distance >= 80 && distance < 100) return 1.4;
        else if (distance >= 100 && distance < 150) return 1.35;
        else if (distance >= 150 && distance <= 200) return 1.3;
        else if (distance > 200) return 1.3;
        else return 0;
    };

    const parseDistance = (text) => parseFloat(text?.replace(/[^\d.]/g, ""));

    const handleSearch = () => {
        if (!startAddress || !endAddress || !distanceText || !startCoords || !endCoords) return;

        const distance = parseDistance(distanceText);
        const pricePerKm = getPricePerKm(distance);
        const totalPrice = (pricePerKm * distance).toFixed(2);

        const tripDetails = {
            startAddress,
            endAddress,
            startCoords,
            endCoords,
            distance,
            pricePerKm,
            totalPrice,
        };
        onSearch(tripDetails);
    };

    if (loadError) return <div>Error loading Google Maps</div>;
    if (!isLoaded) return <div>Loading Google Maps...</div>;

    return (
        <>
            <div className="banner-form__control">
                <Autocomplete onLoad={setStartAutocomplete} onPlaceChanged={handleStartPlaceSelected}>
                    <input
                        className="rentol-datepicker"
                        type="text"
                        placeholder="Start Location"
                        value={startAddress}
                        onChange={(e) => setStartAddress(e.target.value)}
                    />
                </Autocomplete>
            </div>
            <div className="banner-form__control">
                <Autocomplete onLoad={setEndAutocomplete} onPlaceChanged={handleEndPlaceSelected}>
                    <input
                        className="rentol-datepicker"
                        type="text"
                        placeholder="Goal Location"
                        value={endAddress}
                        onChange={(e) => setEndAddress(e.target.value)}
                    />
                </Autocomplete>
            </div>
            <div className="banner-form__control banner-form__button md:hidden block">
                <button className="rentol-btn w-full" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </>
    );
};

export default DistanceCalculator;
