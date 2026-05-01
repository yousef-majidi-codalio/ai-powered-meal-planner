
        

import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const PLACEHOLDER_IMAGES = [
  "https://pixabay.com/get/ge9321e9e2b2580bed72d32e729de9da91b807b63e17c906f13c925c54131c818eb83e3409b0f808ff2bbbdb4a137a0ab996785ac1518a7f1513bb318978382af_640.jpg",
  "https://pixabay.com/get/ged3de71f50b377bf4f52845d0762c9e2c9c7b560ae1e868e3277773c161919d7d6791c1fa9a4e8145d2bb6cea9fd562708127650e41e7b2400ae82523fec7c7c_640.jpg",
  "https://pixabay.com/get/g76b8cd2e3c1a3da852f2e8d3405798af75a5e5f0a8d0b93f1cecef8bafc40ff3516ffd97f41c655ac6a03756698e220ea5f38f93d6069a16886ed115cfaaf685_640.jpg",
  "https://pixabay.com/get/ge9716e46a8a89cc8da9e2e6ef3bd207d041259aa3f777467456f3dd68b63337975c546493f7f77ac8fd5cd563c2628700761605d94cddd49d5edd8de2f002106_640.jpg",
  "https://pixabay.com/get/gc94935aa39c1a6331b74db6aee5945aad2da462c0d70fb89688d048dbe056b33dd10d00e7260d85fd057c87305d70e178bdf7508c5d00eb81bd30a4175c4b5c1_640.jpg",
  "https://pixabay.com/get/g00335f1be7e04d824fe079e256cf8d5ec229340e3ea25ce44bf83cdd55da104afcd9bd9060e661aafc4142f00d1a8a2e0ab54e091ea65a47d4cb8af495577af8_640.jpg",
  "https://pixabay.com/get/g8ddb240866d8fc298274e9aef1707a371ca7b7bb69a47107d944a9b73f3488296c102a14b1e422467ff89d87264166cecf5d6d92d3a96eac346583d849d28807_640.jpg",
  "https://pixabay.com/get/gb2bec98a859aa384d32b6884d3dcbe3e379d475ff8711e3fabdfe94405061507a919b0651910d1882f7eccc895ef75264864393d29c0b8c16173acd0513c9daf_640.jpg",
  "https://pixabay.com/get/g19d487c90aae7e20f185abf1aa5a4cfca95cd7e1d5a15f6f573ca8cbeb10823cc42911d2a62362190ec35be347a592a15953be809c6202534d128a36d64ea7fa_640.jpg",
  "https://pixabay.com/get/g1b00192fc2eaa827ffe59bd2217e7ce56c776119d450040895c963218c4394387d93318dbf91dd6d6f247387e53e2672355dd0fcd6de7181e5269b3a4b2ce16e_640.jpg",
  "https://pixabay.com/get/g1003504aa122f8c302b367783a50570fa345ec21087d6145762b89e1af4b319bc5e14ba0c29825bf95c9f21290002d2780a05074c87bc8750d424b5d390b14ef_640.jpg",
  "https://pixabay.com/get/g9d20b64e00c4c6cea5bf07b17127ee192b357e7a036e8c83598dbdd7373b770b8d9637ff5befbdb4cbdab9db266a7f877fd644f1b8dc1da42d95355fe7967e96_640.jpg",
  "https://pixabay.com/get/gff4c26329427eb5deb9fd630399584941e01f0f379698f959b6a278b1444cf9285419219abb5a805fd24f5b4e5883cadc5603a05da01b35825282ecd3c4a0b2f_640.jpg",
  "https://pixabay.com/get/gb3156f4048b51a09882fb03ba586396e9a7c74f596443cce4b8ff6431bda55acabecaa0ece9ee4b0a8e4c030d6c832ac9db829eb2e042e425a8244dcf7ef5e41_640.jpg",
  "https://pixabay.com/get/g1503fa263030e46c7e9590154acb06b5f5ffc25fcb0954d02cc2efdcb87462105314016bf2cc87f3599c2080e266588e20dbaef7faab0640b53cff84e163116b_640.jpg",
  "https://pixabay.com/get/g4a514e159be92a4dae926191f0a8c46e7dc75325b02476406c787ed664da4c1cada2b252054e7f729e0cd133f5c75d65c54d9ba0a9cac23e2e4527aa324d1d30_640.jpg",
  "https://pixabay.com/get/gdbdf89c2e88c79f28ee3ce45adabbff76211458476bf808cd146031eab2ce53254ccf04da4e50b4e32902568335d8c16edff54aead34d5cc51296f235691ec01_640.jpg",
  "https://pixabay.com/get/gbe1e77ee0a958eaf9c602b63f2e5006fec5b2f7a081e99d3637402e13a6fb5b7a8a989ecf8bdd3d66bb851a625d12f72e9f9e792f2b9c19fd10d9651cd969ec8_640.jpg",
  "https://pixabay.com/get/g91d53ade61f58214df3431b979bd08152315076f04415a06f70726a1c2b761f38dc97635b3ee1094d41d8daced63a375cfb6b1d6fae61caf1ba99cb007432cb5_640.jpg",
  "https://pixabay.com/get/gb4ef990a49b1239c5a4946f4fb64b22557121f3db17168e668603d79219637ea69e8985b1da004f84fc5e40f2d00900dd39be6a63658fbb982fdc7cdfe602ad5_640.jpg",
];
        export default function RecipeCard({ title, description, image, badges = [], index = 0, onClick }: { title: string; description?: string; image?: string; badges?: string[]; index?: number; onClick?: () => void }) {
  const images = PLACEHOLDER_IMAGES;
  const imgSrc = image || images[index % images.length];
        return (
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
    <div className="bg-muted">
    <AspectRatio ratio={16 / 9}>
    {imgSrc ? (
    <img src={imgSrc} alt={title} className="h-full w-full object-cover" />
    ) : (
    <Skeleton className="h-full w-full" />
    )}
    </AspectRatio>
    </div>
    <CardHeader className="pb-2">
    <CardTitle className="line-clamp-1">{title}</CardTitle>
    {description ? (
    <CardDescription className="line-clamp-2">{description}</CardDescription>
    ) : null}
    </CardHeader>
    <CardContent className="flex items-center justify-between">
    <div className="flex flex-wrap gap-1">
    {(badges || []).slice(0, 3).map((b) => (
    <Badge key={b} variant="secondary">{b}</Badge>
    ))}
    </div>
    <Button size="sm" onClick={onClick}>View</Button>
    </CardContent>
    </Card>
        );
        }