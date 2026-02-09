import { FaReact } from 'react-icons/fa';
import {
    SiTypescript,
    SiMongodb,
    SiExpress,
    SiNextdotjs,
    SiPostgresql,
    SiJavascript,
    SiMui,
    SiRedux
} from 'react-icons/si';

export const skillsData = {
    leftColumn: [
        { id: 1, name: 'React', icon: FaReact, color: 'text-blue-500' },
        { id: 2, name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { id: 3, name: 'React Native', icon: FaReact, color: 'text-sky-400' },
        { id: 4, name: 'JavaScript ', icon: SiJavascript, color: 'text-yellow-300' },
        { id: 5, name: 'Material-UI', icon: SiMui, color: 'text-blue-500' },
    ],
    rightColumn: [
        { id: 6, name: 'Redux', icon: SiRedux, color: 'text-purple-600' },
        { id: 7, name: 'Express', icon: SiExpress, color: 'text-gray-300' },
        { id: 8, name: 'Next.js', icon: SiNextdotjs, color: 'text-black-300' },
        { id: 9, name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
        { id: 10, name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },

    ],
};
