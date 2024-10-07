"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/aceternity/3d-card";
import Link from "next/link";
import Image from "next/image";

const FavimakerCard = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-secondary/20 hover:bg-secondary/30 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
        <CardItem translateZ="0" className="text-xl font-bold text-neutral-600 dark:text-white">
          Favimaker - Create a Favicon
        </CardItem>
        <CardItem
          as="p"
          translateZ="0"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Create favicons or icons for your website
        </CardItem>
        <CardItem className="my-6 border rounded-lg shadow" translateZ="10">
          <Image
            src="https://github.com/ellioht/favimaker/blob/main/assets/favimaker-screen-1.png?raw=true"
            alt="favimaker screenshot"
            width={1000}
            height={1000}
            priority
            className="h-auto w-full rounded-lg"
          />
        </CardItem>
        <div className="flex justify-end items-center">
          <CardItem translateZ={0}>
            <a
              href="https://favimaker.com"
              target="__blank"
              className="rounded-md bg-black dark:bg-white dark:text-black text-white text-xs font-bold px-2 py-2"
            >
              Try now →
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default FavimakerCard;
