import { motion } from "framer-motion";

interface Props {
    href: string;
    icon: React.ReactNode;
    label: string;
}

export const SocialLink = ({ href, icon, label }: Props) => {
    return (
        <motion.a
            whileHover={{ y: -3 }}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
        >
            {icon}
        </motion.a>
    );
};
