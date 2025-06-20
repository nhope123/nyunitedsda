import {
	AlternateEmailOutlined,
	LockOutlined,
	VisibilityOffOutlined,
	VisibilityOutlined,
} from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import { type FC, useCallback, useState } from "react";
import * as Yup from "yup";
import FormContainer from "../../forms/FormBuilder/FormContainer";
import InputField from "../../forms/Input/FormField";

const rootSx: SxProps<Theme> = {
	position: "relative",
	textAlign: "center",
	color: "primary.light",
	p: 4,
};

const loginSchema = Yup.object({
	email: Yup.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	password: Yup.string().required("Password is required"),
	rememberMe: Yup.boolean(),
});

const Login: FC = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [isLogin, _setIsLogin] = useState<boolean>(true);
	const [error, setError] = useState<string>("");

	const handleClickShowPassword = useCallback(() => {
		setShowPassword((prev) => !prev);
	}, []);

	const initialValues = {
		email: "",
		password: "",
		rememberMe: false,
	};

	const handleSubmit = useCallback((values: typeof initialValues) => {
		// Clear any previous errors
		setError("");

		// Here you would typically handle authentication
		console.log("Form submitted:", values);

		// You can add actual authentication logic here
		// If authentication fails, set an error message:
		// setError("Invalid email or password");
	}, []);

	return (
		<>
			<Box sx={rootSx}>
				<Typography
					variant="h2"
					component="h1"
					className="welcome-text"
					sx={{ mb: 2, fontWeight: "bold" }}
				>
					{isLogin ? "Login" : "Create Account"}
				</Typography>
				<Typography variant="h6" className="welcome-text" sx={{ mb: 4 }}>
					{isLogin
						? "Access to Admin account"
						: "Join our online church community"}
				</Typography>
			</Box>

			<Container maxWidth="sm" sx={{ mb: 8, flexGrow: 1 }}>
				<Paper
					elevation={0}
					sx={{ p: 4, borderRadius: 2 }}
					className="login-animation"
				>
					{error && (
						<Alert severity="error" sx={{ mb: 3 }}>
							{error}
						</Alert>
					)}

					<FormContainer
						initialValues={initialValues}
						validationSchema={loginSchema}
						onSubmit={handleSubmit}
						submitButtonText={isLogin ? "Sign In" : "Create Account"}
					>
						<Grid container spacing={3}>
							{!isLogin && (
								<>
									<Grid size={{ xs: 12, sm: 6 }}>
										<InputField
											name="firstName"
											label="First Name"
											fieldType="textarea"
										/>
									</Grid>
									<Grid size={{ xs: 12, sm: 6 }}>
										<InputField
											name="lastName"
											label="Last Name"
											fieldType="textarea"
										/>
									</Grid>
								</>
							)}

							<Grid size={12}>
								<InputField
									name="email"
									label="Email"
									fieldType="textarea"
									type="email"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<AlternateEmailOutlined color="primary" />
											</InputAdornment>
										),
									}}
								/>
							</Grid>

							<Grid size={12}>
								<InputField
									name="password"
									label="Password"
									fieldType="textarea"
									type={showPassword ? "text" : "password"}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<LockOutlined color="primary" />
											</InputAdornment>
										),
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													edge="end"
													color="primary"
												>
													{showPassword ? (
														<VisibilityOffOutlined />
													) : (
														<VisibilityOutlined />
													)}
												</IconButton>
											</InputAdornment>
										),
									}}
								/>
							</Grid>

							{!isLogin && (
								<Grid size={12}>
									<InputField
										name="confirmPassword"
										label="Confirm Password"
										fieldType="textarea"
										type={showPassword ? "text" : "password"}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<LockOutlined color="action" />
												</InputAdornment>
											),
										}}
									/>
								</Grid>
							)}

							{isLogin && (
								<Grid size={12}>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
										}}
									>
										<InputField
											name="rememberMe"
											label="Remember me"
											fieldType="checkbox"
										/>
									</Box>
								</Grid>
							)}
						</Grid>
					</FormContainer>
				</Paper>
			</Container>
		</>
	);
};

export default Login;
