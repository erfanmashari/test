"use client";

import AppHeader from "@/components/app-header";
import { useParams } from "next/navigation"
import { useRouter } from "next/router"
import { useState } from "react";

export default function Page({ name }) {
    return (
        <div>
            {isSidebarOpen && "Sidebar open"}
        </div>
    )
}