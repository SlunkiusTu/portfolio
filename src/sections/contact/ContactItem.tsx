import { motion } from "framer-motion";

interface Props {
    icon: React.ReactNode;
    label: string;
    info: string;
}

export const ContactItem = ({ icon, label, info }: Props) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 60 }}
            className="flex items-start space-x-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/30"
        >
            <div className="p-3 bg-linear-to-br from-blue-600 to-blue-600 rounded-lg shrink-0">
                {icon}
            </div>
            <div>
                <p className="text-gray-400 text-sm cursor-default">{label}</p>
                <p className="text-lg font-medium text-gray-200 break-all cursor-default">
                    {info}
                </p>
            </div>
        </motion.div>
    );
};
