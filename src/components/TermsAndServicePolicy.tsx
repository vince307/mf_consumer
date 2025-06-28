import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBar from "./AppAppBar";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import {
	Chip,
	Container,
	List,
	ListItem,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";

export default function TermsAndServicePolicy() {
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
									Terms of Service
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
									1. Agreement to Terms
								</Typography>
								<Typography variant="body1" paragraph>
									By accessing and using [Your Website Name] (the "Website")
									operated by [Your Company Name] ("we," "us," or "our"), you
									accept and agree to be bound by the terms and provision of
									this agreement.
								</Typography>
								<Typography variant="body1" paragraph>
									If you do not agree to abide by the above, please do not use
									this service.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									2. Definitions
								</Typography>
								<List>
									<ListItem>
										<ListItemText
											primary={<strong>"Service"</strong>}
											secondary="refers to the website, applications, and services provided by [Your Company Name]"
										/>
									</ListItem>
									<ListItem>
										<ListItemText
											primary={<strong>"User," "you," or "your"</strong>}
											secondary="refers to the individual accessing or using the Service"
										/>
									</ListItem>
									<ListItem>
										<ListItemText
											primary={<strong>"Content"</strong>}
											secondary="refers to text, graphics, images, music, software, audio, video, works of authorship, applications, and other materials"
										/>
									</ListItem>
								</List>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									3. Use License
								</Typography>
								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									3.1 License Grant
								</Typography>
								<Typography variant="body1" paragraph>
									Permission is granted to temporarily download one copy of the
									materials on [Your Website Name] for personal, non-commercial
									transitory viewing only. This is the grant of a license, not a
									transfer of title, and under this license you may not:
								</Typography>
								<List>
									<ListItem>
										<ListItemText primary="Modify or copy the materials" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Use the materials for any commercial purpose or for any public display" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Attempt to decompile or reverse engineer any software contained on the website" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Remove any copyright or other proprietary notations from the materials" />
									</ListItem>
								</List>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									3.2 License Termination
								</Typography>
								<Typography variant="body1" paragraph>
									This license shall automatically terminate if you violate any
									of these restrictions and may be terminated by us at any time.
									Upon terminating your viewing of these materials or upon the
									termination of this license, you must destroy any downloaded
									materials in your possession whether in electronic or printed
									format.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									4. User Accounts
								</Typography>
								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									4.1 Account Creation
								</Typography>
								<Typography variant="body1" paragraph>
									To access certain features of our Service, you may be required
									to create an account. You agree to:
								</Typography>
								<List>
									<ListItem>
										<ListItemText primary="Provide accurate, current, and complete information" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Maintain the security of your password and account" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Notify us immediately of any unauthorized use of your account" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Accept responsibility for all activities that occur under your account" />
									</ListItem>
								</List>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									4.2 Account Termination
								</Typography>
								<Typography variant="body1" paragraph>
									We reserve the right to terminate or suspend your account at
									any time, with or without cause or notice, for conduct that we
									believe violates these Terms or is harmful to other users, us,
									or third parties, or for any other reason.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									5. User Content
								</Typography>
								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									5.1 Content Responsibility
								</Typography>
								<Typography variant="body1" paragraph>
									You are solely responsible for any content you post, upload,
									share, store, or otherwise provide through our Service. You
									represent and warrant that:
								</Typography>
								<List>
									<ListItem>
										<ListItemText primary="You own or have the necessary rights to use and authorize the use of your content" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Your content does not violate any third-party rights" />
									</ListItem>
									<ListItem>
										<ListItemText primary="Your content complies with these Terms and applicable laws" />
									</ListItem>
								</List>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									5.2 Content License
								</Typography>
								<Typography variant="body1" paragraph>
									By submitting content to our Service, you grant us a
									worldwide, non-exclusive, royalty-free, sublicensable, and
									transferable license to use, reproduce, distribute, prepare
									derivative works of, display, and perform your content in
									connection with our Service.
								</Typography>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									5.3 Content Removal
								</Typography>
								<Typography variant="body1" paragraph>
									We reserve the right, but not the obligation, to monitor,
									review, and remove content that violates these Terms or is
									otherwise objectionable, at our sole discretion.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									6. Prohibited Uses
								</Typography>
								<Typography variant="body1" paragraph>
									You may not use our Service:
								</Typography>
								<List>
									<ListItem>
										<ListItemText primary="For any unlawful purpose or to solicit others to act unlawfully" />
									</ListItem>
									<ListItem>
										<ListItemText primary="To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances" />
									</ListItem>
									<ListItem>
										<ListItemText primary="To transmit, or procure the sending of, any advertising or promotional material, including spam" />
									</ListItem>
									<ListItem>
										<ListItemText primary="To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity" />
									</ListItem>
									<ListItem>
										<ListItemText primary="To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website" />
									</ListItem>
								</List>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									7. Intellectual Property Rights
								</Typography>
								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									7.1 Our Content
								</Typography>
								<Typography variant="body1" paragraph>
									The Service and its original content, features, and
									functionality are and will remain the exclusive property of
									[Your Company Name] and its licensors. The Service is
									protected by copyright, trademark, and other laws.
								</Typography>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									7.2 Trademarks
								</Typography>
								<Typography variant="body1" paragraph>
									All trademarks, service marks, and trade names used in this
									Service are trademarks or registered trademarks of [Your
									Company Name] or their respective owners.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									8. Privacy Policy
								</Typography>
								<Typography variant="body1" paragraph>
									Your privacy is important to us. Our Privacy Policy explains
									how we collect, use, and protect your information when you use
									our Service. By using our Service, you agree to the collection
									and use of information in accordance with our Privacy Policy.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									9. Payments and Billing
								</Typography>
								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									9.1 Fees
								</Typography>
								<Typography variant="body1" paragraph>
									[If applicable] Certain aspects of our Service may require
									payment of fees. You agree to pay all applicable fees as
									described on the Service at the time of purchase.
								</Typography>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									9.2 Refunds
								</Typography>
								<Typography variant="body1" paragraph>
									[Specify your refund policy] All sales are final unless
									otherwise specified. Refunds may be provided at our sole
									discretion.
								</Typography>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									9.3 Auto-Renewal
								</Typography>
								<Typography variant="body1" paragraph>
									[If applicable] Some services may automatically renew. You may
									cancel auto-renewal at any time through your account settings
									or by contacting us.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									10. Disclaimers
								</Typography>
								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									10.1 Service Availability
								</Typography>
								<Typography variant="body1" paragraph>
									We do not guarantee that our Service will be available at all
									times. We may experience hardware, software, or other problems
									or need to perform maintenance related to the Service,
									resulting in interruptions, delays, or errors.
								</Typography>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									10.2 Accuracy of Information
								</Typography>
								<Typography variant="body1" paragraph>
									The materials on [Your Website Name] could include technical,
									typographical, or photographic errors. [Your Company Name]
									does not warrant that any of the materials on its website are
									accurate, complete, or current.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									11. Limitation of Liability
								</Typography>
								<Typography variant="body1" paragraph>
									In no event shall [Your Company Name] or its suppliers be
									liable for any damages (including, without limitation, damages
									for loss of data or profit, or due to business interruption)
									arising out of the use or inability to use the Service, even
									if [Your Company Name] or its authorized representative has
									been notified orally or in writing of the possibility of such
									damage. Because some jurisdictions do not allow limitations on
									implied warranties, or limitations of liability for
									consequential or incidental damages, these limitations may not
									apply to you.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									12. Indemnification
								</Typography>
								<Typography variant="body1" paragraph>
									You agree to defend, indemnify, and hold harmless [Your
									Company Name] and its affiliates, officers, directors,
									employees, and agents from and against any and all claims,
									damages, obligations, losses, liabilities, costs, or debt, and
									expenses (including attorney's fees).
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									13. Termination
								</Typography>
								<Typography variant="body1" paragraph>
									We may terminate or suspend your access immediately, without
									prior notice or liability, for any reason whatsoever,
									including without limitation if you breach the Terms.
								</Typography>
								<Typography variant="body1" paragraph>
									Upon termination, your right to use the Service will cease
									immediately. If you wish to terminate your account, you may
									simply discontinue using the Service.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									14. Governing Law
								</Typography>
								<Typography variant="body1" paragraph>
									These Terms shall be governed by and construed in accordance
									with the laws of [Your State/Country], without regard to its
									conflict of law provisions.
								</Typography>
								<Typography variant="body1" paragraph>
									Our failure to enforce any right or provision of these Terms
									will not be considered a waiver of those rights.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									15. Dispute Resolution
								</Typography>
								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									15.1 Informal Resolution
								</Typography>
								<Typography variant="body1" paragraph>
									Before filing a claim against [Your Company Name], you agree
									to try to resolve the dispute informally by contacting us at
									[contact email]. We'll try to resolve the dispute informally
									by contacting you via email.
								</Typography>

								<Typography
									variant="h5"
									component="h3"
									gutterBottom
									sx={{ mt: 2 }}
								>
									15.2 Arbitration
								</Typography>
								<Typography variant="body1" paragraph>
									[Optional] Any disputes arising out of or relating to these
									Terms or the Service will be resolved through binding
									arbitration, rather than in court, except that you may assert
									claims in small claims court if your claims qualify.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									16. Changes to Terms
								</Typography>
								<Typography variant="body1" paragraph>
									We reserve the right, at our sole discretion, to modify or
									replace these Terms at any time. If a revision is material, we
									will try to provide at least 30 days' notice prior to any new
									terms taking effect.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									17. Severability
								</Typography>
								<Typography variant="body1" paragraph>
									If any provision of these Terms is held to be unenforceable or
									invalid, such provision will be changed and interpreted to
									accomplish the objectives of such provision to the greatest
									extent possible under applicable law, and the remaining
									provisions will continue in full force and effect.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									18. Entire Agreement
								</Typography>
								<Typography variant="body1" paragraph>
									These Terms constitute the entire agreement between us
									regarding our Service and supersede and replace any prior
									agreements we might have between us regarding the Service.
								</Typography>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box sx={{ mb: 4 }}>
								<Typography variant="h4" component="h2" gutterBottom>
									19. Contact Information
								</Typography>
								<Typography variant="body1" paragraph>
									If you have any questions about these Terms of Service, please
									contact us:
								</Typography>
								<Box sx={{ mt: 2, p: 2, bgcolor: "grey.100", borderRadius: 1 }}>
									<Typography variant="h6" gutterBottom>
										<strong>[Your Company Name]</strong>
									</Typography>
									<Typography variant="body2">
										Email: [legal@yourcompany.com]
									</Typography>
									<Typography variant="body2">
										Phone: [Your Phone Number]
									</Typography>
									<Typography variant="body2">
										Address: [Your Mailing Address]
									</Typography>
								</Box>
							</Box>

							<Divider sx={{ my: 3 }} />

							<Box
								sx={{ mt: 4, p: 2, bgcolor: "warning.light", borderRadius: 1 }}
							>
								<Typography variant="body2" style={{ fontStyle: "italic" }}>
									This Terms of Service template is provided for informational
									purposes only and should be reviewed by a qualified attorney
									before use. Laws vary by jurisdiction, and you may need
									additional provisions based on your specific business
									practices and applicable regulations.
								</Typography>
							</Box>
						</Paper>
					</Container>
					<Divider />
					<Footer />
				</div>
			</AppTheme>
		</div>
	);
}
