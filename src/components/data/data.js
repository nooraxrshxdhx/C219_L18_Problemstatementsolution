export const schools = [
  {
    id: "soi",
    name: "School of Infocomm (SOI)",
    description:
      "The School of Infocomm provides programmes in IT, digital media and business-related diplomas.",
    diplomas: [
      {
        id: "it",
        name: "Diploma in Information Technology",
        description:
          "A broad-based IT programme covering software development, networking, and emerging technologies.",
        image: "/assets/it.jpg",
        modules: [
          {
            id: "it101",
            name: "Programming Fundamentals",
            description:
              "Introduction to programming concepts using modern languages and problem-solving techniques.",
            duration: "12 weeks",
            credits: 4,
          },
          {
            id: "it102",
            name: "Web Development",
            description:
              "Covers HTML, CSS, and JavaScript to build responsive and interactive websites.",
            duration: "12 weeks",
            credits: 4,
          },
        ],
      },

      {
        id: "dm",
        name: "Diploma in Digital Media",
        description:
          "A creative programme focusing on design, animation, and digital content creation.",
        image: "/assets/dm.jpg",
        modules: [
          {
            id: "dm101",
            name: "Digital Design Basics",
            description:
              "Learn the fundamentals of visual design, layout, and digital tools.",
            duration: "12 weeks",
            credits: 4,
          },
          {
            id: "dm102",
            name: "Animation Principles",
            description:
              "Covers motion, timing, and storytelling through animation techniques.",
            duration: "12 weeks",
            credits: 4,
          },
        ],
      },

      {
        id: "ba",
        name: "Diploma in Business Administration",
        description:
          "A business-focused programme covering marketing, finance, and management fundamentals.",
        image: "/assets/ba.jpg",
        modules: [
          {
            id: "ba101",
            name: "Principles of Marketing",
            description:
              "Introduction to marketing concepts, consumer behaviour, and branding.",
            duration: "12 weeks",
            credits: 4,
          },
          {
            id: "ba102",
            name: "Business Finance",
            description:
              "Covers financial statements, budgeting, and financial decision-making.",
            duration: "12 weeks",
            credits: 4,
          },
        ],
      },
    ],
  },

  {
    id: "seg",
    name: "School of Engineering",
    description:
      "The School of Engineering (SEG) equips students with practical skills in robotics, sustainability, aviation, and advanced manufacturing. SEG blends hands-on learning with real-world problem solving to prepare students for the future of engineering and technology.",
    diplomas: [
      {
        id: "aero",
        name: "Diploma in Aerospace Engineering",
        description:
          "Learn the fundamentals of aircraft systems, aerodynamics, and aviation maintenance. This diploma prepares students for careers in the aerospace and aviation industries.",
        image: "/assets/aero.jpg",
        modules: [
          {
            id: "aero101",
            name: "Introduction to Aerodynamics",
            description:
              "Covers the basic principles of aerodynamics, airflow, lift, drag, and aircraft performance.",
          },
          {
            id: "aero102",
            name: "Aircraft Systems & Maintenance",
            description:
              "Explore aircraft mechanical systems, safety protocols, and maintenance procedures.",
          },
        ],
      },
      {
        id: "eee",
        name: "Diploma in Electrical & Electronic Engineering",
        description:
          "Build a strong foundation in circuits, embedded systems, power electronics, and automation. A versatile diploma with wide industry applications.",
        image: "/assets/eee.jpg",
        modules: [
          {
            id: "eee101",
            name: "Circuit Fundamentals",
            description:
              "Learn the basics of electrical circuits, components, measurements, and analysis.",
          },
          {
            id: "eee102",
            name: "Embedded Systems Programming",
            description:
              "Hands-on introduction to microcontrollers, sensors, and real-time embedded applications.",
          },
        ],
      },
    ],
  },
];

export function getSchoolById(id) {
  return schools.find((s) => s.id === id);
}

export function getDiplomaById(diplomaId) {
  for (const school of schools) {
    const found = school.diplomas.find((d) => d.id === diplomaId);
    if (found) return found;
  }
  return null;
}

export function getDiplomaByIdInSchool(schoolId, diplomaId) {
  const school = getSchoolById(schoolId);
  if (!school) return null;
  return school.diplomas.find((d) => d.id === diplomaId) || null;
}

export function getModuleById(diplomaId, moduleId) {
  const diploma = getDiplomaById(diplomaId);
  if (!diploma) return null;
  return diploma.modules.find((m) => m.id === moduleId) || null;
}

export function getModuleByIdInSchool(schoolId, diplomaId, moduleId) {
  const diploma = getDiplomaByIdInSchool(schoolId, diplomaId);
  if (!diploma) return null;
  return diploma.modules.find((m) => m.id === moduleId) || null;
}