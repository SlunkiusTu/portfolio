import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Card } from "../../components/common/Card";
import { Button } from "../../components/common/Button";
import type { Project } from "../../types/project";
import { TechnologyBadge } from "./TechnologyBadge";

type Props = {
    project: Project;
};

const statusProgres = {
    "in-progress": {
        label: "In Progress",
        className: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    },
    completed: {
        label: "Completed",
        className: "bg-green-500/10 text-green-400 border-green-500/30",
    },
    planned: {
        label: "Planned",
        className: "bg-gray-500/10 text-gray-400 border-gray-500/30",
    },
};

const platformUsed = {
    web: {
        label: "Web",
        className: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    },
    mobile: {
        label: "Mobile",
        className: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
};

export const ProjectCard = ({ project }: Props) => {
    const status = statusProgres[project.status];
    const platform = platformUsed[project.platform];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 60 }}
            viewport={{ once: true }}
            className="h-full"
        >
            <Card className="p-6 h-full flex flex-col bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl">
                <div className="flex gap-2 mb-3">
                    <span
                        className={`px-2.5 py-1 text-xs font-medium rounded-full border ${status.className}`}
                    >
                        {status.label}
                    </span>

                    <span
                        className={`px-2.5 py-1 text-xs font-medium rounded-full border ${platform.className}`}
                    >
                        {platform.label}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-2 hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                        <TechnologyBadge key={tech.name} tech={tech} />
                    ))}
                </div>
                <div className="flex gap-3 mt-auto">
                    {project.liveUrl && (
                        <Button
                            as="a"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            disabled
                            className="flex-1 text-sm bg-linear-to-r"
                            leftIcon={<FaExternalLinkAlt />}
                        >
                            Live Demo
                        </Button>
                    )}
                    {project.sourceUrl && (
                        <Button
                            as="a"
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            disabled
                            variant="secondary"
                            className="flex-1 text-sm border-gray-700 text-gray-300"
                            leftIcon={<FaGithub />}
                        >
                            Source Code
                        </Button>
                    )}
                </div>
            </Card>
        </motion.div>
    );
};
