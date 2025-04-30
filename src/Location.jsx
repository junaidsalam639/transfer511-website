import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { LoadScript } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from './components/home/HomeHeroSection';

const Location = () => {
    const [startLocation, setStartLocation] = useState(null);
    const [endLocation, setEndLocation] = useState(null);
    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const calculateDistance = () => {
        if (!startLocation || !endLocation) {
            setError('Please select both locations');
            return;
        }

        setLoading(true);
        setError('');
        setDistance(null);
        setDuration(null);

        const service = new window.google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [startLocation.label],
                destinations: [endLocation.label],
                travelMode: 'DRIVING',
                unitSystem: window.google.maps.UnitSystem.METRIC,
            },
            (response, status) => {
                setLoading(false);
                if (status === 'OK') {
                    const element = response.rows[0].elements[0];
                    if (element.status === 'OK') {
                        setDistance(element.distance.text);
                        setDuration(element.duration.text);
                    } else {
                        setError('Could not calculate distance between these locations');
                    }
                } else {
                    setError('Error calculating distance. Please try again.');
                }
            }
        );
    };

    return (
        <LoadScript
            googleMapsApiKey={GOOGLE_MAPS_API_KEY}
            libraries={['places']}
        >
            <div style={styles.container}>
                <h2 style={styles.heading}>Global Distance Calculator</h2>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>From:</label>
                    <GooglePlacesAutocomplete
                        selectProps={{
                            value: startLocation,
                            onChange: setStartLocation,
                            placeholder: 'Enter starting location (anywhere in world)',
                            styles: {
                                control: (provided) => ({
                                    ...provided,
                                    minHeight: '50px',
                                    fontSize: '16px',
                                }),
                                input: (provided) => ({
                                    ...provided,
                                    padding: '10px',
                                }),
                                option: (provided) => ({
                                    ...provided,
                                    fontSize: '16px',
                                    padding: '10px 15px',
                                }),
                            },
                        }}
                        autocompletionRequest={{
                            types: ['(regions)'],
                        }}
                        debounce={300}
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>To:</label>
                    <GooglePlacesAutocomplete
                        selectProps={{
                            value: endLocation,
                            onChange: setEndLocation,
                            placeholder: 'Enter destination (anywhere in world)',
                            styles: {
                                control: (provided) => ({
                                    ...provided,
                                    minHeight: '50px',
                                    fontSize: '16px',
                                }),
                                input: (provided) => ({
                                    ...provided,
                                    padding: '10px',
                                }),
                                option: (provided) => ({
                                    ...provided,
                                    fontSize: '16px',
                                    padding: '10px 15px',
                                }),
                            },
                        }}
                        autocompletionRequest={{
                            types: ['(regions)'],
                        }}
                        debounce={300}
                    />
                </div>

                <button
                    onClick={calculateDistance}
                    disabled={!startLocation || !endLocation || loading}
                    style={{
                        ...styles.button,
                        ...((!startLocation || !endLocation || loading) && styles.buttonDisabled)
                    }}
                >
                    {loading ? (
                        <>
                            <span style={styles.spinner}></span> Calculating...
                        </>
                    ) : (
                        'Calculate Distance'
                    )}
                </button>

                {error && (
                    <div style={styles.error}>
                        <svg style={styles.errorIcon} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
                        </svg>
                        {error}
                    </div>
                )}

                {distance && duration && (
                    <div style={styles.resultContainer}>
                        <div style={styles.resultHeader}>
                            <svg style={styles.resultIcon} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M11,7H13V11H17V13H13V17H11V13H7V11H11V7Z" />
                            </svg>
                            <h3 style={styles.resultHeading}>Distance Information</h3>
                        </div>
                        <div style={styles.resultContent}>
                            <p style={styles.location}>
                                <span style={styles.locationLabel}>From:</span> {startLocation.label}
                            </p>
                            <p style={styles.location}>
                                <span style={styles.locationLabel}>To:</span> {endLocation.label}
                            </p>
                            <div style={styles.metrics}>
                                <div style={styles.metric}>
                                    <svg style={styles.metricIcon} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5M7.5,10.5A1.5,1.5 0 0,0 6,12A1.5,1.5 0 0,0 7.5,13.5A1.5,1.5 0 0,0 9,12A1.5,1.5 0 0,0 7.5,10.5M16.5,10.5A1.5,1.5 0 0,0 15,12A1.5,1.5 0 0,0 16.5,13.5A1.5,1.5 0 0,0 18,12A1.5,1.5 0 0,0 16.5,10.5Z" />
                                    </svg>
                                    <div>
                                        <div style={styles.metricLabel}>Distance</div>
                                        <div style={styles.metricValue}>{distance}</div>
                                    </div>
                                </div>
                                <div style={styles.metric}>
                                    <svg style={styles.metricIcon} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M11,8V13L16,10L11,8M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
                                    </svg>
                                    <div>
                                        <div style={styles.metricLabel}>Travel Time</div>
                                        <div style={styles.metricValue}>{duration}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </LoadScript>
    );
};

// Enhanced Styles
const styles = {
    container: {
        padding: '25px',
        maxWidth: '650px',
        margin: '20px auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        backgroundColor: '#fff',
    },
    heading: {
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '28px',
        fontWeight: '600',
    },
    inputGroup: {
        marginBottom: '25px',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: '600',
        color: '#34495e',
        fontSize: '16px',
    },
    button: {
        padding: '15px 20px',
        backgroundColor: '#4285F4',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        width: '100%',
        marginTop: '15px',
        fontWeight: '600',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
    },
    buttonDisabled: {
        backgroundColor: '#bdc3c7',
        cursor: 'not-allowed',
    },
    spinner: {
        border: '3px solid rgba(255,255,255,0.3)',
        borderRadius: '50%',
        borderTop: '3px solid white',
        width: '20px',
        height: '20px',
        animation: 'spin 1s linear infinite',
    },
    error: {
        color: '#e74c3c',
        marginTop: '15px',
        padding: '12px 15px',
        backgroundColor: '#fdecea',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '15px',
    },
    errorIcon: {
        width: '20px',
        height: '20px',
    },
    resultContainer: {
        marginTop: '30px',
        padding: '0',
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        border: '1px solid #e0e0e0',
        overflow: 'hidden',
    },
    resultHeader: {
        padding: '15px 20px',
        backgroundColor: '#4285F4',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    resultIcon: {
        width: '24px',
        height: '24px',
    },
    resultHeading: {
        margin: '0',
        fontSize: '18px',
        fontWeight: '600',
    },
    resultContent: {
        padding: '20px',
    },
    location: {
        margin: '0 0 15px 0',
        fontSize: '16px',
        lineHeight: '1.6',
    },
    locationLabel: {
        fontWeight: '600',
        color: '#2c3e50',
        marginRight: '5px',
    },
    metrics: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginTop: '20px',
    },
    metric: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '15px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    },
    metricIcon: {
        width: '28px',
        height: '28px',
        color: '#4285F4',
    },
    metricLabel: {
        fontSize: '14px',
        color: '#7f8c8d',
        marginBottom: '2px',
    },
    metricValue: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#2c3e50',
    },
};


export default Location;