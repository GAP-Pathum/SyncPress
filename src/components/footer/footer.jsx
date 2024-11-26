import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Social icons
import { Fonts } from '../../constants/fonts'; // Import Fonts

const Footer = ({ colors }) => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Here, you can handle the email subscription logic
        if (email) {
            setIsSubscribed(true);
            setEmail('patuhmpasindu41@gmail.com');
            // For example, send the email to your backend
        }
    };

    return (
        <div
            className="py-16 px-8 mt-20"
            style={{
                background: colors.gradient.background,
                backgroundSize: colors.gradient.backgroundSize,
                animation: colors.gradient.animation,
                transition: 'background-color 0.3s, color 0.3s',
            }}
        >
            <div className="container mx-auto text-center">
                <h2
                    className="text-4xl font-semibold mb-8"
                    style={{ color: colors.textPrimary, fontFamily: Fonts.Title }}
                >
                    Stay Updated With Us!
                </h2>
                <div className="flex justify-center mb-8">
                    <form onSubmit={handleSubscribe} className="flex items-center max-w-xl w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="py-2 px-4 w-full text-black rounded-l-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                borderColor: colors.textPrimary,
                                backgroundColor: colors.cardBackground,
                                color: colors.textPrimary,
                            }}
                        />
                        <button
                            type="submit"
                            className="py-2 px-6 rounded-r-lg ml-2 transition duration-300"
                            style={{
                                backgroundColor: colors.textPrimary,
                                color: colors.textSecondary,
                                fontFamily: Fonts.SemiBold,
                            }}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                {isSubscribed && (
                    <p className="text-xl font-medium mb-8" style={{ color: colors.textPrimary }}>
                        Thanks for subscribing! Stay tuned for updates.
                    </p>
                )}
                <div className="flex justify-center gap-8 mb-8">
                    {/* Social Icons */}
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-blue-500 transition duration-300"
                        style={{ color: colors.textPrimary }}
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-blue-400 transition duration-300"
                        style={{ color: colors.textPrimary }}
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-blue-600 transition duration-300"
                        style={{ color: colors.textPrimary }}
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-pink-400 transition duration-300"
                        style={{ color: colors.textPrimary }}
                    >
                        <FaInstagram />
                    </a>
                </div>
                <div className="border-t py-6 mt-8" style={{ borderColor: colors.textPrimary }}>
                    <p className="text-sm" style={{ color: colors.textSecondary }}>
                        &copy; {new Date().getFullYear()} SyncPress. All rights reserved.
                    </p>
                    <p className="text-sm" style={{ color: colors.textSecondary }}>
                        Designed with ❤️ by G.A.P.Pathum
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
