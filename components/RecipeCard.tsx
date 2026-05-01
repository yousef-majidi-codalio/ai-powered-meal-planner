
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

import { Heart, HeartOff, Clock } from "lucide-react";
const defaultImages = [
  "https://pixabay.com/get/g3aaef9a32348fef07c5767a972d96be92d10dfa850b1a95208d28c77aafb5c67522847e77e655bf11407684d6ff4f174a71f55faf2ff791e6bc95c93524f3249_640.jpg",
  "https://pixabay.com/get/g998652dafa83df856425fa2b6931907df74af6f2d905f1e201cb81920cad0aabcf554bdd914e31fbae5ff9c9a632385a5187a9a5ed68499efc4cdd8e3de4605c_640.jpg",
  "https://pixabay.com/get/gae675d5662e2a9a8d5ddd1c32cd72fc426fdd3569c9734066061a082645f63af64cc7fa464619bd2120960ad9a7a02cdb226ebec04cb3065a73034d30a8a3507_640.jpg",
  "https://pixabay.com/get/gc1444f280dda56e5bcc2cb68b248caa8ee63dbbd6ac0a3e5e3de08a689ef4b1e207601e44245d21080a4d001d254e1f1ff7587e428de9c5ae0c7d6a04e9e5e9d_640.jpg",
  "https://pixabay.com/get/g8185b3b9866208df48fdf939a77e4a97d168ef35547ef24cc5fcbefd0efd0814677a8c1686ffc9996999b71b1ba0f33e26750330aa855ec7340c876686d06e76_640.jpg",
  "https://pixabay.com/get/gf24f6d392fac6b549657d3aadd275d9579b17e153b41e665d40a8203385292b1facad15f524578374a7814c2837ec71cceaeafbf7684376fcd3e9fe7239c05eb_640.jpg"
];
        export default function RecipeCard({ title, image, time, tags, onView, onSaveToggle }) {
  const [saved, setSaved] = useState(false);
  const imageIndex = Math.abs((title || "").split("").reduce((a,c)=>a + c.charCodeAt(0),0));
        return (
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
    <div className="aspect-video w-full overflow-hidden bg-muted">
    <img src={image || defaultImages[imageIndex % defaultImages.length]} alt={title || "Recipe"} className="h-full w-full object-cover" />
    </div>
    <CardHeader className="pb-2">
    <CardTitle className="text-base line-clamp-1">{title || "Tasty Dish"}</CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
    <div className="flex items-center justify-between text-sm text-muted-foreground">
    <div className="flex items-center gap-1"><Clock className="h-4 w-4" />{time || "25 min"}</div>
    <div className="flex gap-1 flex-wrap">{(tags || ["quick", "healthy"]).slice(0,3).map((t) => (<Badge key={t} variant="secondary" className="capitalize">{t}</Badge>))}</div>
    </div>
    </CardContent>
    <CardFooter className="flex items-center justify-between">
    <Button variant="outline" size="sm" onClick={() => onView && onView()}>View</Button>
    <Button variant={saved ? "secondary" : "outline"} size="sm" onClick={() => { const s = !saved; setSaved(s); onSaveToggle && onSaveToggle(s); }}>
    {saved ? <Heart className="h-4 w-4 mr-1 fill-current" /> : <HeartOff className="h-4 w-4 mr-1" />} {saved ? "Saved" : "Save"}
    </Button>
    </CardFooter>
    </Card>
        );
        }