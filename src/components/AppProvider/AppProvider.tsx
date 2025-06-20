import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type FC, type PropsWithChildren, StrictMode } from "react";
import { BrowserRouter } from "react-router";
import MessageProvider from "../../contexts/MessageContext/MessageContext";
import theme from "./theme";

const queryClient = new QueryClient();

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<StrictMode>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider theme={theme}>
						<CssBaseline enableColorScheme />
						<MessageProvider>{children}</MessageProvider>
					</ThemeProvider>
				</QueryClientProvider>
			</BrowserRouter>
		</StrictMode>
	);
};

export default AppProvider;
