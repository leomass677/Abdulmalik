import { useEffect, useState } from "react";

export const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const navigationTiming = entries.find(
            (entry) => entry.entryType === "navigation",
          );

          if (navigationTiming) {
            setMetrics({
              fcp: navigationTiming.responseEnd - navigationTiming.fetchStart,
              lcp: navigationTiming.loadEventEnd - navigationTiming.fetchStart,
            });
          }
        });

        observer.observe({ entryTypes: ["navigation"] });

        return () => observer.disconnect();
      } catch (error) {
        console.error("Performance monitoring error:", error);
      }
    }
  }, []);

  if (process.env.NODE_ENV === "production" || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-20 right-8 p-3 bg-gray-900 rounded text-xs text-gray-400 z-40 max-w-xs pointer-events-none">
      <div>FCP: {metrics.fcp}ms</div>
      <div>LCP: {metrics.lcp}ms</div>
    </div>
  );
};
