import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";



        

        export default function AppFooter() {
        return (
            <footer className="w-full mt-8">
    <Separator />
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 text-sm text-muted-foreground">
    <p>© {new Date().getFullYear()} AI-Powered Meal Planner</p>
    <div className="flex items-center gap-2">
    <Badge variant="secondary" className="hidden sm:inline">Beta</Badge>
    <Button variant="link" className="px-2" asChild>
    <a href="#">Explore</a>
    </Button>
    <Button variant="link" className="px-2" asChild>
    <a href="#">Privacy</a>
    </Button>
    </div>
    </div>
    </footer>
        );
        }