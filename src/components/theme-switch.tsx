import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Theme = "dark" | "light";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const emoji = useMemo(() => {
    return theme === "dark" ? "🦚" : "🦉";
  }, [theme]);

  useEffect(() => {
    const html = document.querySelector("html");

    if (html) {
      if (theme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  }, [theme]);

  return (
    <motion.button
      className="text-3xl p-1 m-1"
      data-test-id="theme-switch"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileHover={{ scale: 1.2 }}
    >
      {emoji}
    </motion.button>
  );
};
