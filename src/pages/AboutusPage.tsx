import React from 'react';
import { AboutUS } from '../components/AboutUs';
import { AnimatedSection } from '../components/AnimatedSection';

export default function CommunityPage() {
  return (
    <div className="pt-24 min-h-screen">
      <AnimatedSection id="impact-wrap" delay={0.05}>
        <AboutUS />
      </AnimatedSection>
    </div>
  );
}
