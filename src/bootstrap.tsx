import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndServicePolicy from "./components/TermsAndServicePolicy";

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		errorElement: <div>Oops! Something went wrong.</div>,
	},
	{
		path: "/privacy-policy",
		Component: PrivacyPolicy,
		errorElement: <div>Oops! Something went wrong.</div>,
	},
	{
		path: "/terms-and-service-policy",
		Component: TermsAndServicePolicy,
		errorElement: <div>Oops! Something went wrong.</div>,
	},
]);

const rootEl = document.getElementById("root");
if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>,
	);
}
