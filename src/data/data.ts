import { GithubIcon, GlobeIcon } from "lucide-react";

export const DATA = {
  profile: {
    name: "Dalenza",
    position: "Fullstack Nextjs Developer",
    description:
      "Final-year Cybersecurity student specializing in full-stack development. I love building apps with Next.js and solving real problems through code. Always learning, always shipping.",
    avatarUrl: "/profile.jpg",
  },
  skills: {
    frontend: ["React", "Nextjs", "Tailwindcss", "Shadcn/ui"],
    backend: [
      "Nodejs",
      "Python",
      "Expressjs",
      "Postgresql",
      "Prisma",
      "Mongodb",
    ],
    devops: ["Docker"],
  },
  navbar: {
    socials: [
      {
        href: "",
        label: "",
        icon: "",
      },
    ],
    links: [
      {
        href: "",
        label: "",
        icon: "",
      },
    ],
  },
  experience: [
    {
      company: "Carte Assurances",
      href: "https://www.carte.com.tn/",
      badges: [],
      location: "Ariana",
      title: "Software Engineer Intern",
      logoUrl: "/carte-logo.svg",
      start: "Feb 2025",
      end: "Jul 2025",
      description: [
        "Built a Governance, Risk & Compliance dashboard improving audit and control workflows.",
        "Implemented 2FA and role-based access control (ZenStack) to ensure data security.",
        "Developed modules for assessments, controls, evidences, and file uploads.",
        "Delivered an analytics dashboard and admin tools for scalable user management.",
      ],
    },
    {
      company: "McZen Technologies",
      badges: [],
      href: "https://mczen-technologies.com",
      location: "Djerba",
      title: "Software Engineer Intern",
      logoUrl: "/mczen-logo.jpg",
      start: "Feb 2023",
      end: "Jul 2023",
      description: [
        "Developed a backoffice dashboard to streamline restaurant operations and order management.",
        "Built with React (SPA), Express.js, and MongoDB, ensuring responsive and efficient performance.",
        "Implemented JWT authentication, menu management, and kanban-style order tracking.",
        "Added profile management and basic analytics to improve visibility and decision-making.",
      ],
    },
    {
      company: "McZen Technologies",
      badges: [],
      href: "https://mczen-technologies.com",
      location: "Djerba",
      title: "Software Engineer Intern",
      logoUrl: "/mczen-logo.jpg",
      start: "Jun 2022",
      end: "Aug 2022",
      description: [
        "Developed a web-based data visualization app with interactive and dynamic charts for business stakeholders.",
        "Built with Vanilla JavaScript and Chart.js, delivering high performance and smooth interactivity.",
        "Enhanced data analysis efficiency and user engagement through intuitive visualization design.",
      ],
    },
  ],
  education: [
    {
      school: "Institut Superieur d'informatique",
      href: "http://www.isi.rnu.tn/",
      degree:
        "Master's Degree in Information Systems and Infrastructure Security (MSSII)",
      logoUrl: "/isi.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Institut Superieur d'informatique",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/isi.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Carte GRC",
      image: "/carte-grc.png",
      description:
        "An enterprise Governance, Risk & Compliance app featuring secure 2FA login, role-based access (ZenStack), and tools for managing assessments, controls, evidences, and analytics — all in a modern, intuitive dashboard.",
      technologies: [
        "Nextjs",
        "Prisma",
        "Postgresql",
        "Tailwindcss",
        "Shadcn/ui",
        "Zenstack",
        "Better-auth",
      ],
      links: [
        {
          label: "Source",
          href: "https://github.com/dalenza",
          icon: GithubIcon,
        },
        {
          label: "Live Demo",
          href: "https://carte-grc-final.vercel.app",
          icon: GlobeIcon,
        },
      ],
    },
    {
      title: "Tasty Food",
      image: "/tasty-food.png",
      description:
        "A restaurant management dashboard for streamlining daily operations — featuring menu management, JWT authentication, kanban-style order tracking, basic analytics, and profile management, built for efficiency and clarity.",
      technologies: ["React", "MongoDB", "Nodejs", "Expressjs", "MUI"],
      links: [
        {
          label: "Source",
          href: "https://github.com/dalenza",
          icon: GithubIcon,
        },
      ],
    },
  ],
};
