import React from 'react';
import Typography from '../Typography/Typography';
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFigma } from 'react-icons/fa6';

const SocialIcon = ({ Icon }) => (
    <a href="#" style={{ color: '#111827', fontSize: '24px', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <Icon />
    </a>
);

const FooterLink = ({ children }) => (
    <a href="#" style={{ display: 'block', marginBottom: '12px', textDecoration: 'none' }}>
        <Typography variant="body-small" style={{ color: '#4b5563' }}>{children}</Typography>
    </a>
);

const FooterColumn = ({ title, links }) => (
    <div className="col-6 md:col-3 lg:col-2">
        <Typography variant="subheading" style={{ marginBottom: '24px', display: 'block' }}>{title}</Typography>
        <div>
            {links.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
            ))}
        </div>
    </div>
);

const Footer = () => {
    return (
        <footer className="bg-white" style={{ borderTop: '1px solid #e5e7eb', padding: '64px 0 48px' }}>
            <div className="container">
                <div className="grid">
                    {/* Brand & Socials Section */}
                    {/* Mobile: 12 cols, Tablet: 12 cols (top), Desktop: 3 cols (left) */}
                    <div className="col-12 lg:col-3" style={{ marginBottom: '40px' }}>
                        <div style={{ marginBottom: '24px' }}>
                            {/* Logo Placeholder */}
                            <FaFigma style={{ fontSize: '40px', color: '#111827' }} />
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <SocialIcon Icon={FaXTwitter} />
                            <SocialIcon Icon={FaInstagram} />
                            <SocialIcon Icon={FaYoutube} />
                            <SocialIcon Icon={FaLinkedin} />
                        </div>
                    </div>

                    {/* Spacer for Desktop */}
                    {/* Mobile/Tablet: Hidden (0 height/width ideally but grid handles layout), Desktop: 3 cols */}
                    <div className="col-12 lg:col-3"></div>

                    {/* Link Columns */}
                    <FooterColumn
                        title="Use cases"
                        links={['UI design', 'UX design', 'Wireframing', 'Diagramming', 'Brainstorming', 'Online whiteboard', 'Team collaboration']}
                    />
                    <FooterColumn
                        title="Explore"
                        links={['Design', 'Prototyping', 'Development features', 'Design systems', 'Collaboration features', 'Design process', 'FigJam']}
                    />
                    <FooterColumn
                        title="Resources"
                        links={['Blog', 'Best practices', 'Colors', 'Color wheel', 'Support', 'Developers', 'Resource library']}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
