import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight, Instagram, Linkedin, Menu, X } from 'lucide-react';

type SocialLinkProps = { label: string; href: string };

const socialLinks: SocialLinkProps[] = [
  { label: 'Instagram', href: 'https://instagram.com/abelisaacabraham' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/alexmorgan' },
  { label: 'Are.na', href: 'https://www.are.na/alex-morgan' },
];

const projects = [
  { number: '01', title: 'The New Familiar', type: 'Brand strategy · 2024', description: 'A cultural platform for people making the future feel more human.', color: 'bg-[#c75d3c]' },
  { number: '02', title: 'Common Ground', type: 'Editorial direction · 2023', description: 'A print journal about the places, rituals and ideas that hold us together.', color: 'bg-[#aaad51]' },
  { number: '03', title: 'Soft Power', type: 'Creative direction · 2022', description: 'A visual identity for a new kind of leadership conference.', color: 'bg-[#80627a]' },
];

const moments = [
  { image: '/abel-moment-horse-01.jpg', label: '01 / A moment worth keeping', className: 'md:col-span-7' },
  { image: '/abel-moment-horse-02.jpg', label: '02 / Out of the ordinary', className: 'md:col-span-5 md:pt-20' },
  { image: '/abel-moment-horse-03.jpg', label: '03 / Take the long way', className: 'md:col-span-5' },
  { image: '/abel-moment-horse-04.jpg', label: '04 / Stay curious', className: 'md:col-span-7 md:pt-20' },
  { image: '/abel-isaac-abraham-water.jpg', label: '05 / A day on the water', className: 'md:col-span-12', aspect: 'aspect-[16/8]' },
];

function Reveal({ children, className = '', delay = '' }: { children: ReactNode; className?: string; delay?: string }) {
  return <div className={`reveal ${delay} ${className}`}>{children}</div>;
}

function SocialIcon({ label }: { label: string }) {
  if (label === 'Instagram') return <Instagram size={15} strokeWidth={1.7} aria-hidden="true" />;
  if (label === 'LinkedIn') return <Linkedin size={15} strokeWidth={1.7} aria-hidden="true" />;
  return <span className="font-mono-brand text-[11px]" aria-hidden="true">A/</span>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell noise min-h-[100dvh] bg-background">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-foreground/10 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 md:px-10">
          <a href="#top" onClick={closeMenu} className="group flex items-center gap-3" data-testid="link-logo">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">AM</span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[.22em] text-foreground sm:block">Abel Isaac Abraham</span>
          </a>
          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[72px] flex-col gap-5 border-b border-foreground/10 bg-background px-5 py-6 md:static md:flex md:flex-row md:items-center md:gap-9 md:border-0 md:bg-transparent md:p-0`} aria-label="Primary">
            {['About', 'Moments', 'Work', 'Writing', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="text-[11px] font-semibold uppercase tracking-[.2em] text-muted-foreground transition-colors hover:text-secondary" data-testid={`link-nav-${item.toLowerCase()}`}>{item}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@alexmorgan.studio" className="hidden items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[.17em] transition-colors hover:border-secondary hover:bg-secondary hover:text-secondary-foreground sm:flex" data-testid="link-header-contact">Let's talk <ArrowUpRight size={13} /></a>
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="inline-flex h-10 w-10 items-center justify-center md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-[1320px] gap-14 px-5 pb-24 pt-36 md:grid-cols-[1.1fr_.9fr] md:items-end md:px-10 md:pb-36 md:pt-48" aria-labelledby="hero-heading">
          <Reveal className="relative z-10">
            <p className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.28em] text-secondary"><span className="h-px w-9 bg-secondary" /> 10th grade student</p>
            <h1 id="hero-heading" className="max-w-[780px] font-display text-[clamp(4.6rem,11vw,10.7rem)] leading-[.78] tracking-[-.045em] text-primary">
              Ideas with<br /><em className="text-secondary">a pulse.</em>
            </h1>
            <div className="mt-12 flex max-w-[490px] items-start gap-4">
              <span className="mt-2 font-mono-brand text-[10px] text-muted-foreground">01 / 04</span>
              <p className="text-[15px] leading-7 text-muted-foreground">Abel Isaac Abraham is a 14-year-old boy studying in 10th grade and living a normal life filled with school, family, friends and everyday moments.</p>
            </div>
            <a href="#about" className="arrow-link mt-12 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-primary" data-testid="link-hero-about">Get to know me <ArrowDownRight size={17} strokeWidth={1.5} /></a>
          </Reveal>
          <Reveal className="relative mx-auto w-full max-w-[480px] md:mb-8 md:ml-auto" delay="reveal-delay-2">
            <div className="portrait-frame relative aspect-[4/5] overflow-hidden bg-[#6d3149]">
              <img src="/abel-isaac-abraham-water.jpg" alt="A family moment on the water" className="h-full w-full object-cover object-center" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-[#f4efe7]">
                <span className="font-mono-brand text-[10px] uppercase tracking-[.17em]">A personal moment</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f4efe7]/50"><ArrowDownRight size={18} /></span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-5 hidden h-24 w-24 items-center justify-center rounded-full bg-accent text-center text-[9px] font-bold uppercase leading-3 tracking-[.12em] text-accent-foreground sm:flex">Curious<br />by nature</div>
          </Reveal>
        </section>

        <div className="overflow-hidden border-y border-primary/10 bg-secondary py-3 text-secondary-foreground">
          <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, index) => <div key={index} className="flex items-center gap-8"><span className="font-display text-2xl italic">Strategy with soul</span><span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" /><span className="font-mono-brand text-[10px] uppercase tracking-[.22em]">Available for select collaborations</span><span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" /></div>)}
          </div>
        </div>

        <section id="about" className="mx-auto grid max-w-[1320px] gap-14 px-5 py-24 md:grid-cols-[.72fr_1.28fr] md:gap-24 md:px-10 md:py-36">
          <Reveal>
            <p className="font-mono-brand text-[10px] uppercase tracking-[.2em] text-secondary">02 / About</p>
            <h2 className="mt-6 max-w-[300px] font-display text-5xl leading-[.92] tracking-[-.03em] md:text-6xl">Just learning, living and growing.</h2>
          </Reveal>
          <Reveal className="max-w-[720px]" delay="reveal-delay-1">
            <p className="font-display text-4xl leading-[1.02] tracking-[-.025em] text-primary md:text-6xl">I’m Abel Isaac Abraham, a 14-year-old boy studying in 10th grade and living a normal life. I’m learning, exploring new interests and enjoying each day as it comes.</p>
            <div className="mt-12 grid gap-8 border-t border-primary/15 pt-8 sm:grid-cols-2">
              <p className="text-sm leading-7 text-muted-foreground">School, family, friends and the small adventures in between shape my everyday world.</p>
              <p className="text-sm leading-7 text-muted-foreground">I’m still figuring out what I want to do next — for now, I’m focused on learning, staying curious and being myself.</p>
            </div>
          </Reveal>
        </section>

        <section id="moments" className="bg-[#e3dbc9] px-5 py-24 md:px-10 md:py-36" aria-labelledby="moments-heading">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="font-mono-brand text-[10px] uppercase tracking-[.2em] text-secondary">03 / Personal moments</p>
                <h2 id="moments-heading" className="mt-5 max-w-[700px] font-display text-6xl leading-[.86] tracking-[-.04em] md:text-8xl">A little life<br /><em className="text-secondary">in frames.</em></h2>
              </div>
              <p className="max-w-[260px] text-sm leading-6 text-muted-foreground">The places, people and unexpected detours that make the work worth doing.</p>
            </Reveal>
            <div className="mt-16 grid gap-x-6 gap-y-12 md:grid-cols-12 md:gap-y-20">
              {moments.map((moment, index) => (
                <Reveal key={moment.image} className={moment.className} delay={`reveal-delay-${(index % 3) + 1}`}>
                  <figure>
                    <div className={`group relative ${moment.aspect ?? 'aspect-[4/5]'} overflow-hidden border border-primary/15 bg-primary/10 p-2`}>
                      <div className="h-full w-full overflow-hidden">
                      <img src={moment.image} alt={`Personal moment ${index + 1}`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                      <div className="pointer-events-none absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                    </div>
                    <figcaption className="mt-4 font-mono-brand text-[10px] uppercase tracking-[.18em] text-secondary">{moment.label}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-36" aria-labelledby="work-heading">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="flex flex-wrap items-end justify-between gap-8">
              <div><p className="font-mono-brand text-[10px] uppercase tracking-[.2em] text-accent">03 / Selected work</p><h2 id="work-heading" className="mt-5 font-display text-6xl leading-[.85] tracking-[-.04em] md:text-8xl">A few things<br /><em className="text-secondary">I've made.</em></h2></div>
              <p className="max-w-[220px] text-sm leading-6 text-primary-foreground/60">A small edit of collaborations, identities and cultural projects.</p>
            </Reveal>
            <div className="mt-20">
              {projects.map((project, index) => (
                <Reveal key={project.number} delay={`reveal-delay-${(index % 3) + 1}`}>
                  <a href={`#project-${project.number}`} className="project-row group grid gap-6 border-t border-primary-foreground/20 py-8 md:grid-cols-[.15fr_1fr_.8fr_auto] md:items-center md:py-10" data-testid={`link-project-${project.number}`}>
                    <span className="font-mono-brand text-[11px] text-accent">{project.number}</span>
                    <div className="flex items-center gap-4"><span className={`h-3 w-3 rounded-full ${project.color}`} /><h3 className="font-display text-4xl leading-none md:text-5xl">{project.title}</h3></div>
                    <div><p className="font-mono-brand text-[10px] uppercase tracking-[.16em] text-primary-foreground/50">{project.type}</p><p className="mt-2 max-w-[300px] text-sm leading-6 text-primary-foreground/70">{project.description}</p></div>
                    <ArrowUpRight className="text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={23} strokeWidth={1.2} />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="writing" className="mx-auto grid max-w-[1320px] gap-14 px-5 py-24 md:grid-cols-[.8fr_1.2fr] md:gap-24 md:px-10 md:py-36">
          <Reveal>
            <p className="font-mono-brand text-[10px] uppercase tracking-[.2em] text-secondary">05 / From the notebook</p>
            <h2 className="mt-6 max-w-[300px] font-display text-6xl leading-[.86] tracking-[-.04em]">Notes on<br /><em>noticing.</em></h2>
            <a href="https://www.are.na/alex-morgan" className="arrow-link mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em]" data-testid="link-notebook">Follow the thread <ArrowUpRight size={16} /></a>
          </Reveal>
          <div className="divide-y divide-primary/15 border-y border-primary/15">
            {[
              ['On making a point of view useful', 'Essay · 6 min read', 'A point of view is only valuable when it changes what you do next.'],
              ['The quiet power of a good edit', 'Field note · 3 min read', 'What to keep, what to cut, and why restraint is not a lack of ambition.'],
              ['Questions I carry into every room', 'Personal · 4 min read', 'A short list of prompts for paying better attention.'],
            ].map(([title, meta, description], index) => (
              <Reveal key={title} delay={`reveal-delay-${index + 1}`}>
                <a href={`https://www.are.na/alex-morgan`} className="group block py-7" data-testid={`link-note-${index + 1}`}>
                  <div className="flex items-center justify-between gap-5"><span className="font-mono-brand text-[10px] text-secondary">0{index + 1}</span><span className="flex-1 font-display text-3xl leading-none transition-colors group-hover:text-secondary md:text-4xl">{title}</span><ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
                  <div className="ml-9 mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground"><span>{meta}</span><span className="hidden sm:block">—</span><span>{description}</span></div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-accent px-5 py-24 md:px-10 md:py-36" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-[1320px]">
            <Reveal><p className="font-mono-brand text-[10px] uppercase tracking-[.2em] text-accent-foreground/70">06 / Contact</p><h2 id="contact-heading" className="mt-8 max-w-[900px] font-display text-[clamp(4rem,10vw,9rem)] leading-[.78] tracking-[-.05em] text-accent-foreground">Have a good<br /><em>question?</em></h2></Reveal>
            <Reveal className="mt-16 flex flex-col justify-between gap-12 border-t border-accent-foreground/20 pt-7 md:flex-row md:items-end" delay="reveal-delay-1">
              <div><p className="max-w-[350px] text-base leading-7 text-accent-foreground/75">For collaborations, speaking, or a thoughtful hello. The best way in is a clear email.</p><a href="mailto:hello@alexmorgan.studio" className="mt-6 inline-flex items-center gap-3 border-b border-accent-foreground pb-2 font-mono-brand text-sm text-accent-foreground transition-colors hover:border-secondary hover:text-secondary" data-testid="link-email">hello@alexmorgan.studio <ArrowUpRight size={16} /></a></div>
              <div className="flex flex-wrap gap-x-7 gap-y-4">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.16em] text-accent-foreground transition-colors hover:text-secondary" data-testid={`link-social-${social.label.toLowerCase().replace('.', '')}`}><SocialIcon label={social.label} />{social.label}</a>)}</div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-primary px-5 py-7 text-primary-foreground md:px-10">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-4 text-[10px] uppercase tracking-[.18em] text-primary-foreground/55 sm:flex-row">
          <span>© {new Date().getFullYear()} Abel Isaac Abraham</span><span>Built for the curious</span><a href="#top" className="transition-colors hover:text-accent" data-testid="link-back-to-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;