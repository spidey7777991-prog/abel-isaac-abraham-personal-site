import { useEffect, type ReactNode } from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';

const instagramUrl = 'https://www.instagram.com/abelisaacabraham/';

const moments = [
  { image: '/abel-moment-horse-01.jpg', alt: 'Abel riding a horse on the beach', layout: 'moment-tall' },
  { image: '/abel-moment-horse-02.jpg', alt: 'Abel on horseback at the beach at night', layout: 'moment-small' },
  { image: '/abel-moment-horse-03.jpg', alt: 'Abel enjoying a horse ride', layout: 'moment-small' },
  { image: '/abel-moment-horse-04.jpg', alt: 'Abel with a horse on the beach', layout: 'moment-tall' },
  { image: '/abel-isaac-abraham-water.jpg', alt: 'Abel out on the water with his family', layout: 'moment-wide' },
];

function Reveal({ children, className = '', delay = '' }: { children: ReactNode; className?: string; delay?: string }) {
  return <div className={`reveal ${delay} ${className}`}>{children}</div>;
}

function Home() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell noise min-h-[100dvh] bg-background">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="brand-belt" aria-label="Abel Isaac Abraham home" data-testid="link-logo">
            <span className="brand-spinner" aria-hidden="true"><span>AIA</span></span>
            <span className="brand-window" aria-hidden="true">
              <span className="brand-track">
                {Array.from({ length: 2 }, (_, index) => (
                  <span className="brand-unit" key={index}>Abel Isaac Abraham<span className="brand-separator" /></span>
                ))}
              </span>
            </span>
          </a>
          <nav className="flex items-center gap-5 sm:gap-9" aria-label="Primary">
            <a href="#about" className="nav-link nav-link-secondary" data-testid="link-nav-about">About</a>
            <a href="#moments" className="nav-link nav-link-secondary" data-testid="link-nav-moments">Moments</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="nav-link flex items-center gap-2" data-testid="link-nav-instagram">Instagram <ArrowUpRight size={13} /></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-layout mx-auto grid min-h-[760px] max-w-[1440px] items-center gap-10 px-5 pb-16 pt-28 md:min-h-[850px] md:grid-cols-[1.1fr_.9fr] md:px-10 md:pb-24 md:pt-28" aria-labelledby="hero-heading">
          <Reveal className="relative z-10">
            <p className="mb-7 flex items-center gap-3 font-mono-brand text-[10px] uppercase tracking-[.19em] text-secondary"><span className="h-2 w-2 rounded-full bg-accent" /> Just me</p>
            <h1 id="hero-heading" className="name-drift max-w-[850px] font-display text-[clamp(2.8rem,6.8vw,6.2rem)] font-extrabold leading-[.86] tracking-[-.075em] text-primary">
              Abel Isaac<br /><span className="hero-lastname">Abraham</span>
            </h1>
            <div className="mt-9 flex max-w-[470px] items-start gap-4 md:mt-12">
              <span className="mt-1 font-mono-brand text-[10px] text-secondary">01 /</span>
              <p className="text-[15px] leading-7 text-muted-foreground">Most days are school, family, friends, and whatever little adventure comes along.</p>
            </div>
          </Reveal>
          <Reveal className="hero-photo-wrap relative mx-auto w-full max-w-[520px] md:ml-auto" delay="reveal-delay-2">
            <div className="hero-photo overflow-hidden">
              <img src="/abel-isaac-abraham-water.jpg" alt="Abel out on the water with his family" className="h-full w-full object-cover object-[58%_center]" data-testid="img-hero-family" />
            </div>
          </Reveal>
        </section>

        <div className="name-belt overflow-hidden border-y border-primary/15 bg-secondary py-[15px] text-secondary-foreground" aria-label="Abel Isaac Abraham">
          <div className="marquee-track flex w-max items-center">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="belt-unit flex items-center gap-7 pr-7" aria-hidden={index > 0}>
                <span className="belt-name font-display">Abel Isaac Abraham</span>
                <span className="belt-mark" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        <section id="about" className="about-section mx-auto grid max-w-[1440px] gap-10 px-5 py-24 md:grid-cols-[.72fr_1.28fr] md:gap-24 md:px-10 md:py-36">
          <Reveal>
            <p className="section-kicker"><span>01</span> About</p>
            <h2 className="mt-7 max-w-[360px] font-display text-5xl font-bold leading-[.94] tracking-[-.065em] md:text-6xl">Still figuring it out. That’s the fun part.</h2>
          </Reveal>
          <Reveal className="max-w-[740px] md:pt-8" delay="reveal-delay-1">
            <p className="about-lead font-display text-[clamp(2rem,4.2vw,4rem)] font-semibold leading-[1.04] tracking-[-.055em] text-primary">School, family, friends and everyday moments. I’m learning, exploring new interests and enjoying each day as it comes.</p>
            <div className="mt-10 flex items-center gap-4 border-t border-primary/15 pt-5">
              <span className="about-dot" aria-hidden="true" />
              <p className="font-mono-brand text-[10px] uppercase tracking-[.15em] text-muted-foreground">Just me, as I am</p>
            </div>
          </Reveal>
        </section>

        <section id="moments" className="moments-section px-5 py-20 md:px-10 md:py-32" aria-labelledby="moments-heading">
          <div className="mx-auto max-w-[1440px]">
            <Reveal className="moments-heading flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="section-kicker"><span>02</span> Little memories</p>
                <h2 id="moments-heading" className="mt-6 font-display text-[clamp(3.6rem,9vw,8rem)] font-extrabold leading-[.8] tracking-[-.08em]">Out there,<br /><span>doing stuff.</span></h2>
              </div>
              <p className="max-w-[250px] pb-1 text-sm leading-6 text-muted-foreground">A few days I wanted to keep. No big story. Just good memories.</p>
            </Reveal>
            <div className="moments-grid mt-14 md:mt-20">
              {moments.map((moment, index) => (
                <Reveal key={moment.image} className={`photo-cell ${moment.layout}`} delay={`reveal-delay-${(index % 3) + 1}`}>
                  <figure className="photo-card h-full overflow-hidden">
                    <img src={moment.image} alt={moment.alt} className="h-full w-full object-cover" loading="lazy" data-testid={`img-moment-${index + 1}`} />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="hello-section px-5 py-20 md:px-10 md:py-28" aria-labelledby="hello-heading">
          <Reveal className="mx-auto flex max-w-[1440px] flex-col gap-9 border-t border-primary/20 pt-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker"><span>03</span> Around the internet</p>
              <h2 id="hello-heading" className="mt-6 font-display text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[.84] tracking-[-.075em]">Find me<br />on Instagram.</h2>
            </div>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="social-link inline-flex w-fit items-center gap-3 rounded-full border border-primary/25 px-6 py-4 font-mono-brand text-[11px] uppercase tracking-[.12em] transition-colors hover:bg-primary hover:text-primary-foreground" data-testid="link-instagram">
              <Instagram size={17} strokeWidth={1.7} /> @abelisaacabraham <ArrowUpRight size={15} />
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer px-5 py-6 md:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 font-mono-brand text-[9px] uppercase tracking-[.15em] text-primary-foreground/70 sm:flex-row">
          <span>© {new Date().getFullYear()} Abel Isaac Abraham</span>
          <a href="#top" className="transition-colors hover:text-accent" data-testid="link-back-to-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;
