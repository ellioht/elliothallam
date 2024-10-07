"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/aceternity/3d-card";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-secondary/20 hover:bg-secondary/30 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
        <CardItem translateZ="0" className="text-xl font-bold text-neutral-600 dark:text-white">
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="0"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={0}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={0}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
