
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

import { Bell, Moon, Sun } from "lucide-react";
        export default function AppHeader({ target }) {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState(document.documentElement.classList.contains("dark") ? "dark" : "light");
  const handleSearch = () => {
  // No backend: simple client alert for preview
  if (query.trim().length === 0) return;
  window.alert(`Searching for: ${query}`);
  };
  const toggleTheme = () => {
  const isDark = document.documentElement.classList.toggle("dark");
  setTheme(isDark ? "dark" : "light");
  };
        return (
            <div className="flex w-full items-center gap-2">
    <div className="hidden md:flex items-center gap-2">
    <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search recipes…" className="w-64" />
    <Button variant="secondary" onClick={handleSearch}>Search</Button>
    </div>
    <Button variant="ghost" size="icon" aria-label="Notifications">
    <Bell className="h-5 w-5" />
    </Button>
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
    {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
    <Separator orientation="vertical" className="mx-1 h-6" />
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="px-1">
    <Avatar className="h-7 w-7">
    <AvatarImage src="" alt="User" />
    <AvatarFallback>U</AvatarFallback>
    </Avatar>
    <Badge variant="secondary" className="ml-2 hidden md:inline">Free</Badge>
    </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="bg-popover text-popover-foreground z-50">
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
    </div>
        );
        }