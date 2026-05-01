import React from "react";
import { Button } from "../components/ui/button";

import RecipeCard from "../components/RecipeCard";

import { useState } from "react";

export default function RecipesSaved() {
    const srcs = [
      "https://pixabay.com/get/g3aaef9a32348fef07c5767a972d96be92d10dfa850b1a95208d28c77aafb5c67522847e77e655bf11407684d6ff4f174a71f55faf2ff791e6bc95c93524f3249_640.jpg",
      "https://pixabay.com/get/g998652dafa83df856425fa2b6931907df74af6f2d905f1e201cb81920cad0aabcf554bdd914e31fbae5ff9c9a632385a5187a9a5ed68499efc4cdd8e3de4605c_640.jpg",
      "https://pixabay.com/get/gae675d5662e2a9a8d5ddd1c32cd72fc426fdd3569c9734066061a082645f63af64cc7fa464619bd2120960ad9a7a02cdb226ebec04cb3065a73034d30a8a3507_640.jpg",
      "https://pixabay.com/get/gc1444f280dda56e5bcc2cb68b248caa8ee63dbbd6ac0a3e5e3de08a689ef4b1e207601e44245d21080a4d001d254e1f1ff7587e428de9c5ae0c7d6a04e9e5e9d_640.jpg",
      "https://pixabay.com/get/g8185b3b9866208df48fdf939a77e4a97d168ef35547ef24cc5fcbefd0efd0814677a8c1686ffc9996999b71b1ba0f33e26750330aa855ec7340c876686d06e76_640.jpg",
      "https://pixabay.com/get/gf24f6d392fac6b549657d3aadd275d9579b17e153b41e665d40a8203385292b1facad15f524578374a7814c2837ec71cceaeafbf7684376fcd3e9fe7239c05eb_640.jpg",
      "https://pixabay.com/get/ga3bc95d2b8d84cb5fbe0b98bdefa8ef44e1edda0934b040bbd373f0748bba8ad722a6c043a449336a8f7cde25133f02565281f19f652f8c7eecb95ac33600bf7_640.jpg",
      "https://pixabay.com/get/g79e7f60d9e05ffa2ddbacf96b5c12562cf70c32a609c60faedf85c93a6fdbc0699bb1b424cf2e16ebcb2541fc30df8ebfee793aac6060a934ae86455693a1ed1_640.jpg",
      "https://pixabay.com/get/gac07fce659e163aacf57b9200f45f7171aae7bcebee5b558f4d4f008901170a89863a9858fba47b8dee8239cb88064e46032a400181fba4fdd7116dae268ff7a_640.jpg",
      "https://pixabay.com/get/g30d4203b8fc26ab706ecbe502e939aae8a4b0f8d33dbb6c6a36a131f16d8aa32ea1e128b2ed4bbc4807abf22d3eb9e01635b2da613dbd12b0447aaf4d5d5f2d1_640.jpg",
      "https://pixabay.com/get/g383741c8059246e73ef122148bf19658c0031d94d1d20184a311f9f8d3b706167ad710cda92191fbf425156add721f59b8f26b287ac755d30318fb76e1f47fae_640.jpg",
      "https://pixabay.com/get/gf1762e623258ef5e573316c18468dfc5791f1468195173f9bbd34ea72c084a92bec35c1bcad72989678cb30d5d2e5f0ef953d129fa42d4a7ea5932c54322fb4a_640.jpg",
      "https://pixabay.com/get/g13a9e781c2b2d02726629ace546eb621af2340505e3228292d4ed4a09f9cc121945a126319cd5f478b8ba919fd169d1d4be3371da7738a84c6ee20fb17aaef4b_640.jpg",
      "https://pixabay.com/get/g30096e73180e8eb840e4bfefcab6c9002968c52ec0ba14f4f23dc181f13eef06feeb1782f1071b25932c0df98b5fdb43958b1b81712fe117d5fa557dce571ba8_640.jpg",
      "https://pixabay.com/get/g6d9b8497c38b132b6617c8035f46521a67e5e8633eb8f764357f21e8a82935f7b4eea646266f581f9ec76f54e446aa8a74bdd5f607e66bc38bfa6c2779e0e1e5_640.jpg",
      "https://pixabay.com/get/g36129d0954a071bca47b7f7c979a2eae74bfbb8feea31cbd370cc335a12f1ec58e8a743ccfd699d684e556ae64ee740b0b414750c516aba77e84b9d5b073f360_640.jpg",
      "https://pixabay.com/get/g14d5f54ddbab735f39ea277dc6e9773671ed81fffef29691da483e34302fef2f49336817ce30ce9a7e31bc4087b557c76fdead303c16aba6e8bef73e4fb93b36_640.jpg",
      "https://pixabay.com/get/g663c9119a8602a0ed8894039bee9fe66e0cf15c9075314b7011717f2c46dde6b9619ce0af496b53867f860ecb4de92b2d82056421b0c82b640f1e8f87f6da599_640.jpg",
      "https://pixabay.com/get/g119d269e3b50c8e8568004796fa18dcdc3114c6b5c368f6e8247a557371f7119637e0e586d5bb265099f9f81846e61355844f0583643b05708c7cb953e84f2f4_640.jpg",
      "https://pixabay.com/get/g5de87eeb2ab86785cdd0c0f0a6a15a01278a8116e822161a632cee0158779fc4e6520cee2941e99123f15b786f7c0c0bd75f24d08bed69c8834cb7718faf914f_640.jpg"
    ];
    const titles = ["Saved #1","Saved #2","Saved #3","Saved #4","Saved #5","Saved #6","Saved #7","Saved #8","Saved #9","Saved #10"];
    const mk = (i: number) => ({ title: titles[i % titles.length], image: srcs[i % srcs.length], time: `${15 + (i % 6) * 5} min`, tags: ["saved"] });
    const [items, setItems] = useState(Array.from({length: 9}).map((_,i)=>mk(i)));
    const shuffle = () => setItems((it) => it.slice().sort(() => Math.random() - 0.5));
  return (
   <div className="bg-background text-foreground w-full min-w-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <section className="py-4 grid gap-4">
      <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Saved Recipes</h1>
      <Button variant="outline" onClick={shuffle}>Shuffle</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it, i) => (
      <RecipeCard key={i} title={it.title} image={it.image} time={it.time} tags={it.tags} />
      ))}
      </div>
      </section>
      </div>
    </div>
  );
}