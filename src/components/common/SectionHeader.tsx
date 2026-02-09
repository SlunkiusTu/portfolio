import { motion } from "framer-motion";

type Props = {
    title: string;
    highlight?: string;
    subtitle?: string;
};

export const SectionHeader = ({
    title,
    highlight,
    subtitle,
}: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-6 cursor-default">
                {title}
                {highlight && (
                    <span className="bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                        {highlight}
                    </span>
                )}
            </h2>

            {subtitle && (
                <p className="text-xl text-gray-400 max-w-3xl mx-auto cursor-default">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};
