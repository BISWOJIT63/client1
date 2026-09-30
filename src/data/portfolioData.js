const portfolioData = {
  personal: {
    name: "Sritam Sahoo",
    location: "Tichhini, Krushnaprasad, Puri, Odisha, India",
    role: "MCA Student & Aspiring Software Developer",
    university: "Maharaja Sriram Chandra Bhanja Deo University",
    course: "Master of Computer Applications",
    intro:
      "I'm an MCA student passionate about building modern web applications, solving problems with code, and continuously learning new technologies.",
  },
  skills: {
    programming: ["Java", "Python", "C", "C++"],
    frontend: ["HTML", "CSS", "JavaScript", "React.js"],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
    concepts: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
    ],
  },
  education: [
    {
      course: "Master of Computer Applications (MCA)",
      institution: "Maharaja Sriram Chandra Bhanja Deo University",
      location: "Odisha, India",
      status: "Currently Pursuing",
    },
  ],
  projects: [
    {
      title: "Personal Portfolio",
      description:
        "A modern responsive personal portfolio website showcasing my skills, education, projects and developer journey.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      github: "#",
      live: "#",
      accent: "indigo",
      code: 'const portfolio = {\n  craft: "with intention",\n  learn: "every day"\n}',
    },
    {
      title: "E-Commerce Web Application",
      description:
        "A responsive e-commerce interface with product browsing, filtering, product details and shopping cart functionality.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      github: "#",
      live: "#",
      accent: "cyan",
      code: "const cart = items\n  .filter(item => item.inStock)\n  .map(addToCart)",
    },
    {
      title: "Full Stack Web Application",
      description:
        "A full-stack web application demonstrating frontend development, backend APIs, authentication and database integration.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
      accent: "violet",
      code: 'app.get("/api/projects",\n  async (request, response) => {\n    response.json(projects)\n  })',
    },
  ],
  journey: [
    {
      title: "Learning & Building",
      description:
        "Exploring modern web development and building practical projects that turn ideas into working interfaces.",
    },
    {
      title: "Problem Solving",
      description:
        "Practicing Data Structures and Algorithms to strengthen programming fundamentals and logical thinking.",
    },
    {
      title: "Full Stack Development",
      description:
        "Learning frontend, backend, databases and API development one focused project at a time.",
    },
  ],
  social: { github: "#", linkedin: "#", email: "#" },
};

export default portfolioData;
