import React from "react";
import RoadmapDescription, { type FeaturedRoadmapCardProps } from "../component/roadmapDesciption";
import javaImage from "../assets/image/java_intro.jpg";

const sampleRoadmapData: FeaturedRoadmapCardProps = {
    // Data required by the base RoadmapItemCardProps
    id: 100012,
    slug: "react-advanced-patterns",
    imageSrc: javaImage,
    title: "React Advanced Patterns",
    creator: 12,
    date: "2026-02-15",
    description: 
        'The Java Developer roadmap is a staged progression starting with Core Java (Java SE). This foundational step requires mastering Object-Oriented Programming (OOP), the Collections Framework, and functional features like the Stream API. Next, the focus shifts to Enterprise Development, primarily utilizing the Spring Ecosystem. Developers learn to build powerful, maintainable RESTful APIs...',
    tags: [
        // Sample tags using the structure defined in constants/tagColors.ts
        { type: 'Difficulty', label: 'Beginner' }, 
        { type: 'Category', label: 'Java'},
        { type: 'Prerequisite', label: 'Requires OOP knowledge'},
    ],
        
    // Data required by the extended FeaturedRoadmapCardProps
    dateModified: '2026-08-15',
    isFavourite: true, 
};

export const RoadmapDetails: React.FC = () => {
    return (
        <div className="pt-6" style={{ backgroundColor: '#1a202c', minHeight: '100vh' }}>
                <RoadmapDescription
                    {...sampleRoadmapData}
                    isFavourite={sampleRoadmapData.isFavourite}
                />
        </div>
    );
};