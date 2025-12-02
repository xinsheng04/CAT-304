import React from "react";
import Navbar from "../component/navbar";
import RoadmapSidebar from "../component/roadmapSidebar";
import type {RoadmapItemCardProps } from "../component/cardDetail";
import javaImage from "../assets/image/java_intro.jpg";
import pythonImage from "../assets/image/python_intro.jpg";
import RoadmapItemList from "../component/itemList";

const roadmapData: RoadmapItemCardProps[] = [
  {
    imageSrc: javaImage,
    title: "Java Fundamentals",
    date: "2025-10-20",
    tags: [
      { type: "Difficulty", label: "Beginner" },
      { type: "Category", label: "Java" },
      { type: "Prerequisite", label: "None" },
    ],
  },
  {
    imageSrc: pythonImage,
    title: "Python Basics",
    date: "2025-11-05",
    tags: [
      { type: "Difficulty", label: "Intermediate" },
      { type: "Category", label: "Python" },
      { type: "Prerequisite", label: "Basic Programming" },
    ],
  },
  {
    imageSrc: pythonImage,
    title: "JavaScript Essentials",
    date: "2025-11-15",
    tags: [
      { type: "Difficulty", label: "Beginner" },
      { type: "Category", label: "JavaScript" },
      { type: "Prerequisite", label: "None" },
    ],
  },
  {
    imageSrc: pythonImage,
    title: "React for Beginners",
    date: "2025-11-25",
    tags: [
      { type: "Difficulty", label: "Intermediate" },
      { type: "Category", label: "React" },
      { type: "Prerequisite", label: "JavaScript Basics" },
    ],
  },
  {
    imageSrc: pythonImage,
    title: "Node.js Fundamentals",
    date: "2025-12-05",
    tags: [
      { type: "Difficulty", label: "Intermediate" },
      { type: "Category", label: "Node.js" },
      { type: "Prerequisite", label: "JavaScript Basics" },
    ],
  },
  {
    imageSrc: pythonImage,
    title: "SQL Basics",
    date: "2025-12-15",
    tags: [
      { type: "Difficulty", label: "Beginner" },
      { type: "Category", label: "Database" },
      { type: "Prerequisite", label: "None" },
    ],
  },
  {
    imageSrc: javaImage,
    title: "HTML & CSS Fundamentals",
    date: "2025-12-20",
    tags: [
      { type: "Difficulty", label: "Beginner" },
      { type: "Category", label: "Web Development" },
      { type: "Prerequisite", label: "None" },
    ],
  },
  {
    imageSrc: javaImage,
    title: "TypeScript Basics",
    date: "2026-01-05",
    tags: [
      { type: "Difficulty", label: "Intermediate" },
      { type: "Category", label: "TypeScript" },
      { type: "Prerequisite", label: "JavaScript Basics" },
    ],
  },
  {
    imageSrc: javaImage,
    title: "Angular Fundamentals",
    date: "2026-01-15",
    tags: [
      { type: "Difficulty", label: "Advanced" },
      { type: "Category", label: "Angular" },
      { type: "Prerequisite", label: "TypeScript Basics" },
    ],
  },
  {
    imageSrc: pythonImage,
    title: "Python Advanced Concepts",
    date: "2026-01-25",
    tags: [
      { type: "Difficulty", label: "Advanced" },
      { type: "Category", label: "Python" },
      { type: "Prerequisite", label: "Python Basics" },
    ],
  },
  {
    imageSrc: javaImage,
    title: "Java Advanced Topics",
    date: "2026-02-05",
    tags: [
      { type: "Difficulty", label: "Advanced" },
      { type: "Category", label: "Java" },
      { type: "Prerequisite", label: "Java Fundamentals" },
    ],
  },
  {
    imageSrc: javaImage,
    title: "React Advanced Patterns",
    date: "2026-02-15",
    tags: [
      { type: "Difficulty", label: "Advanced" },
      { type: "Category", label: "React" },
      { type: "Prerequisite", label: "React for Beginners" },
    ],
  },
];

export const Roadmap: React.FC = () => {
    return (
        <div className="flex" 
        style={{ backgroundColor: '#1a202c'}}>
            <Navbar />
            <div className="fixed top-0 left-10 pt-5">
                <RoadmapSidebar />
            </div>
            <main className="pl-80 p-10 flex-grow overflow-y-auto h-screen"> 
                {/* SECTION 1: What's new */}
                <section id="whats-new" className="pt-20">
                    <h2 className="text-2xl font-semibold text-white text-left">What's new</h2>
                    <div className="h-64 bg-gray-100 p-4 rounded mt-2">Latest updates and featured content...</div>
                </section>
                
                {/* SECTION 2: Recently Viewed */}
                <section id="recently-viewed" className="pt-20">
                    <h2 className="text-2xl font-semibold text-white text-left">Recently Viewed</h2>
                    <div className="h-64 bg-gray-100 p-4 rounded mt-2">Your recently viewed items...</div>
                </section>

                {/* SECTION 3: Java */}
                <section id="java" className="pt-20">
                    <h2 className="text-2xl font-semibold text-white text-left">Java</h2>
                    <RoadmapItemList items={roadmapData} />
                </section>

                {/* SECTION 4: Python */}
                <section id="python" className="pt-20">
                    <h2 className="text-2xl font-semibold text-white text-left">Python</h2>
                    <div className="h-96 bg-gray-200 p-4 rounded mt-2">Deep dive into Python curriculum...</div>
                </section>

            </main>
        </div>
    );
};