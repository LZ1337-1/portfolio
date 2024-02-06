import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import pizzaImg from "@/public/pizza.jpg";

import miniImg from "@/public/mini.png";
import pacImg from "@/public/pac.png";
import planImg from "@/public/plan.png";
import studImg from "@/public/stud.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Baccalaureat générale (High School Diploma)",
    location: "Cachan, France",
    description:
      "J'ai obtenu mon baccalauréat général. J'ai étudié les mathématiques, et l'informatique.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Etudes supérieures (Higher Education)",
    location: "Créteil, France",
    description:
      "J'ai commencé mes études supérieures en informatique. J'ai étudié les mathématiques, l'informatique et l'anglais. J'ai appris les bases de la programmation.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Je suis ouvert à toutes opportunités",
    location: "France",
    description:
      "Je suis ouvert à toutes opportunités. Je suis à la recherche d'un stage dans le domaine de l'informatique, pour une durée de 2 à 6 mois.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Mini Shell en C",
    description:
      "J'ai recréé un mini shell en C. J'ai utilisé les appels systèmes pour recréer les commandes de base d'un shell.",
    tags: ["C", "Linux"],
    imageUrl: miniImg,
  },
  {
    title: "Pacman en java",
    description:
      "J'ai travaillé en duo sur ce projet. Nous avons recréé le jeu Pacman en Java. Nous avons utilisé la bibliothèque Swing pour l'interface graphique.",
    tags: ["Java", "Swing"],
    imageUrl: pacImg,
  },
  
  {
    title: "Site de Pizzeria",
    description:
      "J'ai travaillé sur ce projet Laravel en solo. J'ai créé un site de pizzeria. Les clients peuvent commander des pizzas et les gérants peuvent gérer les commandes.",
    tags: ["PHP", "Laravel", "SQL", "Vanilla-Css"],
    imageUrl: pizzaImg,
  },
  {
    title: "Application mobile",
    description:
      "Brève introduction à android studio",
    tags: ["java", "android"],
    imageUrl: studImg,
  },
  {
    title: "Site de gestion des plannings",
    description:
      "J'ai travaillé sur ce projet en solo. J'ai créé un site de gestion des plannings pour une université. Les professeurs peuvent gérer leurs plannings et les étudiants peuvent consulter les plannings.",
    tags: ["laravel", "SQL", "Vanilla-Css","PHP"],
    imageUrl: planImg,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Three.js",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQL",
  "SQLite",
  "Laravel",
  "Windows",
  "Python",
  "Java",
  "PHP",
  "Laravel",
  "C",
  "Kali Linux",
  "Android",
  "iOS",
  "Docker",
  "Kubernetes",
  "AWS",
  "Burp Suite",
  "Metasploit",
  "Cloudflare",
  "Nginx",
  "Apache",
  "Bootstrap",
] as const;
