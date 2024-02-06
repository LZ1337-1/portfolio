"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>à propos de moi</SectionHeading>
      <p className="mb-3">
        Etudiant en informatique{" "}
        <span className="font-medium">passioné</span>, Je m'interesse à tout type de technologies.
        En allant de l'application mobile, au web design 3D{" "} en passant par la {" "}
        <span className="font-medium">cybersécurité</span>.{" "}
        <span className="italic">La partie que je préfère</span> est l'aspect créatif. 
        J'<span className="underline">adore</span> l'effet que ça fait de trouver enfin la solution à un problème. 
        En ce moment, je suis à la recherche d'un{" "}
        <span className="font-medium">Stage</span> en informatique pour une durée de 2 à 6 mois.
      </p>

      <p>
        <span className="italic">Quand je ne code pas</span>, j'aime jouer aux jeux vidéos, apprendre de nouvelles languages,
        et de nouveaux instruments.{" "}
        <span className="font-medium"> Apprendre de nouvelles choses</span>. En ce moment je me documente sur l'
        <span className="font-medium">histoire et la philosophie</span>. 
        J'apprends aussi à jouer du piano en autodidacte.
      </p>
    </motion.section>
  );
}
