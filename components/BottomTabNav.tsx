
import { useMemo } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

import { Home, CalendarDays, ChefHat, ShoppingCart, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
        export default function BottomTabNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const items = useMemo(() => [
  { value: "home", label: "Home", to: "/", icon: Home },
  { value: "plan", label: "Plan", to: "/meal-plan", icon: CalendarDays },
  { value: "explore", label: "Explore", to: "/explore", icon: ChefHat },
  { value: "list", label: "List", to: "/shopping-list", icon: ShoppingCart },
  { value: "profile", label: "Profile", to: "/profile", icon: User },
  ], []);
  const active = useMemo(() => {
  const path = location.pathname;
  if (path.startsWith("/meal-plan")) return "plan";
  if (path.startsWith("/explore")) return "explore";
  if (path.startsWith("/shopping-list")) return "list";
  if (path.startsWith("/profile")) return "profile";
  return "home";
  }, [location.pathname]);
  const onChange = (val: string) => {
  const it = items.find((i) => i.value === val);
  if (it) navigate(it.to);
  };
        return (
            <div className="fixed inset-x-0 bottom-0 z-40 bg-card border-t md:hidden">
    <div className="mx-auto max-w-3xl px-3 py-2">
    <Tabs value={active} onValueChange={onChange} className="w-full">
    <TabsList className="grid w-full grid-cols-5">
    {items.map((it) => (
    <TabsTrigger key={it.value} value={it.value} className="flex flex-col gap-1">
    <it.icon className="h-5 w-5" />
    <span className="text-[10px]">{it.label}</span>
    </TabsTrigger>
    ))}
    </TabsList>
    </Tabs>
    </div>
    </div>
        );
        }