import { useRef } from "react";
import "./mySkills.css";
import { useInView, motion } from "framer-motion";

type Props = {
  language: string;
};

const MySkills = (props: Props) => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true });

  const variants = {
    show: { x: 0 },
    hide: { x: 100000 },
  };
  const skillz = [
    { name: "HTML", url: "https://en.wikipedia.org/wiki/HTML" },
    { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    {
      name: "JavaScript",
      url: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      name: "TypeScript",
      url: "https://en.wikipedia.org/wiki/TypeScript",
    },
    {
      name: "GitHub",
      url: "https://github.com",
    },
    {
      name: "Figma",
      url: "https://figma.com",
    },
    {
      name: "Adobe Photoshop",
      url: "https://www.adobe.com/cz/products/photoshop.html",
    },
    {
      name: "React.js",
      url: "https://www.react.dev",
    },
    {
      name: "React Native",
      url: "https://reactnative.dev",
    },
    {
      name: "Next.js",
      url: "https://nextjs.org/",
    },
    {
      name: "Electron",
      url: "https://www.electronjs.org",
    },
    {
      name: "Bootstrap",
      url: "https://getbootstrap.com",
    },
    {
      name: "Tailwind",
      url: "https://tailwindcss.com",
    },
    {
      name: "Mantine",
      url: "https://mantine.dev/",
    },
    {
      name: "Jest",
      url: "https://jestjs.io",
    },
    {
      name: "Node.js",
      url: "https://nodejs.org/en",
    },
    {
      name: "Python",
      url: "https://www.python.org",
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com",
    },
    {
      name: "REST API",
      url: "https://en.wikipedia.org/wiki/REST",
    },
    {
      name: "Cloudinary",
      url: "https://cloudinary.com",
    },
    {
      name: "Clerk",
      url: "https://clerk.com",
    },
    {
      name: "OAuth",
      url: "https://en.wikipedia.org/wiki/OAuth",
    },
    {
      name: "React Email",
      url: "https://react.email/",
    },
    {
      name: "Sentry",
      url: "https://www.sentry.io",
    },
    {
      name: "BugSnag",
      url: "https://www.bugsnag.com",
    },
    {
      name: "Postman",
      url: "https://www.postman.com",
    },
    {
      name: "Insomnia",
      url: "https://insomnia.rest",
    },
  ];

  return (
    <section id="my-skills" className="my-skills">
      <div className="section-line" />
      <div className="section-content">
        <h1>{props.language === "en" ? "My Skills" : "Moje dovednosti"}</h1>
        <div className="my-skills_content" ref={contentRef}>
          <ul>
            {skillz.map((skill, index) => (
              <motion.a
                animate={isInView ? "show" : "hide"}
                transition={{ duration: 0.3 * index }}
                variants={variants}
                href={skill.url}
                target="blank"
                key={index}
              >
                <li>{skill.name}</li>
              </motion.a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
