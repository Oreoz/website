import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const node = document.createElement("div");
node.id = "root";

document.body.appendChild(node);

const root = createRoot(node);
root.render(<App />);
