import * as React from "react";
import Box from "@mui/material/Box";
import type { ChangeEvent } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import image369 from "./../assets/worlledger.png";
import { createClient } from "@supabase/supabase-js";
import DOMPurify from "dompurify";
import { create } from "zustand";
import Alert from "@mui/material/Alert";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

type EmailState = {
	email: string;
	updateEmal: (emailStr: string) => void;
};

type InformState = {
	inform: boolean;
	updateInform: (value: boolean) => void;
};

const useEmailStore = create<EmailState>((set) => ({
	email: "",
	updateEmal: (emailStr: string) => set({ email: emailStr }),
}));

const useInformStore = create<InformState>((set) => ({
	inform: false,
	updateInform: (value: boolean) => set({ inform: value }),
}));

function Copyright() {
	return (
		<Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
			{"Copyright © "}
			<Link color="text.secondary" href="#">
				WorldLedger
			</Link>
			&nbsp;
			{new Date().getFullYear()}
		</Typography>
	);
}

export default function Footer() {
	const emailValue = useEmailStore((state) => state?.email);
	const updateEmail = useEmailStore((state) => state.updateEmal);

	const inform = useInformStore((state) => state.inform);
	const updateInform = useInformStore((state) => state.updateInform);

	function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
		updateEmail(e.target.value);
	}

	async function sendSubscriptionEmail(emailStr: string) {
		const cleanEmail = DOMPurify.sanitize(emailStr);
		updateInform(true);
		updateEmail("");
		const { error } = await supabase
			.from("subscriptions")
			.insert({ email: cleanEmail });
		if (error) {
			console.error("Error inserting email:", error);
		} else {
			console.log("Email successfully inserted.");
		}
	}

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: { xs: 4, sm: 8 },
				py: { xs: 8, sm: 10 },
				textAlign: { sm: "center", md: "left" },
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					width: "100%",
					justifyContent: "space-between",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 4,
						width: "100%",
					}}
				>
					<Box
						sx={{
							flexDirection: { xs: "column", sm: "row" },
							width: "100%",
							justifyContent: "space-between",
							textAlign: "left",
						}}
					>
						<Box
							sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
						>
							<img
								src={image369}
								alt="worlledger"
								style={{ width: 32, height: 32, marginRight: 10 }}
							/>
							<Typography
								variant="h6"
								color="text.secondary"
								sx={{ textAlign: "left" }}
							>
								WorldLedger
							</Typography>
						</Box>

						<Typography
							variant="body2"
							gutterBottom
							sx={{ fontWeight: 600, mt: 2 }}
						>
							Join the newsletter
						</Typography>
						<Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
							Subscribe for latest updates on our product and features.
						</Typography>
						<InputLabel htmlFor="email-newsletter">Email</InputLabel>
						<Stack direction="row" spacing={1} useFlexGap>
							<TextField
								id="email-newsletter"
								value={emailValue}
								onChange={handleEmailChange}
								hiddenLabel
								size="small"
								variant="outlined"
								fullWidth
								aria-label="Enter your email address"
								placeholder="Your email address"
								slotProps={{
									htmlInput: {
										autoComplete: "off",
										"aria-label": "Enter your email address",
									},
								}}
								sx={{ width: "250px" }}
							/>
							<Button
								variant="contained"
								color="primary"
								size="small"
								sx={{ flexShrink: 0 }}
								onClick={() => sendSubscriptionEmail(emailValue)}
								aria-label="Subscribe to newsletter"
							>
								Subscribe
							</Button>
						</Stack>
						{inform && (
							<Alert severity="success" sx={{ mt: 2 }}>
								Thank you for subscribing! We will keep you updated.
							</Alert>
						)}
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					pt: { xs: 4, sm: 8 },
					width: "100%",
					borderTop: "1px solid",
					borderColor: "divider",
				}}
			>
				<div>
					<Link color="text.secondary" variant="body2" href="privacy-policy">
						Privacy Policy
					</Link>
					<Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
						&nbsp;•&nbsp;
					</Typography>
					<Link
						color="text.secondary"
						variant="body2"
						href="terms-and-service-policy"
					>
						Terms of Service
					</Link>
					<Copyright />
				</div>
				<Stack
					direction="row"
					spacing={1}
					useFlexGap
					sx={{ justifyContent: "left", color: "text.secondary" }}
				>
					<IconButton
						color="inherit"
						size="small"
						href="https://www.linkedin.com/in/kamil-piecuch/"
						aria-label="LinkedIn"
						sx={{ alignSelf: "center" }}
					>
						<LinkedInIcon />
					</IconButton>
				</Stack>
			</Box>
		</Container>
	);
}
