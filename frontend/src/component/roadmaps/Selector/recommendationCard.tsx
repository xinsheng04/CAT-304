import type { ProjectType } from "@/store/projectsSlice";
import React from "react";
import { useSelector } from "react-redux";

interface Recommendation {
  targetId: number;
  mode?: "career" | "project"
}

const RecommendationCard: React.FC<Recommendation> =({
   targetId
}) => {
    const projects = useSelector((state: any) => state.projects.projectsList) as ProjectType[];
    const projectTitle = projects.find(p => p.projectId === targetId)?.title || 'Unknown Title';
    return(
        <div className={`
            flex items-center p-4 m-2 rounded-xl shadow-lg transition-all duration-300 
            bg-pink-100/70 border-2 border-opacity-70 border-pink-300
            cursor-pointer hover:bg-pink-200/90
            `}>
                {/* Title */}
                <div className="flex-grow text-lg font-medium text-gray-900 text-left">
                    {projectTitle}
                </div>
        </div>
    )
}

export default RecommendationCard;