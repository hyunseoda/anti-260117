import React, { useState } from 'react';
import Typography from '../Typography/Typography';
import { FaBars, FaFigma } from 'react-icons/fa6';

const NavLink = ({ children }) => (
    <a href="#" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: 500 }}>
        {children}
    </a>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaFigma style={{ fontSize: '24px', color: '#111827' }} />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex" style={{ display: 'none', gap: '32px', alignItems: 'center' }}>
                        {/* We need a utility class for 'md:flex'. 
                            Since we only have grid utilities, I'll use inline style with media query hook or just CSS module. 
                            For now, I'll rely on a simple inline style strategy or assuming we add flex utilities later. 
                            Actually, let's use the SCSS 'md:block' equivalent strategy or just hide/show based on JS for simplicity if SCSS is limited.
                            WAIT, I implemented .md:col-*, but not generic display utilities.
                            I will implement a simple JS-based or SCSS-based visibility toggle for now, 
                            OR I can stick to the 'grid' structure which I have.
                         */}
                        {/* Let's try to use the grid for layout or just simple inline styles. 
                             For true responsiveness without full Tailwind-like utilities, 
                             I'll stick to a simple strategy: 
                             Use a CSS class defined in a module or global utilities if present. 
                             I'll modify _utilities.scss next to include basic visual toggles if needed, 
                             but for now I'll use a style object with window matchMedia or similar? 
                             No, that's messy. 
                             I'll add a simple 'desktop-only' class to global.scss or just use the existing grid system creatively.
                         */}
                        {/* Actually, looking at the previous grid implementation, I only have grid cols. 
                             I'll use standard inline styles but I really need media queries.
                             I'll create the structure and use a 'desktop-nav' class which I will add to global.scss shortly.
                          */}
                        <NavLink>Products</NavLink>
                        <NavLink>Solutions</NavLink>
                        <NavLink>Community</NavLink>
                        <NavLink>Resources</NavLink>
                        <NavLink>Pricing</NavLink>
                        <NavLink>Contact</NavLink>
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex" style={{ display: 'none', gap: '16px', alignItems: 'center' }}>
                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 500, color: '#374151' }}>Sign In</button>
                        <button style={{ backgroundColor: '#111827', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Register</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer' }} className="md:hidden">
                        <FaBars style={{ fontSize: '20px', color: '#374151' }} />
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div style={{ padding: '16px 0', borderTop: '1px solid #f3f4f6' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <NavLink>Products</NavLink>
                            <NavLink>Solutions</NavLink>
                            <NavLink>Community</NavLink>
                            <NavLink>Resources</NavLink>
                            <NavLink>Pricing</NavLink>
                            <NavLink>Contact</NavLink>
                            <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 500, color: '#374151', textAlign: 'left' }}>Sign In</button>
                                <button style={{ backgroundColor: '#111827', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Register</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
