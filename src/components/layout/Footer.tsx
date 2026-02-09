import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { personalData } from '../../data/personal.data';
import { navigationLinks } from '../../data/navigation.data';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-linear-to-b from-gray-950 via-black to-gray-950 text-white border-t border-gray-800 pt-10">
            <Button
                onClick={scrollToTop}
                size="sm"
                className="absolute -top-6 left-1/2 -translate-x-1/2 p-3! rounded-full! shadow-lg z-20"
                aria-label="Back to top"
            >
                <HiArrowUp size={24} />
            </Button>
            <Container>
                <div className="py-12 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-12 md:gap-8">
                    <div className="flex-1 flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
                        <p className="text-gray-400 text-sm mb-4 max-w-xs">
                            Feel free to reach out for collaborations or just a friendly hello!
                        </p>
                        <div className="space-y-2 mb-6 flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-2 text-gray-400 text-sm group cursor-default">
                                <FaEnvelope className="text-blue-500 group-hover:scale-110 transition-transform" />
                                <span className="truncate">{personalData.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 text-sm group cursor-default">
                                <FaPhone className="text-blue-500 group-hover:scale-110 transition-transform" />
                                {personalData.phone}
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <Button
                                as="a"
                                href={personalData.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                size="sm"
                                className="p-3! rounded-2xl"
                                aria-label="GitHub"
                            >
                                <FaGithub size={20} />
                            </Button>
                            <Button
                                as="a"
                                href={personalData.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                size="sm"
                                className="p-3! rounded-2xl"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </Button>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-1 flex-col items-center text-center">
                        <ul className="space-y-2">
                            {navigationLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm inline-flex items-center group"
                                    >
                                        <span className="w-0 h-px bg-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden md:flex flex-1 flex-col md:items-end md:text-right">
                        <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-3">
                            {personalData.name}
                        </h3>
                        <p className="text-gray-400 mb-2 cursor-default">{personalData.title}</p>
                        <p className="text-gray-500 text-sm mb-4 cursor-default">{personalData.location}</p>
                    </div>
                </div>
                <div className="py-6 border-t border-gray-800 text-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} {personalData.name}. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};
