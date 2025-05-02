"use client";

import AppHeader from "./app-header";
import { useState } from "react";
import AppSidebar from "./app-sidebar";

export default function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div>
            <AppHeader title={`post number`} openSidebar={openSidebar}/>
            {isSidebarOpen && <AppSidebar />}
            {children}
        </div>
    )
}