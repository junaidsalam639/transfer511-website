// TripDetails.jsx
import React from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { useLocation, useNavigate } from 'react-router';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const TripDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return (
            <div className="text-center mt-10">
                <p className="text-red-600 font-semibold">Kein Fahrtdaten gefunden.</p>
                <button onClick={() => navigate('/')} className="mt-4 px-4 py-2 bg-orange-500 text-white rounded">
                    Zurück zur Startseite
                </button>
            </div>
        );
    }

    const {
        startAddress,
        endAddress,
        startCoords,
        endCoords,
        distance,
        pricePerKm,
        totalPrice,
        directions,
    } = state;

    const carOptions = [
        {
            title: 'Standard Kombi Class',
            price: '715.65',
            seats: 4,
            bags: 3,
            image: '/assets/new-images/new-detail/image-one.jpeg',
        },
        {
            title: 'Business Class',
            price: '715.65',
            seats: 4,
            bags: 3,
            image: '/assets/new-images/new-detail/image-two.jpeg',
        },
        {
            title: 'Van Class',
            price: '1,676.27',
            seats: 7,
            bags: 8,
            image: '/assets/new-images/new-detail/image-three.jpeg',
        },
    ];

    return (
        <>
            <div className="page-header-one">
                <div
                    className="page-header-one__bg"
                    style={{
                        backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.jpg)"
                    }}
                />
            </div>
            <div className="max-w-7xl mx-auto p-4 space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow-md p-6 space-y-5 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800">Fahrtübersicht</h2>
                        <div className="text-gray-700 space-y-2">
                            <div className="flex justify-between">
                                <span className="font-medium">Start:</span>
                                <span>{startAddress}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Ziel:</span>
                                <span>{endAddress}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Distanz:</span>
                                <span>{distance} km</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Preis pro km:</span>
                                <span>€{pricePerKm}</span>
                            </div>
                            <div className="flex justify-between text-orange-600 font-bold text-lg">
                                <span>Gesamtpreis:</span>
                                <span>€{totalPrice}</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl shadow-md overflow-hidden border border-gray-100 h-80">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={startCoords}
                            zoom={7}
                        >
                            {directions ? (
                                <DirectionsRenderer directions={directions} />
                            ) : (
                                <>
                                    <Marker position={startCoords} label="A" />
                                    <Marker position={endCoords} label="B" />
                                </>
                            )}
                        </GoogleMap>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {carOptions.map((car, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex flex-col justify-between hover:shadow-lg transition duration-300"
                        >
                            <div>
                                <img
                                    src={car.image}
                                    alt={car.title}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                                <h3 className="font-semibold text-xl text-gray-800 mb-3">{car.title}</h3>
                                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                                    <li>✓ 60 min Wartezeit (Flughafen)</li>
                                    <li>✓ 15 min für andere Abholungen</li>
                                    <li>✓ Kostenlose Stornierung (24h vorher)</li>
                                    <li>✓ Gratis WLAN & Wasser</li>
                                </ul>
                                <div className="flex items-center justify-between text-gray-500 text-sm">
                                    <span>🧑‍🤝‍🧑 {car.seats} Sitze</span>
                                    <span>🧳 {car.bags} Gepäck</span>
                                </div>
                            </div>
                            <div className="text-right mt-4">
                                <p className="text-xl font-bold text-orange-500">€{car.price}</p>
                                <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition">
                                    Weiter
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TripDetails;
