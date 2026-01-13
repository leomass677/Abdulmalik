import {
  Code2,
  Lightbulb,
  Rocket,
  Users,
  Sparkles,
  Target,
  Zap,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
];

const stats = [
  { label: "Year Experience", value: "1+", icon: Target },
  { label: "Projects Completed", value: "15+", icon: Zap },
  { label: "Happy Clients", value: "12+", icon: Heart },
  { label: "Tech Stack", value: "10+", icon: Sparkles },
];

export const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const highlightVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="relative inline-block"
            >
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground"
            >
              Building the future,
              <motion.span
                className="font-serif italic font-normal text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                {" "}
                one component at a time.
              </motion.span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-muted-foreground"
            >
              <p>
                I'm a passionate frontend with over{" "}
                <motion.span
                  className="font-semibold text-white relative inline-block"
                  whileHover={{ scale: 1.1 }}
                >
                  1 year{" "}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.span>{" "}
                of experience crafting digital products that make a difference.
              </p>
              <p>
                I specialize in{" "}
                <span className="text-blue-400 font-semibold">React</span>,{" "}
                <span className="text-purple-400 font-semibold">
                  Tailwind CSS
                </span>
                , and{" "}
                <span className="text-cyan-400 font-semibold">JavaScript</span>,
                building everything from sleek landing pages to complex
                enterprise applications.
              </p>
              <p>
                My approach combines technical excellence with a keen eye for
                design and user experience, ensuring every project exceeds
                expectations.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="glass p-4 rounded-xl text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <stat.icon className="w-4 h-4 text-primary" />
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative glass rounded-2xl p-6 glow-border overflow-hidden group"
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <p className="text-lg font-medium italic text-foreground relative z-10">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
              <motion.div
                className="absolute bottom-0 right-0 p-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-primary/20" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={highlightVariants}
                whileHover="hover"
                initial="initial"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative overflow-hidden glass p-6 rounded-2xl group ${
                  hoveredIndex === idx ? "ring-2 ring-primary/30" : ""
                }`}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100`}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating particles */}
                {hoveredIndex === idx && (
                  <>
                    <motion.div
                      className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-400"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1, 0.5], opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-purple-400"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1, 0.5], opacity: [0, 1, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.3,
                      }}
                    />
                  </>
                )}

                <div className="relative z-10">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}

            {/* Tech Stack Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="sm:col-span-2 glass p-6 rounded-2xl mt-4"
            >
              <h3 className="text-lg font-semibold mb-4 text-center">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "React",
                  "Firebase",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Vercel",
                  "Tailwind CSS",
                  "Git",
                  "GitHub Actions",
                  "Netlify",
                  "Gitlab",
                  "vite",
                  "Node.js",
                  "Chrome Developer Tools",
                  "npm",
                ].map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                    }}
                    className="px-3 py-1.5 rounded-full bg-white/5 text-sm text-muted-foreground hover:text-white transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
