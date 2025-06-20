import {
	AlternateEmailOutlined,
	LockOutlined,
	VisibilityOffOutlined,
	VisibilityOutlined,
} from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import { type FC, useCallback, useState } from "react";

const rootSx: SxProps<Theme> = {
	position: "relative",
	textAlign: "center",
	color: "primary.light",
	p: 4,
};

const Login: FC = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [isLogin, _setIsLogin] = useState<boolean>(true);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [rememberMe, setRememberMe] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	const handleClickShowPassword = useCallback(() => {
		setShowPassword((prev) => !prev);
	}, []);

	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();

			// Basic validation
			if (!email) {
				setError("Email is required");
				return;
			}

			if (!password) {
				setError("Password is required");
				return;
			}

			// Here you would typically handle authentication
			// For now, just show a success message
			console.log("Form submitted:", { email, password, rememberMe });

			// Clear form after submission
			if (!isLogin) {
				setEmail("");
				setPassword("");
			}
		},
		[email, password, rememberMe],
	);

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

					<form onSubmit={handleSubmit}>
						<Grid container spacing={3}>
							{!isLogin && (
								<>
									<Grid size={{ xs: 12, sm: 6 }}>
										<TextField
											required
											fullWidth
											label="First Name"
											variant="outlined"
										/>
									</Grid>
									<Grid size={{ xs: 12, sm: 6 }}>
										<TextField
											required
											fullWidth
											label="Last Name"
											variant="outlined"
										/>
									</Grid>
								</>
							)}

							<Grid size={12}>
								<TextField
									required
									fullWidth
									label="Email"
									variant="outlined"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									slotProps={{
										input: {
											startAdornment: (
												<InputAdornment position="start">
													<AlternateEmailOutlined color="primary" />
												</InputAdornment>
											),
										},
									}}
								/>
							</Grid>

							<Grid size={12}>
								<TextField
									required
									fullWidth
									label="Password"
									variant="outlined"
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									slotProps={{
										input: {
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
										},
									}}
								/>
							</Grid>

							{!isLogin && (
								<Grid size={12}>
									<TextField
										required
										fullWidth
										label="Confirm Password"
										variant="outlined"
										type={showPassword ? "text" : "password"}
										slotProps={{
											input: {
												startAdornment: (
													<InputAdornment position="start">
														<LockOutlined color="action" />
													</InputAdornment>
												),
											},
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
										<FormControlLabel
											control={
												<Checkbox
													checked={rememberMe}
													onChange={(e) => setRememberMe(e.target.checked)}
													color="primary"
												/>
											}
											label="Remember me"
										/>

										{/* <Typography
											href="/forgot-password"
											component={'a'}
											variant="body2"
											color="primary"
											sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
										>
											Forgot password?
										</Typography> */}
									</Box>
								</Grid>
							)}

							<Grid size={12}>
								<Button
									variant="contained"
									color="primary"
									size="large"
									fullWidth
									type="submit"
									sx={{ py: 1.5 }}
								>
									{isLogin ? "Sign In" : "Create Account"}
								</Button>
							</Grid>
						</Grid>
					</form>

					{/* <Divider sx={{ my: 3 }}>
						<Typography variant="body2" color="text.secondary">
							OR
						</Typography>
					</Divider>

					<Box sx={{ textAlign: "center" }}>
						<Typography variant="body2">
							{isLogin ? "Don't have an account?" : "Already have an account?"}
							<Button variant="text" color="primary" onClick={toggleForm} sx={{ ml: 1 }}>
								{isLogin ? "Sign Up" : "Sign In"}
							</Button>
						</Typography>
					</Box> */}
				</Paper>
			</Container>
		</>
	);
};

export default Login;
