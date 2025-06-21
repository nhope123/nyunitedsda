import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type FC, type PropsWithChildren, StrictMode } from "react";
import { BrowserRouter } from "react-router";
import NotificationProvider from "../../contexts/NotificationContext/NotificationContext";
import theme from "./theme";
import { SnackbarProvider } from "notistack";

const queryClient = new QueryClient();

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<StrictMode>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider theme={theme}>
						<CssBaseline enableColorScheme />
						<SnackbarProvider
							maxSnack={3}
							anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
						>
							<NotificationProvider>{children}</NotificationProvider>
						</SnackbarProvider>
					</ThemeProvider>
				</QueryClientProvider>
			</BrowserRouter>
		</StrictMode>
	);
};

export default AppProvider;
