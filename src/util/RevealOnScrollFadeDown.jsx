import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

function RevealOnScrollFadeDown({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px 50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  });
  return (
    <Box ref={ref} className="reveal">
      {children}
    </Box>
  );
}

export default RevealOnScrollFadeDown;
