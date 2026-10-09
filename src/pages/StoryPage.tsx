import React from 'react';
import AboutUs from '../components/AboutUs';
import { AnimatedSection } from '../components/AnimatedSection';

export default function StoryPage() {
  return (
    <div className="pt-24 min-h-screen">
      <AnimatedSection id="story-wrap" delay={0.05}>
        <AboutUs />
      </AnimatedSection>
    </div>
  );
}
