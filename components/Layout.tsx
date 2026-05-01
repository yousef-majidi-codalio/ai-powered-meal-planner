
import { useLocation, NavLink, Outlet } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger, SidebarSeparator } from "./ui/sidebar";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import BottomTabNav from "./BottomTabNav";
import { Home, CalendarDays, ChefHat, ShoppingCart, Boxes, User } from "lucide-react";
import { Separator } from "./ui/separator";
import React, { useMemo } from "react";
        export default function Layout({ item }) {
  const location = useLocation();
  const navItems = useMemo(() => [
  { to: "/", label: "Home", icon: Home },
  { to: "/meal-plan", label: "Meal Plan", icon: CalendarDays },
  { to: "/explore", label: "Explore", icon: ChefHat },
  { to: "/shopping-list", label: "Shopping", icon: ShoppingCart },
  { to: "/pantry", label: "Pantry", icon: Boxes },
  { to: "/profile", label: "Profile", icon: User },
  ], []);
        return (
            <SidebarProvider>
    <Sidebar collapsible="icon" variant="inset">
    <SidebarHeader className="px-3 py-2">
    <div className="flex items-center gap-2 px-1">
    <ChefHat className="h-5 w-5 text-primary" />
    <span className="font-semibold">AI-Powered Meal Planner</span>
    </div>
    </SidebarHeader>
    <SidebarSeparator />
    <SidebarContent>
    <SidebarGroup>
    <SidebarGroupLabel>Main</SidebarGroupLabel>
    <SidebarMenu>
    {navItems.map((item) => (
    <SidebarMenuItem key={item.to}>
    <SidebarMenuButton asChild isActive={location.pathname === item.to} tooltip={item.label}>
    <NavLink to={item.to} className="flex items-center gap-2">
    <item.icon />
    <span>{item.label}</span>
    </NavLink>
    </SidebarMenuButton>
    </SidebarMenuItem>
    ))}
    </SidebarMenu>
    </SidebarGroup>
    </SidebarContent>
    <SidebarFooter className="px-3 py-2 text-xs text-muted-foreground">
    <div>Press ⌘/Ctrl+B to toggle</div>
    </SidebarFooter>
    </Sidebar>
    <SidebarInset>
    <div className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
    <div className="flex h-14 items-center gap-2 px-3">
    <SidebarTrigger />
    <div className="font-semibold">AI-Powered Meal Planner</div>
    <div className="ml-auto flex items-center gap-2">
    <AppHeader />
    </div>
    </div>
    </div>
    <div className="w-full min-w-0 flex-1">
    <Outlet />
    </div>
    <div className="md:hidden border-t">
    <BottomTabNav />
    </div>
    <AppFooter />
    </SidebarInset>
    </SidebarProvider>
        );
        }