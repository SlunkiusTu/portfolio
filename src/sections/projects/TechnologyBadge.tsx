import type { Technology } from "../../types/project";

type Props = {
    tech: Technology;
};

export const TechnologyBadge = ({ tech }: Props) => {
    const Icon = tech.icon;

    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/50 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500/50 transition-colors duration-300 cursor-default">
            <Icon className={`w-4 h-4 ${tech.color}`} />
            <span className="text-gray-200">{tech.name}</span>
        </span>
    );
};
