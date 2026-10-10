'use client';

import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Check,
    ChevronLeft,
    ChevronRight,
    Code2,
    Instagram,
    Linkedin,
    Mail,
    Menu,
    Moon,
    Sun,
    X,
} from 'lucide-react';
import sendmail from '@/actions/sendEmail';
import { experiences, skills, testimonials } from '@/constants';
import { portfolioCategories } from '@/constants/projects';
import { ProjectDialog } from '@/components/sections/ProjectDialog';

type Project = (typeof portfolioCategories)[number]['projects'][number];

const featuredArt = portfolioCategories[0].projects.slice(0, 3);

const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
];

export default function PortfolioExperience() {
    const [activeCategory, setActiveCategory] = useState(portfolioCategories[0].id);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [testimonialDirection, setTestimonialDirection] = useState<'next' | 'previous'>('next');
    const [testimonialPaused, setTestimonialPaused] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [themeReady, setThemeReady] = useState(false);
    const themeTransitionRunning = useRef(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [sendError, setSendError] = useState(false);

    useEffect(() => {
        setDarkMode(window.localStorage.getItem('sachin-portfolio-theme') === 'dark');
        setThemeReady(true);
    }, []);

    useEffect(() => {
        if (!themeReady) return;
        document.documentElement.classList.toggle('sachin-theme-dark', darkMode);
        window.localStorage.setItem('sachin-portfolio-theme', darkMode ? 'dark' : 'light');
        return () => document.documentElement.classList.remove('sachin-theme-dark');
    }, [darkMode, themeReady]);

    useEffect(() => {
        if (testimonialPaused || testimonials.length < 2) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const timer = window.setInterval(() => {
            setTestimonialDirection('next');
            setActiveTestimonial((current) => (current + 1) % testimonials.length);
        }, 5500);

        return () => window.clearInterval(timer);
    }, [activeTestimonial, testimonialPaused]);

    const toggleTheme = async (event: React.MouseEvent<HTMLButtonElement>) => {
        if (themeTransitionRunning.current) return;

        const nextDarkMode = !darkMode;
        const applyTheme = () => {
            flushSync(() => setDarkMode(nextDarkMode));
            document.documentElement.classList.toggle('sachin-theme-dark', nextDarkMode);
            window.localStorage.setItem('sachin-portfolio-theme', nextDarkMode ? 'dark' : 'light');
        };

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            applyTheme();
            return;
        }

        themeTransitionRunning.current = true;
        const slideLayer = document.createElement('div');
        slideLayer.setAttribute('aria-hidden', 'true');
        slideLayer.className = 'theme-slide-layer';
        const colorCurtain = document.createElement('div');
        colorCurtain.className = 'theme-slide-curtain';
        colorCurtain.style.background = `linear-gradient(110deg, #EF4A38 0 34%, #FFE600 34% 68%, ${nextDarkMode ? '#174C46' : '#F8F5EA'} 68% 100%)`;
        slideLayer.appendChild(colorCurtain);
        document.body.appendChild(slideLayer);
        document.documentElement.classList.add('theme-switching');

        try {
            await colorCurtain.animate(
                [{ transform: 'translateX(-100%)' }, { transform: 'translateX(0)' }],
                { duration: 430, easing: 'cubic-bezier(.7, 0, .2, 1)', fill: 'forwards' },
            ).finished;
            applyTheme();
            await colorCurtain.animate(
                [{ transform: 'translateX(0)' }, { transform: 'translateX(100%)' }],
                { duration: 520, easing: 'cubic-bezier(.7, 0, .2, 1)', fill: 'forwards' },
            ).finished;
        } catch {
            applyTheme();
        } finally {
            slideLayer.remove();
            document.documentElement.classList.remove('theme-switching');
            themeTransitionRunning.current = false;
        }
    };

    const activeProjects = portfolioCategories.find(
        (category) => category.id === activeCategory,
    )?.projects ?? [];
    const currentTestimonial = testimonials[activeTestimonial];

    const showTestimonial = (index: number, direction: 'next' | 'previous' = index >= activeTestimonial ? 'next' : 'previous') => {
        setTestimonialDirection(direction);
        setActiveTestimonial((index + testimonials.length) % testimonials.length);
    };

    const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSending(true);
        setSent(false);
        setSendError(false);

        try {
            await sendmail(email, message);
            setEmail('');
            setMessage('');
            setSent(true);
        } catch {
            setSendError(true);
        } finally {
            setSending(false);
        }
    };

    return (
        <div className={`studio-site${darkMode ? ' is-dark' : ''}`}>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <header className="studio-header">
                <a className="studio-wordmark" href="#home" aria-label="Sachin Yenkure, home">
                    <span>SACHIN YENKURE<span className="wordmark-period">.</span></span>
                </a>

                <button
                    className="studio-menu-toggle"
                    type="button"
                    aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                <nav className={`studio-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                            {item.label}
                        </a>
                    ))}

                </nav>
                <button
                    className="theme-toggle"
                    type="button"
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    aria-pressed={darkMode}
                    onClick={toggleTheme}
                >
                    <span className="theme-toggle-icon" aria-hidden="true">
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </span>
                </button>
            </header>

            <main id="main-content" tabIndex={-1}>
                <section className="studio-hero" id="home" aria-labelledby="hero-title">
                    <div className="hero-copy">
                        <h1 id="hero-title">
                            <span className="hero-title-line">Sachin</span>
                            <span className="hero-title-line">
                                <em><span className="title-color-coral">Yen</span><span className="title-color-blue">ku</span><span className="title-color-green">re.</span></em>
                            </span>
                        </h1>
                        <p className="hero-role">VISUAL DESIGNER <span>·</span> ART DIRECTION <span>·</span> DIGITAL</p>
                        <p className="hero-description">
                            I create visual identities, campaign artwork, and social graphics that give good ideas a sharper point of view.
                        </p>
                        <div className="hero-actions">
                            <a className="button-primary" href="#work">Explore selected work <ArrowRight size={17} /></a>
                            <a className="text-link" href="#about">About the practice <ArrowDown size={15} /></a>
                        </div>
                    </div>

                    <div className="hero-artwork" role="group" aria-label="Selected graphic design work">
                        <div className="artwork-color-marks" aria-hidden="true">
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        {featuredArt.slice(0, 3).map((project, index) => (
                            <button
                                key={`${project.id}-${index}`}
                                className={`hero-art hero-art-${index + 1}`}
                                type="button"
                                aria-label={`View ${project.title}`}
                                onClick={() => setSelectedProject(project)}
                            >
                                <Image src={project.image} alt={project.title} fill priority={index === 0} sizes="(max-width: 760px) 34vw, 20vw" />
                            </button>
                        ))}
                    </div>
                </section>

                <section className="intro-band" id="about" aria-labelledby="about-title">
                    <div className="intro-content">
                        <p className="eyebrow">GOOD DESIGN GETS FELT FIRST</p>
                        <h2 id="about-title">Thoughtful visuals.<br /><em>Lasting impressions.</em></h2>
                        <div className="intro-bottom">
                            <p>
                                I bring stories to life through clear ideas, considered typography,
                                and vibrant imagery. From festive campaigns to brand communication,
                                every piece is made to connect with the people it&apos;s for.
                            </p>
                            <div className="intro-numbers">
                                <div><strong>30<span>+</span></strong><small>social designs</small></div>
                                <div><strong>05</strong><small>tools in my kit</small></div>
                                <div><strong>100<span>%</span></strong><small>made with intent</small></div>
                            </div>
                        </div>
                    </div>
                    <div className="intro-side-note">Curiosity in.<br />Good work out.</div>
                </section>

                <section className="work-section" id="work" aria-labelledby="work-title">
                    <div className="section-heading">
                        <div>
                            <h2 id="work-title">Ideas made<br /><em>visible.</em></h2>
                        </div>
                        <p className="heading-note">Campaigns, identities, and playful compositions.<br />A small window into how I see the world.</p>
                    </div>

                    <div className="work-filters" role="group" aria-label="Filter projects by category">
                        {portfolioCategories.map((category) => (
                            <button
                                key={category.id}
                                type="button"
                                aria-pressed={activeCategory === category.id}
                                className={activeCategory === category.id ? 'is-active' : ''}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.name.replace('color', 'colour')}
                            </button>
                        ))}
                    </div>

                    <div className="work-grid" role="group" aria-label={`${portfolioCategories.find((category) => category.id === activeCategory)?.name} projects`}>
                        {activeProjects.map((project, index) => (
                            <button
                                className={`work-card${index === 0 ? ' work-card-featured' : ''}`}
                                key={`${activeCategory}-${project.id}-${index}`}
                                type="button"
                                onClick={() => setSelectedProject(project)}
                            >
                                <span className="work-image">
                                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                                    <span className="work-open" aria-hidden="true"><ArrowUpRight size={20} /></span>
                                </span>
                                <span className="work-meta"><span>{project.title}</span></span>
                            </button>
                        ))}
                    </div>
                    <p className="sr-only" aria-live="polite" aria-atomic="true">
                        Showing {activeProjects.length} {portfolioCategories.find((category) => category.id === activeCategory)?.name} projects.
                    </p>
                </section>

                <section className="toolkit-section" aria-labelledby="toolkit-title">
                    <div className="toolkit-intro">
                        <p className="eyebrow">IDEAS, THEN THE RIGHT TOOLS</p>
                        <h2 id="toolkit-title">Made by hand.<br /><em>Finished with craft.</em></h2>
                    </div>
                    <div className="toolkit-grid">
                        {skills.map((skill) => (
                            <article className="toolkit-tile" key={skill.name}>
                                <h3>{skill.name}</h3>
                                <p>{skill.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="journey-section" id="journey" aria-labelledby="journey-title">
                    <div className="section-heading journey-heading">
                        <div>
                            <h2 id="journey-title">The journey<br /><em>so far.</em></h2>
                        </div>
                        <p className="heading-note">Learning the craft, building with people,<br />and getting a little better each time.</p>
                    </div>
                    <div className="journey-list">
                        {experiences.map((experience) => (
                            <article className="journey-entry" key={`${experience.company}-${experience.title}`}>
                                <div className="journey-role">
                                    <p>{experience.period} <span>·</span> {experience.duration}</p>
                                    <h3>{experience.title}</h3>
                                </div>
                                <div className="journey-detail">
                                    <p className="journey-company">{experience.company} <span>—</span> {experience.location}</p>
                                    <p>{experience.description}</p>
                                    <div className="journey-skills">{experience.skills.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}</div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    className="quote-section"
                    aria-labelledby="testimonial-title"
                    onMouseEnter={() => setTestimonialPaused(true)}
                    onMouseLeave={() => setTestimonialPaused(false)}
                    onFocusCapture={() => setTestimonialPaused(true)}
                    onBlurCapture={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                            setTestimonialPaused(false);
                        }
                    }}
                >
                    <div className="quote-decoration">“</div>
                    <h2 className="eyebrow" id="testimonial-title">KIND WORDS FROM THE STUDIO</h2>
                    <div
                        className={`testimonial-slide slide-from-${testimonialDirection}`}
                        key={`${activeTestimonial}-${currentTestimonial.name}`}
                    >
                        <blockquote>{currentTestimonial.content}</blockquote>
                        <div className="quote-credit">
                            <Image src={currentTestimonial.avatar} alt={currentTestimonial.name} width={48} height={48} />
                            <span><strong>{currentTestimonial.name}</strong><small>{currentTestimonial.role} · {currentTestimonial.company}</small></span>
                        </div>
                    </div>
                    <div className="testimonial-controls" role="group" aria-label="Testimonial navigation">
                        <button
                            type="button"
                            className="testimonial-arrow"
                            aria-label="Previous testimonial"
                            onClick={() => showTestimonial(activeTestimonial - 1, 'previous')}
                        >
                            <ChevronLeft size={19} />
                        </button>
                        <div className="testimonial-dots" role="group" aria-label="Choose testimonial">
                            {testimonials.map((testimonial, index) => (
                                <button
                                    key={`${testimonial.name}-${index}`}
                                    type="button"
                                    className={`testimonial-dot${index === activeTestimonial ? ' is-active' : ''}`}
                                    aria-label={`Show testimonial from ${testimonial.name}`}
                                    aria-pressed={index === activeTestimonial}
                                    onClick={() => showTestimonial(index)}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            className="testimonial-arrow"
                            aria-label="Next testimonial"
                            onClick={() => showTestimonial(activeTestimonial + 1, 'next')}
                        >
                            <ChevronRight size={19} />
                        </button>
                    </div>
                    <p className="sr-only" aria-live="polite" aria-atomic="true">
                        Testimonial {activeTestimonial + 1} of {testimonials.length} from {currentTestimonial.name}.
                    </p>
                </section>

                <section className="contact-section" id="contact" aria-labelledby="contact-title">
                    <div className="contact-copy">
                        <h2 id="contact-title">Have a good one?<br /><em>Let&apos;s make it real.</em></h2>
                        <p>Have a project, a brand that needs a fresh look, or just want to talk design? I&apos;d love to hear about it.</p>
                        <a className="contact-email" href="mailto:sachinyenkure20@gmail.com">sachinyenkure20@gmail.com <ArrowUpRight size={17} /></a>
                        <div className="contact-socials">
                            <Link href="https://www.instagram.com/sachin_yenkure__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></Link>
                            <Link href="https://www.linkedin.com/in/sachin-yenkure/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></Link>
                            <Link href="mailto:sachinyenkure20@gmail.com" aria-label="Email"><Mail size={18} /></Link>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleContactSubmit} aria-busy={sending}>
                        <label htmlFor="contact-email">YOUR EMAIL</label>
                        <input id="contact-email" name="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required />
                        <label htmlFor="contact-message">WHAT ARE YOU THINKING?</label>
                        <textarea id="contact-message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="A little about your project..." rows={4} required />
                        <button className="button-light" type="submit" disabled={sending}>{sending ? 'Sending...' : sent ? 'Message sent' : 'Send a message'} {sent ? <Check size={16} /> : <ArrowRight size={16} />}</button>
                        {sendError && <p className="form-feedback" role="alert">Couldn&apos;t send that just now. Please email me directly.</p>}
                        {sent && <p className="form-feedback" role="status">Thanks for reaching out. I&apos;ll be in touch soon.</p>}
                    </form>
                </section>
            </main>

            <footer className="studio-footer">
                <a className="footer-mark" href="#home" aria-label="Sachin Yenkure, back to top">SY<span>.</span></a>
                <span>© {new Date().getFullYear()} Sachin Yenkure · Made with intention.</span>
                <a href="#home">BACK TO TOP ↑</a>
            </footer>

            <ProjectDialog
                open={Boolean(selectedProject)}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </div>
    );
}