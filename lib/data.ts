import React from "react";
import { CgCode, CgCodeSlash, CgReadme, CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuCode2, LuGraduationCap } from "react-icons/lu";
import diseaseClass from "@/public/disease_classifier.jpg";
import pswdExt from "@/public/codeImg.jpg";
import jeevan from "@/public/jeevan.jpg";
import chatApp from "@/public/chatApp.jpg";

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
    title: "DRDO Internship Program",
    location: "Bangalore, Karnataka",
    description:
      "Project intern at DRDO where I developed an ASR app using python.",
    icon: React.createElement(LuCode2),
    date: "Aug 2023 - Oct 2023",
  },
  {
    title: "Project Intern at Mc Donald's",
    location: "Remote",
    description:
      "Project intern at Mc Donald's where I am developing a program for product enhancement through targeted marketing.",
    icon: React.createElement(LuCode2),
    date: "Sep 2023 - Present",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    location: "Remote",
    description:
      "A global learning program designed by Microsoft to provide students with guidance and aupport needed to becom leaders and mentors in their community while developing technical skills.",
    icon: React.createElement(CgReadme),
    date: "Nov 2023 - present",
  },
  {
    title: "SDE Intern",
    location: "Tulsa, Oklahoma - Remote",
    description:
      "In my current role, I am in charge of developing a large scale web platform. This involves working with NextJS, PostgreSQL, Firebase, Google Cloud Platform, and other relevant technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Disease Classifier App",
    description:
      "Uses an ML model and a fun UI made from flutter to predict disease from the given set of symptoms.",
    tags: ["Flutter", "Dart", "Firebase", "Python", "ML", "FastAPI"],
    imageUrl: diseaseClass,
  },
  {
    title: "Chat Application",
    description:
      "A Chat Room Application using flutter and Google's firebase.",
    tags: ["Flutter", "Dart", "Firbase"],
    imageUrl: chatApp,
  },
  {
    title: "Password Extractor",
    description:
      "Allows users to extract passwords and SSIDs of WiFi networks they have ever made a connection with.",
    tags: ["Python"],
    imageUrl: pswdExt,
  },
  {
    title: "Online Pharmacy App",
    description:
      "E-commerce platform to purchase healthcare products developed using flutter. It is also equipped with AI chatbot",
    tags: ["Flutter", "Dart", "Python", "FastAPI", "MongoDB"],
    imageUrl: jeevan,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Flutter",
  "Dart",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Flask",
  "FastAPI",
  "Postman",
  "Andriod Studio",
  "Strapi",
  "Firebase",
  "Java",
  "C",
  "C++",
  "Arduino",
  "API Dev",
  "Golang"
] as const;
