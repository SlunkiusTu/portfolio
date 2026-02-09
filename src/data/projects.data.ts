import { FaNodeJs, FaReact, FaStripe } from "react-icons/fa";
import {
    SiExpress,
    SiMongodb,
    SiSocketdotio,
    SiTailwindcss,
    SiNextdotjs,
    SiReact,
} from "react-icons/si";
import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: "nextjs-ecommerce",
        title: "E-commerce Platform",
        description:
            "Full-featured e-commerce web application built with Next.js, featuring secure authentication, Stripe payments, product management, and an admin dashboard",
        platform: "web",
        status: "in-progress",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs, color: "text-gray-200" },
            { name: "React", icon: FaReact, color: "text-blue-400" },
            { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "Stripe", icon: FaStripe, color: "text-purple-400" },
        ],
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        id: "event-notification-app",
        title: "City Events Notification App",
        description:
            "React Native mobile application that notifies users about upcoming events in their city, featuring map-based locations, reminders, and push notifications",
        platform: "mobile",
        status: "in-progress",
        technologies: [
            { name: "React Native", icon: SiReact, color: "text-blue-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        ],
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        id: "realtime-chat-app",
        title: "Real-time Chat Application",
        description:
            "Real-time chat application using WebSockets with user rooms, live messaging, and message persistence",
        platform: "web",
        status: "planned",
        technologies: [
            { name: "React", icon: FaReact, color: "text-blue-400" },
            { name: "Express", icon: SiExpress, color: "text-gray-300" },
            { name: "Socket.IO", icon: SiSocketdotio, color: "text-gray-100" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
            { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400" },
        ],
        liveUrl: "#",
        sourceUrl: "#",
    },
];
