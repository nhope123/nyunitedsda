import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import { type FC, useState } from "react";
import LoginForm from "../../forms/collection/LoginForm/LoginForm";

const headerSx: SxProps<Theme> = {
	position: "relative",
	textAlign: "center",
	color: "primary.light",
	p: 4,
};

const rootSx: SxProps<Theme> = {
	alignItems: "center",
	height: "100%",
	justifyContent: "center",
	width: "100%",
};


const Login: FC = () => {
	const [isLogin, _setIsLogin] = useState<boolean>(true);

	return (
		<Stack sx={rootSx} spacing={4}>
			<Stack sx={headerSx} spacing={2}>
				<Typography
					variant="h2"
					component="h1"
					className="welcome-text"
					fontWeight="bold"
				>
					{isLogin ? "Login" : "Create Account"}
				</Typography>
				<Typography variant="h6" className="welcome-text">
					{isLogin
						? "Access to Admin account"
						: "Join our online church community"}
				</Typography>
			</Stack>

			<Paper
				elevation={0}
				sx={{ p: 4, borderRadius: 2 }}
				className="login-animation"
			>
				<LoginForm />
				{/* <FormContainer
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
					</FormContainer> */}
			</Paper>
		</Stack>
	);
};

export default Login;
