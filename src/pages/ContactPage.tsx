import React, { useState } from 'react';
import { ContactSection } from '../components/ContactSection';
import { AnimatedSection } from '../components/AnimatedSection';

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      <AnimatedSection id="contact-wrap" delay={0.05}>
        <ContactSection />
      </AnimatedSection>
    </div>
  );
}
