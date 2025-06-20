import type { FC } from "react";
import { useRoutes } from "react-router";
import siteRoutes from "./hooks/routes/reviewedRoutes";

const App: FC = () => {
	const element = useRoutes(siteRoutes);

	return <>{element}</>;
};

export default App;
