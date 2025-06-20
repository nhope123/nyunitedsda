import { createRoot } from "react-dom/client";
import App from "./App";
import AppProvider from "./components/AppProvider/AppProvider";

createRoot(document.getElementById("root")!).render(
	<AppProvider>
		<App />
	</AppProvider>,
);
