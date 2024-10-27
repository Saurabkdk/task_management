import Navbar from "@/components/Navbar";
import React from "react";

import 'primeicons/primeicons.css';
        

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="p-10 flex justify-center">
            <main className="w-4/5 px-5">
                <Navbar />
                {children}
            </main>
        </main>
    )
}