import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import MealPlan from "./pages/MealPlan";
import MealPlanCurrent from "./pages/MealPlanCurrent";
import MealPlanGenerate from "./pages/MealPlanGenerate";
import MealPlanHistory from "./pages/MealPlanHistory";
import Recipes from "./pages/Recipes";
import RecipesDiscover from "./pages/RecipesDiscover";
import RecipesSaved from "./pages/RecipesSaved";
import RecipeDetail from "./pages/RecipeDetail";
import ShoppingList from "./pages/ShoppingList";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import ProfileSettings from "./pages/ProfileSettings";
import PremiumInsights from "./pages/PremiumInsights";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <Routes>
        <Route element={<Layout />}>
                <Route path="/" element={<Landing />} />
      <Route path="/meal-plan" element={<MealPlan />} />
      <Route path="/meal-plan/current" element={<MealPlanCurrent />} />
      <Route path="/meal-plan/generate" element={<MealPlanGenerate />} />
      <Route path="/meal-plan/history" element={<MealPlanHistory />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/discover" element={<RecipesDiscover />} />
      <Route path="/recipes/saved" element={<RecipesSaved />} />
      <Route path="/recipes/:id" element={<RecipeDetail />} />
      <Route path="/shopping-list" element={<ShoppingList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
      <Route path="/profile/settings" element={<ProfileSettings />} />
      <Route path="/premium-insights" element={<PremiumInsights />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;