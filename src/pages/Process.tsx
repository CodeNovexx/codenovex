import React from 'react';
import { Lightbulb, Layers, Code2, Rocket, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FadeInUp from '../components/FadeInUp';
import { GradientReveal, TextReveal } from '../components/TextReveal';
import Logo from '../assets/logo.webp';
import LanguageSelector from '../components/LanguageSelector';
import { Footer } from '../components/Footer';

const Process: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isGeorgian = i18n.language === 'ka';

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactElement = document.querySelector('[data-section="contact"]');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  const steps = [
    {
      number: t('process.step1.number'),
      icon: Lightbulb,
      title: t('process.step1.title'),
      subtitle: t('process.step1.subtitle'),
      description: t('process.step1.description'),
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      features: t('process.step1.features', { returnObjects: true }) as string[]
    },
    {
      number: t('process.step2.number'),
      icon: Layers,
      title: t('process.step2.title'),
      subtitle: t('process.step2.subtitle'),
      description: t('process.step2.description'),
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      features: t('process.step2.features', { returnObjects: true }) as string[]
    },
    {
      number: t('process.step3.number'),
      icon: Code2,
      title: t('process.step3.title'),
      subtitle: t('process.step3.subtitle'),
      description: t('process.step3.description'),
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      features: t('process.step3.features', { returnObjects: true }) as string[]
    },
    {
      number: t('process.step4.number'),
      icon: Rocket,
      title: t('process.step4.title'),
      subtitle: t('process.step4.subtitle'),
      description: t('process.step4.description'),
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      features: t('process.step4.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={Logo}
                alt="CodeNovex"
                className="w-12 h-12 rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-white text-xl font-bold hidden sm:block">
                CodeNovex
              </span>
            </Link>

            <nav className="flex items-center gap-6">
              <Link
                to="/"
                className="text-gray-300 hover:text-brand-primary transition-colors duration-300 font-medium hidden md:block"
              >
                {t("header.HOME")}
              </Link>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-brand-primary transition-colors duration-300 font-medium hidden md:block"
              >
                {t("header.BLOG")}
              </Link>
              <button
                onClick={handleContactClick}
                className="relative px-4 py-2 text-sm font-medium text-brand-primary border border-brand-primary/40 rounded-lg backdrop-blur-sm bg-brand-primary/5 hover:bg-brand-primary/10 hover:border-brand-primary/60 hover:shadow-lg hover:shadow-brand-primary/20 transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10">{t("header.CONTACT")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              </button>
              <LanguageSelector size="compact" />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <FadeInUp delay={0.1}>
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm font-semibold rounded-full">
                {t('process.title').toUpperCase()}
              </span>
            </div>
            
            <GradientReveal key={i18n.language} className={`${isGeorgian ? 'text-3xl md:text-5xl lg:text-6xl leading-[1.4]' : 'text-4xl md:text-6xl lg:text-7xl'} font-bold mb-6`}>
              <h1>
                {t('process.subtitle')}
              </h1>
            </GradientReveal>
            
            <TextReveal key={`${i18n.language}-hero`} className={`${isGeorgian ? 'text-lg md:text-xl leading-[2]' : 'text-xl md:text-2xl leading-relaxed'} text-gray-400 max-w-4xl mx-auto `}>
              {t('process.heroTitle')}
            </TextReveal>
          </div>
        </FadeInUp>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-primary via-purple-600 to-transparent hidden md:block"></div>
          
          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <FadeInUp key={step.number} delay={0.2 + index * 0.15}>
                  <div className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 hidden md:block z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl shadow-${step.color}/50`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`md:w-[calc(50%-4rem)] ${isEven ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                    <div className="group relative bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-10 hover:border-gray-700 transition-all duration-500 shadow-2xl hover:shadow-brand-primary/10">
                      {/* Gradient Background Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                      
                      <div className="relative z-10">
                        {/* Mobile Icon */}
                        <div className={`md:hidden w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Step Number */}
                        <div className={`text-8xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20 absolute -top-4 ${isEven ? 'md:-right-4' : 'md:-left-4'}`}>
                          {step.number}
                        </div>
                        
                        {/* Title */}
                        <h3 className={`${isGeorgian ? 'text-2xl md:text-3xl leading-[1.4]' : 'text-3xl md:text-4xl'} font-bold mb-3 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.title}
                        </h3>
                        
                        {/* Subtitle */}
                        <p className={`${isGeorgian ? 'text-lg leading-[2]' : 'text-xl'} text-gray-400 font-semibold mb-6 italic`}>
                          {step.subtitle}
                        </p>
                        
                        {/* Description */}
                        <p className={`text-gray-300 mb-8 ${isGeorgian ? 'text-base leading-[2]' : 'text-lg leading-relaxed'}`}>
                          {step.description}
                        </p>
                        
                        {/* Features List */}
                        <div className="space-y-3">
                          {step.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className={`w-5 h-5 mt-0.5 text-transparent bg-gradient-to-r ${step.color} bg-clip-text flex-shrink-0`} />
                              <span className={`text-gray-400 ${isGeorgian ? 'leading-[1.9]' : ''}`}>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <FadeInUp delay={0.8}>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-brand-primary/10 via-purple-600/10 to-brand-primary/10 border-2 border-brand-primary/30 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-purple-600/5 blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className={`${isGeorgian ? 'text-2xl md:text-4xl leading-[1.4]' : 'text-3xl md:text-5xl'} font-bold mb-6 text-white`}>
                  {t('process.cta.title')}
                </h2>
                <p className={`${isGeorgian ? 'text-lg leading-[2]' : 'text-xl'} text-gray-300 mb-10 max-w-2xl mx-auto`}>
                  {t('process.cta.description')}
                </p>
                <a
                  href="/#contact"
                  className="inline-block bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-hover hover:to-purple-700 text-white font-bold py-5 px-12 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-brand-primary/30 hover:shadow-brand-primary/50 animate-pulse-glow"
                >
                  {t('process.cta.button')}
                </a>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Process;
