
import { useEffect, useMemo, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { NavigationMenu } from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

import { Link, NavLink, useLocation } from "react-router-dom";

import { Menu, Search, ChevronDown, ChefHat, User, LogOut, Moon, Sun } from "lucide-react";
        export default function Header() {
  const location = useLocation();
  const activeSegment = useMemo(() => location.pathname.split("/")[1] || "", [location.pathname]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldDark);
    setIsDark(shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };
        return (
            <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
    <div className="flex items-center gap-2 min-w-0">
    <Sheet>
    <SheetTrigger asChild>
    <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
    <Menu className="h-5 w-5" />
    </Button>
    </SheetTrigger>
    <SheetContent side="left" className="w-80">
    <SheetHeader>
    <SheetTitle className="text-left flex items-center gap-2"><ChefHat className="h-5 w-5 text-primary" />AI-Powered Meal Planner</SheetTitle>
    </SheetHeader>
    <nav className="mt-4 grid gap-1">
    <NavLink to="/" className={({isActive}) => `px-3 py-2 rounded-md text-sm ${isActive ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted'}`}>Home</NavLink>
    <NavLink to="/meal-plan" className={({isActive}) => `px-3 py-2 rounded-md text-sm ${isActive ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted'}`}>Meal Plan</NavLink>
    <NavLink to="/recipes" className={({isActive}) => `px-3 py-2 rounded-md text-sm ${isActive ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted'}`}>Recipes</NavLink>
    <NavLink to="/shopping-list" className={({isActive}) => `px-3 py-2 rounded-md text-sm ${isActive ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted'}`}>Shopping List</NavLink>
    <NavLink to="/profile" className={({isActive}) => `px-3 py-2 rounded-md text-sm ${isActive ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted'}`}>Profile</NavLink>
    </nav>
    <Separator className="my-4" />
    <div className="grid grid-cols-3 gap-2">
    <img src="https://pixabay.com/get/g3aaef9a32348fef07c5767a972d96be92d10dfa850b1a95208d28c77aafb5c67522847e77e655bf11407684d6ff4f174a71f55faf2ff791e6bc95c93524f3249_640.jpg" alt="food" className="h-16 w-full object-cover rounded" />
    <img src="https://pixabay.com/get/g998652dafa83df856425fa2b6931907df74af6f2d905f1e201cb81920cad0aabcf554bdd914e31fbae5ff9c9a632385a5187a9a5ed68499efc4cdd8e3de4605c_640.jpg" alt="food" className="h-16 w-full object-cover rounded" />
    <img src="https://pixabay.com/get/gae675d5662e2a9a8d5ddd1c32cd72fc426fdd3569c9734066061a082645f63af64cc7fa464619bd2120960ad9a7a02cdb226ebec04cb3065a73034d30a8a3507_640.jpg" alt="food" className="h-16 w-full object-cover rounded" />
    </div>
    </SheetContent>
    </Sheet>
    <Link to="/" className="flex items-center gap-2 text-base font-semibold whitespace-nowrap">
    <ChefHat className="h-5 w-5 text-primary" />
    <span className="hidden sm:inline">AI-Powered Meal Planner</span>
    <span className="sm:hidden">Meal Planner</span>
    </Link>
    </div>

    <div className="hidden md:flex items-center gap-1 min-w-0">
    <NavigationMenu>
    <div className="flex items-center gap-1">
    <NavLink to="/" className={({isActive}) => `px-3 py-2 rounded-md text-sm ${isActive ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted'}`}>Home</NavLink>
    <NavLink to="/meal-plan" className={({isActive}) => `px-3 py-2 rounded-md text-sm ${isActive ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted'}`}>Meal Plan</NavLink>
    <NavLink to="/recipes" className={({isActive}) => `px-3 py-2 rounded-md text-sm ${isActive ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted'}`}>Recipes</NavLink>
    <NavLink to="/shopping-list" className={({isActive}) => `px-3 py-2 rounded-md text-sm ${isActive ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted'}`}>Shopping</NavLink>
    <NavLink to="/profile" className={({isActive}) => `px-3 py-2 rounded-md text-sm ${isActive ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted'}`}>Profile</NavLink>
    </div>
    </NavigationMenu>
    </div>

    <div className="flex items-center gap-2 min-w-0">
    <div className="hidden md:flex items-center gap-2">
    <div className="relative">
    <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    <Input type="search" placeholder="Search recipes" className="pl-8 w-56" />
    </div>
    </div>
    <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme} title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="h-9 px-2">
    <Avatar className="h-6 w-6">
    <AvatarImage src="" alt="User" />
    <AvatarFallback>U</AvatarFallback>
    </Avatar>
    <ChevronDown className="ml-1 h-4 w-4" />
    </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56 bg-popover text-popover-foreground">
    <DropdownMenuItem asChild>
    <Link to="/profile" className="w-full flex items-center gap-2">
    <User className="h-4 w-4" /> Profile
    </Link>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive">
    <LogOut className="h-4 w-4" /> Sign out
    </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
    </div>
    </div>
    </header>
        );
        }