import React, { useEffect } from 'react';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import LanguagesSection from '@/components/portfolio/LanguagesSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import WhatsAppButton from '@/components/portfolio/WhatsAppButton';

export default function Home() {
  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Bramdon Yave Martínez | Desarrollador Web, Software y Sistemas POS en Culiacán';
    
    const metaTags = {
      description: 'Desarrollador profesional en Culiacán especializado en desarrollo web, software a medida, sistemas POS y ciberseguridad. Licenciado en Informática por la UAS con experiencia en redes, bases de datos y mantenimiento.',
      keywords: 'desarrollador web Culiacán, desarrollo software Sinaloa, sistemas POS México, programador C# Python SQL, ciberseguridad, redes VLAN, Bramdon Martínez, desarrollo web profesional',
      author: 'Bramdon Yave Martínez Núñez',
      'og:title': 'Bramdon Yave Martínez | Desarrollador Web & Software',
      'og:description': 'Desarrollador profesional especializado en desarrollo web, software, sistemas POS y ciberseguridad en Culiacán, Sinaloa.',
      'og:type': 'website',
      'og:locale': 'es_MX',
      'twitter:card': 'summary_large_image',
      'twitter:title': 'Bramdon Martínez - Desarrollador Web & Software',
      'twitter:description': 'Profesional en desarrollo web, software a medida y sistemas POS',
      robots: 'index, follow',
      'geo.region': 'MX-SIN',
      'geo.placename': 'Culiacán',
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

    // Structured Data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Bramdon Yave Martínez Núñez',
      jobTitle: 'Desarrollador Web y Software',
      description: 'Desarrollador profesional especializado en desarrollo web, software, sistemas POS y ciberseguridad',
      url: window.location.href,
      telephone: '+52-667-411-5833',
      email: 'by.martinez20@info.uas.edu.mx',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Culiacán',
        addressRegion: 'Sinaloa',
        addressCountry: 'MX'
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Universidad Autónoma de Sinaloa'
      },
      knowsAbout: ['Desarrollo Web', 'Desarrollo de Software', 'Sistemas POS', 'Ciberseguridad', 'Bases de Datos', 'Redes', 'C++', 'Python', 'SQL'],
      sameAs: []
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFBFC]" id="inicio">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <LanguagesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}