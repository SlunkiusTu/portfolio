import { useState, useEffect } from "react";
import { navigationLinks } from "../../data/navigation.data";
import { Container } from "../common/Container";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className={`
                    fixed
                    top-0 
                    left-0
                    right-0
                    z-50 
                    transition-all
                    duration-300
                    ${scrolled
                        ? "bg-gray-950/95 backdrop-blur-md shadow-lg"
                        : "bg-linear-to-b from-gray-950 via-black to-transparent"
                    }
                `}
            >
                <Container >
                    <div className="flex items-center justify-between h-16">
                        <a
                            href="#home"
                            onClick={closeMobileMenu}
                            className="text-2xl font-bold bg-linear-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent hover:opacity-80"
                        >
                            {"<S/A>"}
                        </a>
                        <nav className="hidden md:flex items-center space-x-1">
                            {navigationLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-gray-800/50 group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                                </a>
                            ))}
                        </nav>
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700 transition-colors "
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                        >
                            <motion.div
                                animate={isMobileMenuOpen ? "open" : "closed"}
                                className="w-6 h-6 flex flex-col justify-center items-center"
                            >
                                {isMobileMenuOpen ? (
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </motion.div>
                        </button>
                    </div>
                </Container>
            </header>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-90"
                            onClick={closeMobileMenu}
                        />
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-sm bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 border-l border-gray-800 shadow-2xl z-100"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                                    <h2 className="text-xl font-bold bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                                        {"<S/A>"}
                                    </h2>
                                    <button
                                        onClick={closeMobileMenu}
                                        className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex-1 overflow-y-auto px-6 py-8">
                                    <motion.div
                                        className="space-y-2"
                                        initial="closed"
                                        animate="open"
                                        variants={{
                                            open: {
                                                transition: { staggerChildren: 0.07 }
                                            },
                                            closed: {
                                                transition: { staggerChildren: 0.05, staggerDirection: -1 }
                                            }
                                        }}
                                    >
                                        {navigationLinks.map((link) => (
                                            <motion.a
                                                key={link.id}
                                                href={link.href}
                                                onClick={closeMobileMenu}
                                                variants={{
                                                    open: {
                                                        y: 0,
                                                        opacity: 1,
                                                        transition: {
                                                            y: { stiffness: 1000, velocity: -100 }
                                                        }
                                                    },
                                                    closed: {
                                                        y: 50,
                                                        opacity: 0,
                                                        transition: {
                                                            y: { stiffness: 1000 }
                                                        }
                                                    }
                                                }}
                                                className="block py-4 px-5 text-gray-100 hover:text-white bg-gray-800/50 hover:bg-gray-800 rounded-xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 group"
                                            >
                                                <span className="flex items-center justify-between">
                                                    <span className="font-semibold text-lg">{link.label}</span>
                                                    <svg
                                                        className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </span>
                                            </motion.a>
                                        ))}
                                    </motion.div>
                                    <motion.div
                                        className="mt-8 pt-8 border-t border-gray-800"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <a
                                            href="#contact"
                                            onClick={closeMobileMenu}
                                            className="block w-full py-4 text-center bg-linear-to-r from-blue-500 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                                        >
                                            Get In Touch
                                        </a>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
