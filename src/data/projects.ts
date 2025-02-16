import quintaImage from "../assets/img/project/quinta.png";
import chosenImage from "../assets/img/project/chosen.png";
import dmblogImage from "../assets/img/project/dmblog.png";
import jadassaImage from "../assets/img/project/jadassa.png";

export type TTool = 'react' | 'typescript' | 'postgres' | 'spring' | 'mongodb' | 'node' | 'bootstrap';

export type TProject = {
    repo: string,
    link: string,
    title: string,
    image: string,
    description: string,
    createdAt: Date,
    updatedAt: Date,
    tools: TTool[],
}

const quinta: TProject = {
    repo: "https://quintaelrenacer.com",
    link: "https://quintaelrenacer.com",
    title: "quinta el renacer",
    image: quintaImage,
    description: "Resort’s landing page that promotes the owners's contact and social media, which since created has increased the landlord's clientele over 200%.",
    createdAt: new Date('January 18, 2025 03:24:00'),
    updatedAt: new Date('February 10, 2025 01:23:00'),
    tools: ['react', 'typescript', 'bootstrap', 'node',]
}

const chosen: TProject = {
    repo: "https://github.com/dmsosa/the-chosen",
    link: "https://dmsosa.github.io/the-chosen",
    title: "the chosen website",
    image: chosenImage,
    description: "Descriptive website presenting the world-wide known series of The Chosen, presenting the plot and cast in a creative way that may engage new fans or motivate people to watch it.",
    createdAt: new Date('January 17, 2025 03:24:00'),
    updatedAt: new Date('February 11, 2025 01:23:00'),
    tools: ['react', 'typescript', 'bootstrap', 'node',]
}

const dmblog: TProject = {
    repo: "https://github.com/dmsosa/dmblog",
    link: "https://dmsosa.github.io/dmblog",
    title: "realworld blog",
    image: dmblogImage,
    description: "Example of a real world alike blog, which allow users to interact with others with activities like writing, reading, comment articles and even following other users.",
    createdAt: new Date('January 17, 2025 03:24:00'),
    updatedAt: new Date('February 11, 2025 01:23:00'),
    tools: ['react', 'typescript', 'bootstrap', 'node',]
}

const jadassa: TProject = {
    repo: "https://github.com/dmsosa/jadassa-page",
    link: "https://dmsosa.github.io/jadassa-page",
    title: "react gift app",
    image: jadassaImage,
    description: "Creative web application with games and quizzes to demonstrate the crucial React skills every react developer should know.",
    createdAt: new Date('May 17, 2024 03:24:00'),
    updatedAt: new Date('November 11, 2024 01:23:00'),
    tools: ['react', 'typescript', 'bootstrap', 'node',]
}

export const projectsArray = [quinta, chosen, dmblog, jadassa];