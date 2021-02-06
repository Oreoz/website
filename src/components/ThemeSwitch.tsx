import React, { FC, useEffect, useState } from "react";

type Theme = "dark" | "light";

const ThemeSwitch: FC = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    setEmoji(theme === "dark" ? "🦚" : "🦉");
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

  const handleOnClick = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      data-test-id="theme-switch"
      className="text-3xl p-1 m-1"
      onClick={handleOnClick}
    >
      {emoji}
    </button>
  );
};

export default ThemeSwitch;
