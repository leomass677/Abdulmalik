@import "tailwindcss";

@layer base {
  :root {
    --color-background: #0f1418;
    --color-foreground: #f0f2f5;
    --color-card: #141a1f;
    --color-primary: #20b2a6;
    --color-primary-foreground: #ffffff;
    --color-secondary: #1f2830;
    --color-secondary-foreground: #20b2a6;
    --color-muted: #252e37;
    --color-muted-foreground: #7a8491;
    --color-border: #242b32;
    --color-highlight: #f5a623;
    --color-surface: #1a2329;
    --radius: 0.75rem;
  }

  [data-theme="light"] {
    --color-background: #ffffff;
    --color-foreground: #0f1418;
    --color-card: #f8f9fa;
    --color-primary: #20b2a6;
    --color-primary-foreground: #ffffff;
    --color-secondary: #e9ecef;
    --color-secondary-foreground: #0f1418;
    --color-muted: #dee2e6;
    --color-muted-foreground: #4a5568;
    --color-border: #cbd5e0;
    --color-highlight: #d97706;
    --color-surface: #f7fafc;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: "Inter", sans-serif;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  button {
    cursor: pointer;
  }
}

@layer components {
  .font-serif {
    font-family: "Playfair Display", serif;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .glass {
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius);
  }

  .glass-strong {
    background-color: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: var(--radius);
  }

  .glow-text {
    text-shadow: 0 0 30px rgba(32, 178, 166, 0.5);
  }

  .glow-border {
    border-radius: var(--radius);
    box-shadow: 0 0 20px rgba(32, 178, 166, 0.2);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slow-drift {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(20px, -30px);
  }
  50% {
    transform: translate(-15px, -20px);
  }
  75% {
    transform: translate(30px, 10px);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes animated-border {
  0% {
    stroke-dashoffset: 400;
  }
  100% {
    stroke-dashoffset: -550;
  }
}

@layer utilities {
  .animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
  }

  .animate-slow-drift {
    animation: slow-drift 20s ease-in-out infinite;
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  .animate-marquee {
    animation: marquee 30s linear infinite;
  }

  .animation-delay-100 {
    animation-delay: 100ms;
  }

  .animation-delay-200 {
    animation-delay: 200ms;
  }

  .animation-delay-300 {
    animation-delay: 300ms;
  }

  .animation-delay-400 {
    animation-delay: 400ms;
  }

  .animation-delay-500 {
    animation-delay: 500ms;
  }

  .animation-delay-600 {
    animation-delay: 600ms;
  }

  .animation-delay-800 {
    animation-delay: 800ms;
  }

  .group:hover .animated-border-path {
    animation: animated-border 1.5s linear infinite;
  }

  .animated-border:hover {
    background-color: rgba(38, 196, 184, 0.15);
    backdrop-filter: blur(16px);
    box-shadow: 0 0 20px rgba(38, 196, 184, 0.2);
  }

  .timeline-glow {
    box-shadow:
      0 0 40px rgba(32, 178, 166, 0.35),
      0 0 80px rgba(32, 178, 166, 0.25);
  }
}
