import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import {BrowserRouter, Route, Routes, Navigate} from "react-router";
import {ToDoPage} from "./pages/todo/ToDoPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/calendar" replace />} />
                    <Route path="/to-do" element={<ToDoPage />} />
                    <Route path="/calendar" element={<ToDoPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
