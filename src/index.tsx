import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { ThemeProvider } from "@mui/material";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToDoPage } from "./pages/todo/ToDoPage";
import { theme } from "./theme";
import { Overview } from "./pages/overview/Overview";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/overview" replace />} />
					<Route path="/to-do" element={<ToDoPage />} />
					<Route path="/overview" element={<Overview />} />
				</Routes>
			</HashRouter>
		</ThemeProvider>
	</React.StrictMode>,
);
