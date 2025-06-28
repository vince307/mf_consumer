import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBar from "./AppAppBar";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
	Alert,
	AlertTitle,
	Chip,
	List,
	ListItem,
	ListItemText,
	Paper,
} from "@mui/material";

export default function PrivacyPolicy() {
	return (
		<div className="App">
			<AppTheme>
				<CssBaseline enableColorScheme />

				<AppAppBar />
				<div>
					<Container maxWidth="md" sx={{ py: 4 }}>
						<Paper elevation={3} sx={{ p: 4 }}>
							<Box sx={{ mb: 4 }}>
								<Typography
									variant="h3"
									component="h1"
									gutterBottom
									align="center"
								>
									Privacy Policy
								</Typography>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										gap: 2,
										mb: 3,
									}}
								>
									<Chip
										label="Effective Date: [Insert Date]"
										variant="outlined"
									/>
									<Chip
										label="Last Updated: [Insert Date]"
										variant="outlined"
									/>
								</Box>
							</Box>

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									1. Introduction
								</Typography>
								<Typography variant="body1" paragraph>
									[Your Company Name] ("we," "our," or "us") respects your
									privacy and is committed to protecting your personal
									information. This Privacy Policy explains how we collect, use,
									disclose, and safeguard your information when you visit our
									website [your-website.com] (the "Website") and use our
									services.
								</Typography>
								<Typography variant="body1" paragraph>
									By using our Website, you consent to the data practices
									described in this Privacy Policy.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									2. Information We Collect
								</Typography>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 3 }}
								>
									2.1 Personal Information
								</Typography>
								<Typography variant="body1" paragraph>
									We may collect personal information that you voluntarily
									provide to us, including but not limited to:
								</Typography>
								<List>
									<ListItem>
										<ListItemText primary="Name and contact information (email address, phone number, mailing address)" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Account credentials (username, password)" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Payment information (credit card details, billing address)" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Communication preferences" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Any other information you choose to provide" />
									</ListItem>
								</List>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 3 }}
								>
									2.2 Automatically Collected Information
								</Typography>
								<Typography variant="body1" paragraph>
									When you visit our Website, we may automatically collect
									certain information, including:
								</Typography>
								<List>
									<ListItem>
										<ListItemText primary="IP address and location data" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Browser type and version" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Operating system" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Pages visited and time spent on pages" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Referring website addresses" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Device information and identifiers" />
									</ListItem>
								</List>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 3 }}
								>
									2.3 Cookies and Tracking Technologies
								</Typography>
								<Typography variant="body1" paragraph>
									We use cookies, web beacons, and similar tracking technologies
									to:
								</Typography>
								<List>
									<ListItem>
										<ListItemText primary="Remember your preferences and settings" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Analyze website traffic and usage patterns" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Provide personalized content and advertisements" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Improve our services and user experience" />
									</ListItem>
								</List>
								<Typography variant="body1" paragraph>
									You can control cookie settings through your browser, but
									disabling cookies may affect website functionality.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									3. How We Use Your Information
								</Typography>
								<Typography variant="body1" paragraph>
									We use the collected information for the following purposes:
								</Typography>
								<List>
									<ListItem>
										<ListItemText primary="Providing and maintaining our services" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Processing transactions and payments" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Communicating with you about our services, updates, and promotions" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Personalizing your experience on our Website" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Analyzing usage patterns to improve our services" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Complying with legal obligations" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Protecting against fraud and security threats" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Marketing and advertising (with your consent where required)" />
									</ListItem>
								</List>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									4. Information Sharing and Disclosure
								</Typography>
								<Typography variant="body1" paragraph>
									We do not sell, trade, or rent your personal information to
									third parties. We may share your information in the following
									circumstances:
								</Typography>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 3 }}
								>
									4.1 Service Providers
								</Typography>
								<Typography variant="body1" paragraph>
									We may share information with trusted third-party service
									providers who assist us in operating our Website and
									conducting our business, including:
								</Typography>
								<List>
									<ListItem>
										<ListItemText primary="Payment processors" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Email service providers" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Analytics providers" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Hosting services" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Customer support tools" />
									</ListItem>
								</List>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 3 }}
								>
									4.2 Legal Requirements
								</Typography>
								<Typography variant="body1" paragraph>
									We may disclose your information if required by law or in
									response to:
								</Typography>
								<List>
									<ListItem>
										<ListItemText primary="Court orders or legal processes" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Government requests or investigations" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Protection of our rights, property, or safety" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Prevention of fraud or illegal activities" />
									</ListItem>
								</List>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 3 }}
								>
									4.3 Business Transfers
								</Typography>
								<Typography variant="body1" paragraph>
									In the event of a merger, acquisition, or sale of assets, your
									information may be transferred as part of the transaction.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									5. Data Security
								</Typography>
								<Typography variant="body1" paragraph>
									We implement appropriate technical and organizational security
									measures to protect your personal information against
									unauthorized access, alteration, disclosure, or destruction.
									However, no method of transmission over the internet or
									electronic storage is 100% secure.
								</Typography>
								<Typography variant="body1" paragraph>
									Security measures include:
								</Typography>
								<List>
									<ListItem>
										<ListItemText primary="Encryption of sensitive data" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Regular security assessments" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Access controls and authentication" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Employee training on data protection" />
									</ListItem>
								</List>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									6. Data Retention
								</Typography>
								<Typography variant="body1" paragraph>
									We retain your personal information only for as long as
									necessary to fulfill the purposes outlined in this Privacy
									Policy, unless a longer retention period is required or
									permitted by law. When we no longer need your information, we
									will securely delete or anonymize it.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									7. Your Rights and Choices
								</Typography>
								<Typography variant="body1" paragraph>
									Depending on your location, you may have the following rights
									regarding your personal information:
								</Typography>
								<List>
									<ListItem>
										<ListItemText
											primary={<strong>Access</strong>}
											secondary="Request access to your personal information"
										/>
									</ListItem>
									<ListItem>
										<ListItemText
											primary={<strong>Correction</strong>}
											secondary="Request correction of inaccurate information"
										/>
									</ListItem>
									<ListItem>
										<ListItemText
											primary={<strong>Deletion</strong>}
											secondary="Request deletion of your personal information"
										/>
									</ListItem>
									<ListItem>
										<ListItemText
											primary={<strong>Portability</strong>}
											secondary="Request a copy of your information in a portable format"
										/>
									</ListItem>
									<ListItem>
										<ListItemText
											primary={<strong>Restriction</strong>}
											secondary="Request restriction of processing"
										/>
									</ListItem>
									<ListItem>
										<ListItemText
											primary={<strong>Objection</strong>}
											secondary="Object to certain types of processing"
										/>
									</ListItem>
									<ListItem>
										<ListItemText
											primary={<strong>Withdraw Consent</strong>}
											secondary="Withdraw consent for processing based on consent"
										/>
									</ListItem>
								</List>
								<Typography variant="body1" paragraph>
									To exercise these rights, please contact us using the
									information provided below.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									8. International Data Transfers
								</Typography>
								<Typography variant="body1" paragraph>
									If you are located outside of [Your Country], please note that
									your information may be transferred to and processed in
									countries that may have different data protection laws than
									your country of residence.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									9. Third-Party Links
								</Typography>
								<Typography variant="body1" paragraph>
									Our Website may contain links to third-party websites. We are
									not responsible for the privacy practices or content of these
									external sites. We encourage you to review the privacy
									policies of any third-party websites you visit.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									10. Children's Privacy
								</Typography>
								<Typography variant="body1" paragraph>
									Our services are not intended for children under the age of 13
									(or 16 in the EU). We do not knowingly collect personal
									information from children. If we become aware that we have
									collected information from a child, we will take steps to
									delete such information promptly.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									11. Changes to This Privacy Policy
								</Typography>
								<Typography variant="body1" paragraph>
									We may update this Privacy Policy from time to time. We will
									notify you of any material changes by:
								</Typography>
								<List>
									<ListItem>
										<ListItemText primary="Posting the updated policy on our Website" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Sending you an email notification (if you have provided your email address)" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Displaying a prominent notice on our Website" />
									</ListItem>
								</List>
								<Typography variant="body1" paragraph>
									Your continued use of our services after any changes
									constitutes acceptance of the updated Privacy Policy.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									12. Contact Information
								</Typography>
								<Typography variant="body1" paragraph>
									If you have any questions, concerns, or requests regarding
									this Privacy Policy or our data practices, please contact us:
								</Typography>
								<Box sx={{ mt: 2, p: 2, bgcolor: "grey.100", borderRadius: 1 }}>
									<Typography variant="h6" gutterBottom>
										<strong>[Your Company Name]</strong>
									</Typography>
									<Typography variant="body2">
										Email: [privacy@yourcompany.com]
									</Typography>
									<Typography variant="body2">
										Phone: [Your Phone Number]
									</Typography>
									<Typography variant="body2">
										Address: [Your Mailing Address]
									</Typography>
									<Typography variant="body2" sx={{ mt: 1 }}>
										For EU residents, you may also contact our Data Protection
										Officer at: [dpo@yourcompany.com]
									</Typography>
								</Box>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Alert severity="warning" sx={{ mt: 4 }}>
								<AlertTitle>Legal Disclaimer</AlertTitle>
								<Typography variant="body2">
									This Privacy Policy template is provided for informational
									purposes only and should be reviewed by a qualified attorney
									before use. Laws vary by jurisdiction, and you may need
									additional provisions based on your specific business
									practices and applicable regulations.
								</Typography>
							</Alert>
						</Paper>
					</Container>
					<Divider />
					<Footer />
				</div>
			</AppTheme>
		</div>
	);
}
