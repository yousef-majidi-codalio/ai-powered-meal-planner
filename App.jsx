
import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import MealPlan from "./pages/MealPlan";
import CurrentMealPlan from "./pages/CurrentMealPlan";
import SavedMealPlans from "./pages/SavedMealPlans";
import ShoppingList from "./pages/ShoppingList";
import Recipes from "./pages/Recipes";
import RecipeDiscovery from "./pages/RecipeDiscovery";
import MyRecipes from "./pages/MyRecipes";
import Nutrition from "./pages/Nutrition";
import NutritionDashboard from "./pages/NutritionDashboard";
import NutritionGoals from "./pages/NutritionGoals";
import Settings from "./pages/Settings";
import Preferences from "./pages/Preferences";
import Account from "./pages/Account";

function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout>
          <Routes>
                  <Route path="/" element={<Landing />} />
      <Route path="/meal-plan" element={<MealPlan />} />
      <Route path="/meal-plan/current" element={<CurrentMealPlan />} />
      <Route path="/meal-plan/saved" element={<SavedMealPlans />} />
      <Route path="/shopping-list" element={<ShoppingList />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/discovery" element={<RecipeDiscovery />} />
      <Route path="/recipes/my-recipes" element={<MyRecipes />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/nutrition/dashboard" element={<NutritionDashboard />} />
      <Route path="/nutrition/goals" element={<NutritionGoals />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/preferences" element={<Preferences />} />
      <Route path="/settings/account" element={<Account />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HeroUIProvider>
  );
}

export default App;
