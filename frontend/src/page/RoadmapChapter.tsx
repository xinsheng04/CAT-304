import React from 'react';
import { useParams } from 'react-router-dom';

export const RoadmapChapter: React.FC = () => {
    const { chapterID } = useParams<{ chapterID: string }>();
    return (
        <div className="pt-6" style={{ backgroundColor: '#1a202c', minHeight: '100vh' }}>
            <h1 className="text-white text-center">Roadmap Chapter {chapterID}</h1>
        </div>
    );
};