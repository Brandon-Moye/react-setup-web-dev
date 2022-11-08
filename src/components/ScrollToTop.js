import React from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [scrollToTopIsVisible, setScrollToTopIsVisible] = React.useState(false);

  const toggleVisibilty = () => {
    if (window.scrollY > 3000) {
      setScrollToTopIsVisible(true);
    } else setScrollToTopIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const visibiltyClassName = scrollToTopIsVisible ? "visible" : "invisible";

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibilty);

    return () => {
      window.removeEventListener("scroll", toggleVisibilty);
    };
  }, []);

  return (
    <button onClick={scrollToTop} className={visibiltyClassName}>
      Back to Top
    </button>
  );
}
