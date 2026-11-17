import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => (
    <div className="min-h-screen bg-paper text-ink">
        <a href="#main" className="skip-link">
            Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
    </div>
);

export default Layout;
