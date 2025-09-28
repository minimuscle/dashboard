import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import { App } from "./App";

// biome-ignore lint/style/noNonNullAssertion: This is fine because react
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
