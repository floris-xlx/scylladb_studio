import React from "react";
import { OpenGraphMeta } from "@/app/components/openGraph/default.jsx";

// define the metadata for the journal page
export const HeadRoot = () => {
  // define the metadata for the journal page
  const metadata = {
      title: "Eagle Fitness | Home",
      description: "Eagle Fitness helpt jou om je doelen te bereiken. Met Eagle Fitness ben je verzekerd van de beste begeleiding en de persoonlijke aandacht die nodig is om jouw doelen te bereiken.",
      image: "https://eaglefitness.nl/og.png",
      url: `https://eaglefitness.nl`,
    };
  

  // return the head component
  return (
    <head>
      <meta name="description" content={metadata.description} />
      <meta name="twitter:card" content={OpenGraphMeta.twitter.card}/>
      <meta name="twitter:creator" content={OpenGraphMeta.twitter.creator} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:type" content={OpenGraphMeta.og.type} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:site_name" content={OpenGraphMeta.og.site_name}/>
      <meta name="theme-color" content={OpenGraphMeta.theme_color} />
    </head>
  );
}