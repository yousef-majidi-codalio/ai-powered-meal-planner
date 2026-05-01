

import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

        export default function Footer() {
        return (
            <footer className="mt-12 border-t bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
    <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} AI-Powered Meal Planner</div>
    <div className="flex items-center gap-3">
    <Button asChild variant="link" className="px-0"><Link to="/">Home</Link></Button>
    <Button asChild variant="link" className="px-0"><Link to="/recipes">Recipes</Link></Button>
    <Button asChild variant="link" className="px-0"><Link to="/meal-plan">Meal Plan</Link></Button>
    <Button asChild variant="link" className="px-0"><Link to="/shopping-list">Shopping</Link></Button>
    </div>
    </div>
    <Separator />
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
    <img src="https://pixabay.com/get/g420ce257efa40bd5b0235618f5eddbedcee8785f892cc3bfdbabc0f13b6306728c9d9040ab7ed55510571ffe5f3dd328170e9eac96d3e38329fe9921c54b203f_640.jpg" alt="kitchen" className="h-16 w-full object-cover rounded" />
    <img src="https://pixabay.com/get/gf2cd8502edde6fd6df6974ed5161e706649ec3e0da45430f21b8e206093b432ed9bb2be5086cba2e18fa22600c9ab958fbb884e519d7bb1d414de55d5bde8556_640.jpg" alt="kitchen" className="h-16 w-full object-cover rounded" />
    <img src="https://pixabay.com/get/g2f42219b3f55420f42f9f8b1baa31f17eab53ea968f4dcb39c0de0d8854da3cd81f1b68b3517598fbb651952d84bcc3a76b5992bff7e642417fb21d943430daa_640.jpg" alt="kitchen" className="h-16 w-full object-cover rounded" />
    <img src="https://pixabay.com/get/gb35cc0b3bf052e55f7dd81bb005a918cf426755cf5b28633075f2f72d09c168b7d4c0983d0e61cd5372327ff5be2295f9e13864e9c5ebdfafb8ee527ae4afc6a_640.jpg" alt="kitchen" className="h-16 w-full object-cover rounded hidden sm:block" />
    <img src="https://pixabay.com/get/g437a4b797ad7cd007af9473c0b81e259ecd9bb214dd6ef39390f10143224952a8ffa2a7ec7dc7503a7ef4643adc3cf289129b341c0e4d90ebe9cdbdec7421226_640.jpg" alt="kitchen" className="h-16 w-full object-cover rounded hidden sm:block" />
    </div>
    </div>
    </footer>
        );
        }