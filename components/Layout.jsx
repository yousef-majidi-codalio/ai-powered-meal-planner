
        import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Input, Switch, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, Badge, Button, Card, CardBody } from "@heroui/react";
import { 
  HomeIcon,
  CalendarIcon,
  BookmarkIcon,
  StarIcon,
  FireIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  BellIcon,
  SunIcon,
  MoonIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";
        export default function Layout({ children }) {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState(() => {
  if (typeof window === "undefined") return "dark";
  return window.localStorage.getItem("theme") || "dark";
  });

  const navItems = useMemo(() => [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/meal-plan", label: "Meal Plan", icon: CalendarIcon },
  { to: "/recipes", label: "Recipes", icon: StarIcon },
  { to: "/shopping-list", label: "Shopping List", icon: BookmarkIcon },
  { to: "/nutrition", label: "Nutrition", icon: FireIcon },
  { to: "/settings", label: "Settings", icon: Cog6ToothIcon }
  ], []);

  useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  if (typeof window !== "undefined") {
    window.localStorage.setItem("theme", theme);
  }
  }, [theme]);

  const handleThemeToggle = (val) => {
  setTheme(val ? "dark" : "light");
  };
        return (
            <div className="flex h-screen bg-[var(--color-background)] text-[var(--color-text)]">
    {/* Sidebar */}
    <aside className="hidden md:flex w-72 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md">
    <div className="p-6 border-b border-[var(--color-border)]">
    <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
    <FireIcon className="w-5 h-5 text-[var(--color-primary)]" />
    </div>
    <span className="text-xl font-semibold text-[var(--color-text)]">AI-Powered Meal Planner</span>
    </div>
    </div>

    <nav className="flex-1 p-4">
    <ul className="flex flex-col gap-1">
    {navItems.map((item) => (
    <li key={item.to}>
    <NavLink
    to={item.to}
    className="group flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-[var(--color-primary)]/10 text-[var(--color-text)]"
    activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]"
    end={item.to === "/"}
    >
    <item.icon className="w-5 h-5 text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]" />
    <span className="text-[var(--color-text)] group-[.active]:text-[var(--color-primary)] text-[14px]">{item.label}</span>
    </NavLink>
    </li>
    ))}
    </ul>

    <Card className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60">
    <CardBody className="space-y-2">
    <p className="text-[var(--color-text)] text-sm font-semibold">Pro tip</p>
    <p className="text-[var(--color-text)]/80 text-[14px]">Set your dietary preferences to get smarter AI plans.</p>
    <Button as={NavLink} to="/settings/preferences" size="sm" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] mt-2">Update preferences</Button>
    </CardBody>
    </Card>
    </nav>

    <div className="p-4 border-t border-[var(--color-border)]">
    <div className="flex items-center gap-3">
    <Avatar name="You" size="sm" className="border border-[var(--color-border)]" />
    <div className="flex flex-col">
    <span className="text-[var(--color-text)] text-sm font-medium">Welcome</span>
    <span className="text-[var(--color-text)]/70 text-xs">Happy planning</span>
    </div>
    </div>
    </div>
    </aside>

    {/* Main area with header */}
    <div className="flex-1 flex flex-col overflow-hidden">
    <Navbar maxWidth="xl" className="sticky top-0 z-40 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
    <NavbarContent justify="start" className="md:hidden">
    <NavbarMenuToggle className="text-[var(--color-text)]" />
    <NavbarBrand>
    <span className="text-[var(--color-text)] font-semibold">AI-Powered Meal Planner</span>
    </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="gap-3" justify="center">
    <Input
    aria-label="Search"
    placeholder="Search recipes, plans..."
    value={search}
    onValueChange={setSearch}
    startContent={<MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />}
    classNames={{
    base: "hidden md:flex",
    inputWrapper: "h-10 rounded-xl bg-[var(--color-surface)]/70 border border-[var(--color-border)]",
    input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/70"
    }}
    />
    </NavbarContent>

    <NavbarContent justify="end" className="items-center gap-2">
    <Switch
    isSelected={theme === "dark"}
    onValueChange={handleThemeToggle}
    size="sm"
    classNames={{
    wrapper: "rounded-xl",
    }}
    thumbIcon={({ isSelected, className }) => (
    isSelected ? <SunIcon className={`${className} text-[var(--color-text)]`} /> : <MoonIcon className={`${className} text-[var(--color-text)]`} />
    )}
    />

    <Dropdown>
    <DropdownTrigger>
    <Button isIconOnly className="rounded-xl bg-transparent hover:bg-[var(--color-surface)]/60 border border-[var(--color-border)]">
    <Badge content="3" color="danger">
    <BellIcon className="w-5 h-5 text-[var(--color-text)]" />
    </Badge>
    </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Notifications" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}>
    <DropdownItem key="none" className="text-[var(--color-text)]">You're all caught up</DropdownItem>
    </DropdownMenu>
    </Dropdown>

    <Dropdown>
    <DropdownTrigger>
    <Button className="rounded-xl bg-transparent hover:bg-[var(--color-surface)]/60 border border-[var(--color-border)] px-2">
    <div className="flex items-center gap-2">
    <Avatar name="JD" size="sm" className="border border-[var(--color-border)]" />
    <ChevronDownIcon className="w-4 h-4 text-[var(--color-text)]" />
    </div>
    </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="User menu" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[200px]" }}>
    <DropdownItem key="profile" className="text-[var(--color-text)]">Profile</DropdownItem>
    <DropdownItem key="settings" className="text-[var(--color-text)]">Settings</DropdownItem>
    <DropdownItem key="logout" className="text-[var(--color-text)]" color="danger">Logout</DropdownItem>
    </DropdownMenu>
    </Dropdown>
    </NavbarContent>

    <NavbarMenu className="md:hidden bg-[var(--color-background)] border-t border-[var(--color-border)]">
    {navItems.map((item) => (
    <NavbarMenuItem key={item.to}>
    <NavLink
    to={item.to}
    className="flex items-center gap-3 px-3 py-2 rounded-xl text-[var(--color-text)] hover:bg-[var(--color-primary)]/10"
    activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]"
    end={item.to === "/"}
    >
    <item.icon className="w-5 h-5 text-[var(--color-text)]" />
    <span className="text-[var(--color-text)] text-[14px]">{item.label}</span>
    </NavLink>
    </NavbarMenuItem>
    ))}
    </NavbarMenu>
    </Navbar>

    <main className="flex-1 overflow-y-auto bg-[var(--color-background)]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    {children}
    </div>
    </main>
    </div>
    </div>
        );
        }
