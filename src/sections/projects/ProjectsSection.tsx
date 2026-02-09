import { Container } from "../../components/common/Container";
import { SectionHeader } from "../../components/common/SectionHeader";
import { Button } from "../../components/common/Button";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../../data/projects.data";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
    return (
        <section
            id="projects"
            className="
             min-h-screen
             bg-linear-to-b
           from-gray-950
           via-gray-900
           to-gray-950
           text-gray-50
            py-24
            px-4
            "
        >
            <Container>
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        title="Featured"
                        highlight="Projects"
                        subtitle="Here are some of my recent projects, each carefully crafted with attention to detail,
                        performance, and user experience"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </div>

                    <motion.div
                        whileInView={{ opacity: 1 }}
                        className="text-center"
                    >
                        <Button
                            variant="secondary"
                            className=" text-gray-300 hover:text-white"
                            disabled
                            rightIcon={
                                <FaArrowRight className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                            }
                        >
                            See All Projects
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
