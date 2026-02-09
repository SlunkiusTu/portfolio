import { FiCode, FiLayers, FiTrendingUp, FiUsers } from "react-icons/fi";
import { SiReact, SiTypescript } from "react-icons/si";

export const intro = {
    description: `Motivated Front-End Developer with experience in building and maintaining
web and mobile applications. I value clean code, long-term maintainability,
and continuous learning.`,
    stats: [
        { label: "Years React", value: "2+" },
        { label: "Projects", value: "10+" },
        { label: "Responsive", value: "100%" },
    ],
};

export const techStack = [
    { icon: SiReact, name: 'React', color: 'text-blue-400', experience: '2+ years' },
    { icon: SiReact, name: 'React Native', color: 'text-sky-400', experience: '2+ years' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500', experience: '2+ years' },
];

export const coreValues = [
    {
        icon: FiCode,
        title: 'Clean Code',
        description: 'Writing maintainable, scalable code that follows best practices'
    },
    {
        icon: FiLayers,
        title: 'Maintainability',
        description: 'Focusing on long-term solutions that are easy to update and extend'
    },
    {
        icon: FiTrendingUp,
        title: 'Continuous Learning',
        description: 'Always staying updated with the latest technologies and methodologies'
    },
    {
        icon: FiUsers,
        title: 'Team Collaboration',
        description: 'Effective communication and collaboration in team environments'
    },
];

export const workStyle = {
    title: "Work Style",
    description: "Independent & collaborative team player",
    tags: ["Team Player", "Self-Motivated", "Detail-Oriented", "Problem Solver"],
};

export const sectionInfo = {
    aboutTitle: "About",
    aboutHighlight: "Me",
    aboutSubtitle: "Some info from my background",
    techStackTitle: "Tech Stack",
    techStackSubtitle: "Technologies I work with",
    coreValuesTitle: "How I Work",
    coreValuesSubtitle: "What drives my work",
};
