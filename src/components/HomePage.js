import React from 'react'
import About from './About'
import BlogSection from './BlogSection'
import ProjectSection from './ProjectSection'
import RecommendationSection from './RecommendationSection'
import SkillSection from './SkillSection'
import Title from './Title'

function HomePage() {
    return (
        <div>
            <Title />;
            <RecommendationSection />;
            <SkillSection />;
            <ProjectSection />;
            <About />;
            <BlogSection />;
        </div>
    );
}

export default HomePage;