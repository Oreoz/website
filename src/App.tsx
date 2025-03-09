import RotatingText from "react-rotating-text";
import { motion } from "framer-motion";
import { Socials } from "./components/socials";
import { ThemeSwitch } from "./components/theme-switch";
import { Bio } from "./components/bio";

export default function App() {
  return (
    <div
      className="dark:bg-gray-900 dark:text-gray-50 min-h-screen"
      style={{
        transitionDuration: "0.5s",
        transitionProperty: "background-color, color",
        transitionTimingFunction: "linear",
      }}
    >
      <nav className="flex justify-end items-center">
        <ThemeSwitch />
      </nav>

      <div className="flex flex-col items-center max-w-screen-md mx-auto p-6">
        <motion.img
          alt="portrait"
          className="rounded-full max-w-300 max-w-xs w-2/3 mb-4"
          data-test-id="avatar"
          height="250"
          src="assets/me.jpg"
          whileHover={{ scale: 1.1, y: -20 }}
          width="250"
        />

        <h1 className="font-semibold text-3xl text-center">
          Jean-Philippe Roy
        </h1>

        <RotatingText
          className="font-medium text-lg"
          items={[
            "Dad 👶",
            "Software Engineer 💻",
            "Cyclist 🚴‍♂️",
            "Sneakerhead 👟",
            "Metalhead 🤟",
          ]}
        />

        <Bio />

        <Socials />
      </div>
    </div>
  );
}
