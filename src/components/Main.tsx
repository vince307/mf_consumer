import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBar from "./AppAppBar";
import News from "./News";
import Footer from "./Footer";

export default function Main(props: { disableCustomTheme?: boolean }) {
	return (
		<AppTheme {...props}>
			<CssBaseline enableColorScheme />

			<AppAppBar />
			<News />
			<div>
				<Divider />
				<Footer />
			</div>
		</AppTheme>
	);
}
