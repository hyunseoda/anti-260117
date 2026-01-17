import React from 'react';
import Typography from '../Typography/Typography';

const TestimonialCard = ({ quote, author, role, avatar }) => (
    <div className="col-12 md:col-6 lg:col-4">
        <div style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px', height: '100%' }}>
            <Typography variant="body" style={{ marginBottom: '16px', display: 'block' }}>"{quote}"</Typography>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#d1d5db', overflow: 'hidden' }}>
                    {/* Placeholder Avatar */}
                    {avatar && <img src={avatar} alt={author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                    {!avatar && <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', fontSize: '10px' }}>IMG</div>}
                </div>
                <div>
                    <Typography variant="body-small-strong" style={{ display: 'block' }}>{author}</Typography>
                    <Typography variant="caption">{role}</Typography>
                </div>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        { id: 1, quote: "Quote", author: "Title", role: "Description" },
        { id: 2, quote: "Quote", author: "Title", role: "Description" },
        { id: 3, quote: "Quote", author: "Title", role: "Description" },
        { id: 4, quote: "Quote", author: "Title", role: "Description" },
        { id: 5, quote: "Quote", author: "Title", role: "Description" },
        { id: 6, quote: "Quote", author: "Title", role: "Description" },
    ];

    return (
        <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ marginBottom: '40px' }}>
                    <Typography variant="heading" style={{ marginBottom: '8px' }}>Heading</Typography>
                    <Typography variant="subheading">Subheading</Typography>
                </div>

                <div className="grid">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.id} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
