import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Container } from "../../components/common/Container";
import { ContactItem } from "./ContactItem";
import { ContactForm } from "./contactForm/ContactForm";
import { personalData } from "../../data/personal.data";
import { Button } from "../../components/common/Button";
import { SectionHeader } from "../../components/common/SectionHeader";

export const ContactSection = () => {
    return (
        <section
            id="contact"
            className="
                min-h-screen 
                bg-linear-to-b
                from-gray-950
                via-gray-900
                to-gray-950
                text-gray-50
                py-24
                "
        >
            <Container>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 md:mb-16"
                    >
                        <SectionHeader
                            title="Let's"
                            highlight='Connect'

                        />
                    </motion.div>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div>
                                <h3 className="text-3xl font-bold text-gray-100 mb-4 cursor-default">
                                    Get In Touch
                                </h3>
                                <p className="text-xl text-gray-400 cursor-default">
                                    Have a project in mind or just want to say hi? My inbox is always open
                                </p>
                            </div>
                            <div className="space-y-5">
                                <ContactItem
                                    icon={<FaEnvelope className="w-6 h-6 text-white" />}
                                    label="Email"
                                    info={personalData.email}
                                />
                                <ContactItem
                                    icon={<FaPhone className="w-6 h-6 text-white" />}
                                    label="Phone"
                                    info={personalData.phone}
                                />
                                <ContactItem
                                    icon={<FaMapMarkerAlt className="w-6 h-6 text-white" />}
                                    label="Location"
                                    info={personalData.location}
                                />
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <p className="text-gray-400 mb-3 cursor-default">Find me on</p>
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
                        </motion.div>
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </section>
    );
};
