import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Abdulmalik is one of the most dedicated developers I have worked with at Malhub Coworking Space. His attention to detail and ability to turn complex ideas into clean, efficient solutions clearly set him apart.",
    author: "Amina Bello",
    role: "Program Coordinator, Malhub Coworking Space",
    avatar:
      "https://cdn.pixabay.com/photo/2023/01/01/15/34/vulture-7690279_1280.jpg",
  },
  {
    quote:
      "Working with Abdulmalik at Malhub Coworking Space was a great experience. He consistently delivered quality work on time and contributed positively to the team environment.",
    author: "Tunde Adeyemi",
    role: "Product Manager, Malhub Coworking Space",
    avatar:
      "https://cdn.pixabay.com/photo/2024/07/21/10/22/vulture-8910009_1280.jpg",
  },
  {
    quote:
      "Abdulmalik demonstrated strong skills in React and modern JavaScript during our projects at Malhub. His problem-solving approach and technical decisions added real value to our frontend development.",
    author: "Zainab Musa",
    role: "Engineering Lead, Malhub Coworking Space",
    avatar:
      "https://cdn.pixabay.com/photo/2017/01/25/19/57/raptor-2008891_1280.jpg",
  },
  {
    quote:
      "Abdulmalik is not only technically capable but also a reliable team player. His willingness to learn and support others made him a valuable member of the Malhub community in Ilorin.",
    author: "Ibrahim Sadiq",
    role: "Community Lead, Malhub Coworking Space, Ilorin",
    avatar:
      "https://cdn.pixabay.com/photo/2020/08/27/14/55/adler-5522202_1280.jpg",
  },
];

// Safe getter function
const getTestimonial = (index) => {
  if (!testimonials || testimonials.length === 0) {
    return {
      quote: "No testimonials available",
      author: "N/A",
      role: "N/A",
      avatar: "",
    };
  }
  const safeIndex = Math.max(0, Math.min(index, testimonials.length - 1));
  return testimonials[safeIndex] || testimonials[0];
};

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const AUTO_ROTATE_DURATION = 5000;

  // Ensure activeIdx is within bounds
  useEffect(() => {
    if (testimonials.length > 0 && activeIdx >= testimonials.length) {
      setActiveIdx(0);
    }
  }, [activeIdx]);

  const next = useCallback(() => {
    if (testimonials.length === 0) return;
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  }, []);

  const previous = useCallback(() => {
    if (testimonials.length === 0) return;
    setDirection(-1);
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const goToSlide = useCallback(
    (index) => {
      if (testimonials.length === 0) return;
      setDirection(index > activeIdx ? 1 : -1);
      setActiveIdx(index);
    },
    [activeIdx]
  );

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return;

    const interval = setInterval(next, AUTO_ROTATE_DURATION);
    return () => clearInterval(interval);
  }, [next, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      previous();
    } else if (info.offset.x < -swipeThreshold) {
      next();
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Get current testimonial safely
  const currentTestimonial = getTestimonial(activeIdx);

  // If no testimonials, show empty state
  if (!testimonials || testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
              Testimonials
            </h2>
            <p className="text-lg text-muted-foreground">
              No testimonials available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative h-[350px] md:h-[300px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIdx}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  className="glass p-8 rounded-3xl md:p-12 glow-border absolute inset-0"
                >
                  <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary-foreground" />
                  </div>

                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    {currentTestimonial.avatar && (
                      <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.author}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    )}
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-semibold"
                      >
                        {currentTestimonial.author}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-sm text-muted-foreground"
                      >
                        {currentTestimonial.role}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Testimonials Navigation - Only show if we have testimonials */}
            {testimonials.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-4 mt-8"
              >
                <button
                  className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all active:scale-95"
                  onClick={previous}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => goToSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === activeIdx
                          ? "w-8 bg-primary"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight />
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Auto-play indicator - Only show if we have testimonials */}
        {testimonials.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <motion.div
                animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                transition={{
                  duration: AUTO_ROTATE_DURATION / 1000,
                  repeat: isAutoPlaying ? Infinity : 0,
                  ease: "linear",
                }}
                className="h-1 bg-primary rounded-full w-0"
              />
              <span>{isAutoPlaying ? "Sliding" : "Paused"}</span>
              <div className="h-1 bg-primary/20 rounded-full w-24">
                <div
                  className="h-full bg-primary/40 rounded-full"
                  style={{
                    width: `${((activeIdx + 1) / testimonials.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
