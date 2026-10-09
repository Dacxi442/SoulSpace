import React, { useState } from 'react';
import { ContactSection } from '../components/ContactSection';
import { AnimatedSection } from '../components/AnimatedSection';
import { Showroom } from '../components/Showroom';

export default function ContactPage() {
    return (
        <div className="pt-24 min-h-screen">
            <AnimatedSection id="showroom-wrap" delay={0.1}>
                <Showroom />
            </AnimatedSection>
        </div>
    );
}
