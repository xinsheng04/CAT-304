import React from "react";
import { useNavigate } from "react-router-dom";
import { X } from 'lucide-react';

interface RoadmapDescriptionEditProps{
    imageSrc : string;
    title: string;
    description: string;
}


const RoadmapDescriptionEdit: React.FC<RoadmapDescriptionEditProps> = ({
    imageSrc, title, description}) => {
        const navigate = useNavigate();
        return (
                <div className=" max-w-5xl mx-auto text-white">
                    {/* Top Right Icon */}
                    <div className="flex justify-end">
                        <button
                            className="text-white hover:text-gray-400 p-1"
                            aria-label="Close Featured Roadmap"
                            onClick={() => navigate(-1)}
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left Section: Image and Basic Info */}
                        <div className="w-full md:w-[40%]">
                            <div className="relative h-70 bg-gray-700/30 rounded-md mb-4 overflow-hidden">
                                <img
                                    src={imageSrc}
                                    alt={title}
                                    className="w-full h-full object-cover" 
                                    onError={(e) => {
                                        e.currentTarget.src = 'placeholder-image.jpg'; 
                                    }}
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-left">title</h3>
                            <h2 className="text-3xl font-bold mb-4 text-left">{title}</h2>
                        </div>
                        {/* Right Section: Tags */}
                        <div className="w-full md:w-[60%]">
                            {/* Description Section */}
                            <h3 className="text-xl font-bold mb-2 text-left">Description</h3>
                            {/* Description Text */}
                            <p className="text-gray-300 leading-relaxed text-base whitespace-pre-wrap text-justify">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
        );
    }

export default RoadmapDescriptionEdit;