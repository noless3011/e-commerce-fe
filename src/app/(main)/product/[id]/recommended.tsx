'use client'; // Make this component a client component

import React from 'react';

const Recommended: React.FC = () => {
    const styles: { [key: string]: React.CSSProperties } = {
        recommended: {
            padding: '20px',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            margin: '20px auto',
            width: '80%',
            maxWidth: '1200px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
        recommendedProducts: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            gap: '10px',
            flexWrap: 'wrap' as const,
        },
        product: {
            flex: '0 0 150px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '5px',
            transition: 'box-shadow 0.3s',
        },
        productHover: {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' as React.CSSProperties['boxShadow'], // Ensure type is consistent
        },
        productName: {
            marginTop: '10px',
            color: 'black',
            textDecoration: 'none' as React.CSSProperties['textDecoration'], // Ensure type is consistent
            fontWeight: 'bold',
        },
        productNameHover: {
            textDecoration: 'underline' as React.CSSProperties['textDecoration'],
        },
    };

    return (
        <div style={styles.recommended}>
            <h2 style={{ marginBottom: '20px', color: 'black'}}>Recommended</h2>
            <div style={styles.recommendedProducts}>
                {['recommended1', 'recommended2', 'recommended3'].map((img, index) => (
                    <div
                        key={index}
                        style={styles.product}
                        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = styles.productHover.boxShadow as string)} // Cast to string
                        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                    >
                        <img
                            src={`/${img}.jpg`}
                            alt={`Item ${index + 1}`}
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <a
                            href="#"
                            style={styles.productName}
                            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = styles.productNameHover.textDecoration as string)} // Cast to string
                            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                        >
                            Product {index + 1}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommended;
