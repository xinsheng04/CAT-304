import React, { useState } from "react";
import { RoadmapItemCard } from "../component/cardDetail";
import type{ RoadmapItemCardProps } from "../component/cardDetail"; 

interface RoadmapItemListProps {
  items: RoadmapItemCardProps[];
}

export const RoadmapItemList: React.FC<RoadmapItemListProps> = ({ items }) => {
  const MAX_VISIBLE = 3;
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, MAX_VISIBLE);
  const remainingCount = items.length - MAX_VISIBLE;

  return (
  <div>
    <div className="grid grid-cols-3 gap-6">
      {visibleItems.map((item, index) => (
        <RoadmapItemCard
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          date={item.date}
          tags={item.tags}
        />
      ))}
    </div>

    {items.length > MAX_VISIBLE && (
      <div className="flex justify-center mt-6">
        <button
          className="w-full px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : `+${remainingCount} More`}
        </button>
      </div>
    )}
  </div>
);
};

export default RoadmapItemList;