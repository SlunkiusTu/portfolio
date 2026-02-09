import type { IconType } from "react-icons";

export type Technology = {
    name: string;
    icon: IconType;
    color: string;
};

export type ProjectStatus = "in-progress" | "completed" | "planned";

export type Platform = "web" | "mobile";

export type Project = {
    id: string;
    title: string;
    description: string;
    technologies: Technology[];
    platform: Platform;
    status: ProjectStatus;
    liveUrl?: string;
    sourceUrl?: string;
};
