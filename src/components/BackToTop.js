import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Toggle visibility of the button based on scroll position
  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  // Scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="back-to-top fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        aria-label="Back to Top"
      >
        ↑
      </button>
    )
  );
};

export default BackToTop;
