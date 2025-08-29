import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ToDoPage } from "./pages/todo/ToDoPage";
import { theme } from "./theme";
import {Overview} from "./pages/overview/Overview";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/overview" replace />} />
					<Route path="/to-do" element={<ToDoPage />} />
					<Route path="/overview" element={<Overview />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
);
