import { FiChevronDown } from "react-icons/fi";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    id: string;
    title: string;
    subtitle?: string;
    icon: ReactNode;
    isOpen: boolean;
    onToggle: (id: string) => void;
    children: ReactNode;
};

export const AboutWorkStyleCard = ({
    id,
    title,
    subtitle,
    icon,
    isOpen,
    onToggle,
    children,
}: Props) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className={`
                rounded-2xl overflow-hidden border border-gray-700 transition-colors duration-300
                ${isOpen ? "bg-gray-800/60" : "bg-gray-800/30 backdrop-blur-sm"}
            `}
        >
            <button
                type="button"
                onClick={() => onToggle(id)}
                aria-expanded={isOpen}
                aria-controls={`content-${id}`}
                className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
            >
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-500/20 rounded-xl text-blue-400">
                        {icon}
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-100">{title}</h3>
                        {subtitle && <p className="text-sm text-gray-400 leading-tight">{subtitle}</p>}
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-gray-500"
                >
                    <FiChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={`content-${id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 pt-2">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
