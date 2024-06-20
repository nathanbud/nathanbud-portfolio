import React from "react";
import { BentoGrid } from "./ui/MyBentoGrid";
import { gridItems } from "@/data";
import { BentoGridItem } from "./ui/MyBentoGrid";

const MyGrid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default MyGrid;
