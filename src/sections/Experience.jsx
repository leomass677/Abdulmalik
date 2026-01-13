import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "Jun 2025 — Present",
    role: "Junior Frontend Developer",
    company: "StartupGrid",
    description:
      "Developing user interfaces for early-stage startups. Building responsive components and collaborating with senior developers on client projects. Currently contributing to a React-based analytics dashboard.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Git",
      "Framer Motion",
    ],
    current: true,
  },
  {
    period: "Mar 2025 — May 2025",
    role: "Frontend Intern",
    company: "WebCraft Studio",
    description:
      "Supported development of client websites under mentorship. Implemented responsive designs from Figma files and learned industry best practices for code review and deployment.",
    technologies: ["HTML", "CSS", "JavaScript", "React Basics"],
    current: false,
  },
  {
    period: "Jan 2025 — Mar 2025",
    role: "Web Development Student",
    company: "Malhub Academy",
    description:
      "Completed intensive 3-month frontend bootcamp specializing in modern web technologies. Built portfolio projects including a real-time chat app with Firebase, e-commerce site with React, and task manager with local storage.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Firebase",
      "Git/GitHub",
    ],
    current: false,
    highlight: true,
  },
  {
    period: "2022 — 2024",
    role: "Technical Support Analyst",
    company: "Global Systems Inc.",
    description:
      "Provided IT support and maintained internal web tools. Developed interest in programming through troubleshooting web applications and basic scripting.",
    technologies: ["Technical Support", "Basic Scripting", "Problem Solving"],
    current: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Custom ease curve for smoothness
    },
  },
};

const timelineDotVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

const cardVariants = {
  initial: {
    scale: 0.95,
    opacity: 0.5,
    y: 20,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const glowLineVariants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "100%",
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

export const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-16"
        >
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            My Path from{" "}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif italic font-normal text-white"
            >
              IT Support to Junior Developer
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-muted-foreground"
          >
            Beginning my coding journey in 2025 with Malhub's bootcamp, I
            rapidly transitioned into professional web development through
            dedicated learning and practical application.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Glow Line */}
          <motion.div
            variants={glowLineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"
          />

          {/* Experience Items Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, idx) => {
              const delay = idx * 0.2;

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  custom={delay}
                  className="relative grid md:grid-cols-2 gap-8"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    variants={timelineDotVariants}
                    className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"
                    whileHover={{ scale: 1.5 }}
                  >
                    {exp.current && (
                      <motion.span
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.75 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full bg-primary"
                      />
                    )}
                    {exp.highlight && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.5,
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        className="absolute inset-0 rounded-full bg-primary/30"
                      />
                    )}
                  </motion.div>

                  {/* Experience Card */}
                  <motion.div
                    className={`pl-8 md:pl-0 ${
                      idx % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    custom={delay}
                  >
                    <motion.div
                      className={`glass p-6 rounded-2xl border border-primary/30 transition-all duration-300 cursor-pointer ${
                        exp.highlight
                          ? "bg-gradient-to-br from-primary/5 to-primary/10 border-primary/50 shadow-lg relative overflow-hidden"
                          : "hover:border-primary/50"
                      }`}
                      whileHover={{
                        boxShadow: "0 20px 40px rgba(32,178,166,0.1)",
                      }}
                    >
                      {/* Highlight Gradient Effect */}
                      {exp.highlight && (
                        <motion.div
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                          }}
                          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none"
                        />
                      )}

                      <div className="relative z-10">
                        <div className="flex justify-between items-start">
                          <motion.span
                            className="text-sm text-primary font-medium"
                            whileHover={{ scale: 1.05 }}
                          >
                            {exp.period}
                          </motion.span>
                          {exp.highlight && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 15,
                              }}
                              className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium"
                            >
                              BOOTCAMP GRADUATE
                            </motion.span>
                          )}
                        </div>

                        <motion.h3
                          className="text-xl font-semibold mt-2"
                          whileHover={{ color: "#20B2AA" }}
                        >
                          {exp.role}
                        </motion.h3>

                        <motion.p
                          className="text-muted-foreground"
                          whileHover={{ x: idx % 2 === 0 ? -2 : 2 }}
                        >
                          {exp.company}
                        </motion.p>

                        <motion.p
                          className="text-sm text-muted-foreground mt-4"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {exp.description}
                        </motion.p>

                        <motion.div
                          className={`flex flex-wrap gap-2 mt-4 ${
                            idx % 2 === 0 ? "md:justify-end" : ""
                          }`}
                          layout
                        >
                          {exp.technologies.map((tech, techIdx) => (
                            <motion.span
                              key={techIdx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + techIdx * 0.1 }}
                              whileHover={{
                                scale: 1.1,
                                backgroundColor:
                                  tech === "Framer Motion" ? "#0055FF" : "",
                                color: tech === "Framer Motion" ? "white" : "",
                              }}
                              className={`px-3 py-1 text-xs rounded-full cursor-default ${
                                exp.highlight &&
                                (tech === "React" || tech === "JavaScript")
                                  ? "bg-primary/30 text-primary"
                                  : "bg-surface text-muted-foreground"
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bootcamp Highlight Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-20 text-center"
          >
            <motion.div
              className="inline-flex items-center gap-4 px-6 py-4 bg-primary/10 rounded-2xl border border-primary/30 cursor-pointer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(32, 178, 166, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-3 h-3 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.p
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                className="text-muted-foreground"
              >
                <span className="text-primary font-medium">
                  2025 Career Shift:
                </span>{" "}
                Transitioned from IT to development after completing Malhub's
                3-month intensive bootcamp
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -20, 20, -10],
              x: [null, 10, -10, 5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};
