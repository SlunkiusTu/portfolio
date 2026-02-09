import { useState } from "react";
import { motion } from "framer-motion";
import {
    intro,
    techStack,
    coreValues,
    workStyle,
    sectionInfo,
} from "../../data/about.data";
import { FiGlobe, FiStar, FiUsers } from "react-icons/fi";
import { SectionHeader } from "../../components/common/SectionHeader";
import { Container } from "../../components/common/Container";
import { AboutWorkStyleCard } from "./AboutWorkStyleCard";
import { Button } from "../../components/common/Button";

type AboutSection = "tech" | "workStyle" | "values";

export const AboutMeSection = () => {
    const [expandedSection, setExpandedSection] =
        useState<AboutSection | null>(null);

    const toggleSection = (sectionId: string) => {
        setExpandedSection((prev) =>
            prev === sectionId ? null : (sectionId as AboutSection)
        );
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const slideIn = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section
            id="about"
            className="
                min-h-screen
                bg-linear-to-b
                from-gray-950
                via-gray-900
                to-gray-950
                text-gray-50
                py-24
                px-4
                sm:px-6
            "
        >
            <Container>
                <div className="max-w-6xl mx-auto">
                    <SectionHeader
                        title={sectionInfo.aboutTitle}
                        highlight={sectionInfo.aboutHighlight}
                        subtitle={sectionInfo.aboutSubtitle}
                    />
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideIn}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-5 mb-6 border border-gray-700"
                    >
                        <p className="text-gray-300 leading-relaxed">
                            {intro.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-5">
                            {intro.stats.map((stat, i) => (
                                <div
                                    className="flex-1 text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/30"
                                    key={i}
                                >
                                    <div className="text-blue-400 font-bold text-lg">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <div className="space-y-4">
                        <AboutWorkStyleCard
                            id="tech"
                            title={sectionInfo.techStackTitle}
                            subtitle={sectionInfo.techStackSubtitle}
                            icon={<FiGlobe className="text-blue-400 text-lg" />}
                            isOpen={expandedSection === "tech"}
                            onToggle={toggleSection}
                        >
                            <div className="flex flex-wrap gap-3 ">
                                {techStack.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/30 w-full sm:w-auto lg:flex-1"
                                    >
                                        <tech.icon
                                            className={`text-2xl mb-2 ${tech.color}`}
                                        />
                                        <span className="text-xs font-medium text-center mb-1">
                                            {tech.name}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            {tech.experience}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </AboutWorkStyleCard>
                        <AboutWorkStyleCard
                            id="workStyle"
                            title={workStyle.title}
                            subtitle={workStyle.description}
                            icon={<FiUsers className="text-blue-400 text-xl mt-1" />}
                            isOpen={expandedSection === "workStyle"}
                            onToggle={toggleSection}
                        >
                            <div className="flex flex-wrap gap-2">
                                {workStyle.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-gray-800/60 rounded-full text-xs font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </AboutWorkStyleCard>
                        <AboutWorkStyleCard
                            id="values"
                            title={sectionInfo.coreValuesTitle}
                            subtitle={sectionInfo.coreValuesSubtitle}
                            icon={<FiStar className="text-blue-400 text-lg" />}
                            isOpen={expandedSection === "values"}
                            onToggle={toggleSection}
                        >
                            <div className="space-y-4">
                                {coreValues.map((value, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex gap-4 p-3 bg-gray-800/40 rounded-xl"
                                    >
                                        <value.icon className="text-xl text-blue-400 mt-1" />
                                        <div>
                                            <h4 className="font-medium mb-1">
                                                {value.title}
                                            </h4>
                                            <p className="text-sm text-gray-300">
                                                {value.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </AboutWorkStyleCard>
                    </div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-8 text-center"
                    >
                        <div className="inline-flex flex-col sm:flex-row gap-3 items-center">
                            <Button
                                as="a"
                                href="/cv/Simonas_Adomaitis_CV_LT.pdf"
                                download="Simonas_Adomaitis_CV_LT.pdf"
                                size="lg"
                                variant="secondary"
                                className="rounded-full w-full sm:w-auto"
                            >
                                Download Resume LT
                            </Button>

                            <Button
                                as="a"
                                href="/cv/Simonas_Adomaitis_CV_EN.pdf"
                                download="Simonas_Adomaitis_CV_EN.pdf"
                                size="lg"
                                variant="secondary"
                                className="rounded-full w-full sm:w-auto"
                            >
                                Download Resume EN
                            </Button>
                        </div>
                        <p className="text-gray-500 text-sm mt-4">
                            Always open to new opportunities and collaborations
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
