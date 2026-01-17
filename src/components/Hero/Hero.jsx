import React from 'react';
import Typography from '../Typography/Typography';

const Hero = () => {
    return (
        <section style={{ backgroundColor: '#f9fafb', padding: '80px 0 60px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '768px', margin: '0 auto 60px' }}>
                    <div style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'inline-flex', gap: '16px', fontSize: '12px', color: '#6b7280' }}>
                            <span>Products</span>
                            <span>Solutions</span>
                            <span>Community</span>
                            <span>Resources</span>
                            <span>Pricing</span>
                            <span>Contact</span>
                        </div>
                    </div>
                    <Typography variant="heading" style={{ fontSize: '48px', marginBottom: '16px' }}>Title</Typography>
                    <Typography variant="subtitle" style={{ marginBottom: '32px' }}>Subtitle</Typography>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                        <button style={{ backgroundColor: '#e5e7eb', color: '#111827', border: 'none', padding: '10px 24px', borderRadius: '4px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Button</button>
                        <button style={{ backgroundColor: '#1f2937', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '4px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Button</button>
                    </div>
                </div>

                {/* Feature Image Placeholder */}
                <div style={{ backgroundColor: '#e5e7eb', height: '400px', borderRadius: '8px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Icon can go here */}
                    <span style={{ fontSize: '64px', color: '#d1d5db' }}>🖼️</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
