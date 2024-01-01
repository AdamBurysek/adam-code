import "./mySkills.css";

const MySkills = (props: any) => {
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
      name: "React",
      url: "https://www.react.dev",
    },
    {
      name: "React Native",
      url: "https://reactnative.dev",
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
        <div className="my-skills_content">
          <ul>
            {skillz.map((skill, index) => (
              <a href={skill.url} target="blank" key={index}>
                <li>{skill.name}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
