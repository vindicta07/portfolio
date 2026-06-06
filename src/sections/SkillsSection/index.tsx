import { SkillGroup } from "@/sections/SkillsSection/components/SkillGroup";

import typescriptIcon from "@/assets/icons/typescript.svg";
import pythonIcon from "@/assets/icons/python.svg";
import javaIcon from "@/assets/icons/java.svg";
import gnubashIcon from "@/assets/icons/gnubash.svg";
import javascriptIcon from "@/assets/icons/javascript.svg";
import matlabIcon from "@/assets/icons/matlab.svg";
import cIcon from "@/assets/icons/c.svg";
import reactIcon from "@/assets/icons/react.svg";
import nextdotjsIcon from "@/assets/icons/nextdotjs.svg";
import tailwindcssIcon from "@/assets/icons/tailwindcss.svg";
import framerIcon from "@/assets/icons/framer.svg";
import reactrouterIcon from "@/assets/icons/reactrouter.svg";
import nodedotjsIcon from "@/assets/icons/nodedotjs.svg";
import bunIcon from "@/assets/icons/bun.svg";
import djangoIcon from "@/assets/icons/django.svg";
import fastapiIcon from "@/assets/icons/fastapi.svg";
import mongodbIcon from "@/assets/icons/mongodb.svg";
import postgresqlIcon from "@/assets/icons/postgresql.svg";
import mysqlIcon from "@/assets/icons/mysql.svg";
import sqliteIcon from "@/assets/icons/sqlite.svg";
import deepmindIcon from "@/assets/icons/deepmind.svg";
import gitIcon from "@/assets/icons/git.svg";
import githubIcon from "@/assets/icons/github.svg";
import vscodeIcon from "@/assets/icons/vscode.svg";
import postmanIcon from "@/assets/icons/postman.svg";
import vercelIcon from "@/assets/icons/vercel.svg";
import googlecloudIcon from "@/assets/icons/googlecloud.svg";
import amazonwebservicesIcon from "@/assets/icons/amazonwebservices.svg";
import figmaIcon from "@/assets/icons/figma.svg";
import dassaultsystemesIcon from "@/assets/icons/dassaultsystemes.svg";

export const SkillsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px]">
      <h2 className="text-5xl box-border caret-transparent tracking-[1.2px] leading-[48px] outline-[3px] font-meyrin">
        Skills
      </h2>
      <SkillGroup
        title="Languages"
        subtitle="(These are up there with my mother tongue)"
        skills={[
          {
            iconUrl: pythonIcon,
            name: "Python",
          },
          {
            iconUrl: javaIcon,
            name: "Java",
          },
          {
            iconUrl: typescriptIcon,
            name: "Typescript",
          },
          {
            iconUrl: gnubashIcon,
            name: "Bash",
          },
          {
            iconUrl: javascriptIcon,
            name: "Javascript",
          },
          {
            iconUrl: matlabIcon,
            name: "MATLAB",
          },
          {
            iconUrl: cIcon,
            name: "C",
          },
        ]}
      />
      <SkillGroup
        title="Frameworks and Libraries"
        skills={[
          {
            iconUrl: reactIcon,
            name: "React",
          },
          {
            iconUrl: nextdotjsIcon,
            name: "NextJS",
            invertInDarkMode: true,
          },
          {
            iconUrl: tailwindcssIcon,
            name: "Tailwind",
          },
          {
            iconUrl: framerIcon,
            name: "Motion",
          },
          {
            iconUrl: reactrouterIcon,
            name: "React Router",
          },
        ]}
      />
      <SkillGroup
        title="Backend and Runtimes"
        skills={[
          {
            iconUrl: nodedotjsIcon,
            name: "NodeJS",
          },
          {
            iconUrl: bunIcon,
            name: "Bun",
          },
          {
            iconUrl: djangoIcon,
            name: "Django",
            invertInDarkMode: true,
          },
          {
            iconUrl: fastapiIcon,
            name: "FastAPI",
          },
        ]}
      />
      <SkillGroup
        title="Database"
        skills={[
          {
            iconUrl: mongodbIcon,
            name: "MongoDB",
          },
          {
            iconUrl: postgresqlIcon,
            name: "Postgres",
          },
          {
            iconUrl: mysqlIcon,
            name: "MySQL",
          },
          {
            iconUrl: sqliteIcon,
            name: "SQLite",
            invertInDarkMode: true,
          },
        ]}
      />
      <SkillGroup
        title="Developer tools"
        skills={[
          {
            iconUrl: deepmindIcon,
            name: "Antigravity",
          },
          {
            iconUrl: gitIcon,
            name: "Git",
          },
          {
            iconUrl: githubIcon,
            name: "Github",
            invertInDarkMode: true,
          },
          {
            iconUrl: vscodeIcon,
            name: "VS Code",
          },
          {
            iconUrl: postmanIcon,
            name: "Postman",
          },
          {
            iconUrl: vercelIcon,
            name: "Vercel",
            invertInDarkMode: true,
          },
        ]}
      />
      <SkillGroup
        title="Cloud Platforms"
        skills={[
          {
            iconUrl: googlecloudIcon,
            name: "GCP",
          },
          {
            iconUrl: amazonwebservicesIcon,
            name: "AWS",
          },
        ]}
      />
      <SkillGroup
        title="Design & Modeling"
        skills={[
          {
            iconUrl: figmaIcon,
            name: "Figma",
          },
          {
            iconUrl: dassaultsystemesIcon,
            name: "SolidWorks",
          },
        ]}
      />
    </section>
  );
};