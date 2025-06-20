import type { FC } from "react";
import { useRoutes } from "react-router";
import siteRoutes from "./hooks/routes/reviewedRoutes";
import Login from "./pages/Login/Login";

const App: FC = () => {
	// const element = useRoutes(siteRoutes);

	return <Login />;
	// return <>{element}</>;
};

export default App;
