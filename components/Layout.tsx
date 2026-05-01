
import { Outlet } from "react-router-dom";
import { Separator } from "./ui/separator";
import Header from "./Header";
import Footer from "./Footer";
        export default function Layout() {
        return (
            <div className="w-full min-w-0 min-h-screen flex flex-col bg-background text-foreground">
    <Header />
    <main className="flex-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <Outlet />
    </div>
    </main>
    <Footer />
    </div>
        );
        }