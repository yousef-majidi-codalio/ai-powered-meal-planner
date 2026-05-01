import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import MealPlan from "./pages/MealPlan";
import Explore from "./pages/Explore";
import RecipeDetail from "./pages/RecipeDetail";
import ShoppingList from "./pages/ShoppingList";
import Profile from "./pages/Profile";
import Preferences from "./pages/Preferences";
import SavedRecipes from "./pages/SavedRecipes";
import Pantry from "./pages/Pantry";
import SubscriptionManagement from "./pages/SubscriptionManagement";
import Rewards from "./pages/Rewards";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <Routes>
        <Route element={<Layout />}>
                <Route path="/" element={<Landing />} />
      <Route path="/meal-plan" element={<MealPlan />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/explore/recipe-detail" element={<RecipeDetail />} />
      <Route path="/shopping-list" element={<ShoppingList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/preferences" element={<Preferences />} />
      <Route path="/profile/saved-recipes" element={<SavedRecipes />} />
      <Route path="/pantry" element={<Pantry />} />
      <Route path="/profile/subscription" element={<SubscriptionManagement />} />
      <Route path="/profile/rewards" element={<Rewards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;