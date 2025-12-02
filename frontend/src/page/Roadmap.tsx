import React from "react";
import Navbar from "../component/navbar";
import RoadmapSidebar from "../component/roadmapSidebar";

export const Roadmap: React.FC = () => {
    return (
        <div className="pt-10" 
        style={{ backgroundColor: '#1a202c'}}>
            <Navbar />
            <div className="fixed top-0 left-10 pt-16">
                <RoadmapSidebar />
            </div>
            <main className="pl-80 pt-2 p-8 flex-grow space-y-5 overflow-y-auto h-screen"> 
                {/* SECTION 1: What's new */}
                <section id="whats-new" className="pt-12">
                    <h2 className="text-2xl font-semibold text-white text-left">What's new</h2>
                    <div className="h-64 bg-gray-100 p-4 rounded mt-2">Latest updates and featured content...</div>
                </section>
                
                {/* SECTION 2: Recently Viewed */}
                <section id="recently-viewed" className="pt-12">
                    <h2 className="text-2xl font-semibold text-white text-left">Recently Viewed</h2>
                    <div className="h-64 bg-gray-100 p-4 rounded mt-2">Your recently viewed items...</div>
                </section>

                {/* SECTION 3: Java */}
                <section id="java" className="pt-12">
                    <h2 className="text-2xl font-semibold text-white text-left">Java</h2>
                    <div className="h-96 bg-gray-200 p-4 rounded mt-2">Deep dive into Java curriculum...</div>
                </section>

                {/* SECTION 4: Python */}
                <section id="python" className="pt-12">
                    <h2 className="text-2xl font-semibold text-white text-left">Python</h2>
                    <div className="h-96 bg-gray-200 p-4 rounded mt-2">Deep dive into Python curriculum...</div>
                </section>

            </main>
        </div>
    );
};