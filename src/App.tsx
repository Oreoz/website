import RotatingText from "react-rotating-text";
import { motion } from "framer-motion";
import Nav from "./components/Nav";

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
      <Nav />

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

        <div className="flex flex-col mt-4">
          <p className="text-justify mb-3" data-test-id="paragraph-1">
            I am a software engineer, passionate about JavaScript & building
            quality software. Most of my work so far has been done using modern
            JavaScript in the browser using Ember.js and React.
          </p>

          <p className="text-justify mb-3" data-test-id="paragraph-2">
            Outside of programming and taking care of my little one. I enjoy
            playing video games, board games, watching movies, listening to
            music, cycling & drinking craft beer with friends.
          </p>

          <p className="text-justify mb-3" data-test-id="paragraph-3">
            If you&apos;re looking to contact me for profesionnal inquiries,
            your best bet would be LinkedIn.
          </p>
        </div>

        <div className="flex mt-4">
          <motion.a
            data-test-id="linkedin"
            href="https://www.linkedin.com/in/jean-philippe-roy-64918658"
            rel="noopener noreferrer"
            target="_blank"
            whileHover={{ scale: 1.1 }}
          >
            <span
              role="img"
              aria-label="LinkedIn"
              className="social-shapes text-4xl mx-1"
            >
              k
            </span>
          </motion.a>

          <motion.a
            data-test-id="github"
            href="https://github.com/Oreoz"
            rel="noopener noreferrer"
            target="_blank"
            whileHover={{ scale: 1.1 }}
          >
            <span
              role="img"
              aria-label="GitHub"
              className="social-shapes text-4xl mx-1"
            >
              Y
            </span>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
