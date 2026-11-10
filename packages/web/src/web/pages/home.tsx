import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Plus,
  Trophy,
  Code2,
  Wrench,
  Users,
  Instagram,
  Youtube,
  Mail,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { galleryItems, galleryFilters, gameFields } from "../lib/gallery";

const people = ["Aiden", "Jared", "Mario", "Nicholas", "Peter", "Vivan", "Willy"];
const links = [
  { name: "The team", id: "team" },
  { name: "Our season", id: "season" },
  { name: "Gallery", id: "gallery" },
  { name: "Support us", id: "support" },
];
type Popup =
  | { type: "member"; index: number }
  | { type: "gallery"; index: number }
  | { type: "notice"; title: string; text: string };
function Geometry({ className = "" }: { className?: string }) {
  return (
    <div className={`geometry ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </div>
  );
}
export default function Home() {
  const [menu, setMenu] = useState(false);
  const [popup, setPopup] = useState<Popup | null>(null);
  const [galleryFilter, setGalleryFilter] = useState("All photos");
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (popup) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [popup]);
  useEffect(() => {
    const element = dialog.current;
    const closeBackdrop = (e: MouseEvent) => {
      if (e.target === element) setPopup(null);
    };
    element?.addEventListener("click", closeBackdrop);
    return () => element?.removeEventListener("click", closeBackdrop);
  }, []);
  const pending = (title: string, text: string) => setPopup({ type: "notice", title, text });
  const support = () =>
    pending(
      "A little support. A big impact.",
      "Online donations are not connected yet. The team’s verified donation link will appear here once provided. No payment is collected on this site.",
    );
  const contact = () =>
    pending(
      "Let’s build a connection.",
      "The team’s contact email has not been provided yet. This section is ready for recruitment, sponsorship, and community inquiries once the verified address is added.",
    );
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header id="top" className="header">
        <a href="#top" className="brand" aria-label="Totus Tuus home">
          <img src="/images/crest-cutout.png" alt="Totus Tuus crest" />
          <span>
            TOTUS TUUS<small>FIRST TECH CHALLENGE · 19168</small>
          </span>
        </a>
        <nav aria-label="Main navigation" className={menu ? "open" : ""}>
          {links.map((l) => (
            <a key={l.id} href={"#" + l.id} onClick={() => setMenu(false)}>
              {l.name}
            </a>
          ))}
          <button className="button light small" onClick={contact}>
            Let’s connect <ArrowUpRight size={15} />
          </button>
        </nav>
        <button
          className="menu-toggle"
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="dot" /> FIRST TECH CHALLENGE TEAM 19168
            </div>
            <h1>
              MORE THAN
              <br />A ROBOT.
              <br /> <span>A TEAM.</span>
            </h1>
            <p>
              We are Totus Tuus. Curious minds, hands-on builders, and a shared drive to turn big
              ideas into something real.
            </p>
            <a href="#team" className="button mint">
              Meet the team <ArrowUpRight size={19} />
            </a>
            <a className="text-link" href="#season">
              Explore our season <ArrowRight size={17} />
            </a>
          </div>
          <div className="hero-art">
            <div className="art-grid" />
            <span className="art-label">BUILT ON CURIOSITY. DRIVEN BY TEAMWORK.</span>
            <div className="frame f1" />
            <div className="frame f2" />
            <div className="frame f3" />
            <span className="giant-number" aria-hidden="true">
              19168
            </span>
            <img
              className="hero-crest"
              src="/images/crest-cutout.png"
              alt="Team 19168 Totus Tuus crest with engineering, tools, and coding symbols"
            />
            <Geometry className="hero-geometry" />
            <div className="art-bottom">
              <span>DESIGN. BUILD. BELIEVE.</span>
              <span>FTC / 19168 ↗</span>
            </div>
          </div>
          <div className="hero-foot">
            <span>SMALL TEAM. BIG POSSIBILITIES.</span>
            <a href="#about">
              Get to know us <span>↓</span>
            </a>
          </div>
        </section>
        <div className="ticker" aria-hidden="true">
          <span>ENGINEER WITH PURPOSE</span>
          <Plus />
          <span>BUILD TOGETHER</span>
          <Plus />
          <span>KEEP EXPLORING</span>
          <Plus />
          <span>ENGINEER WITH PURPOSE</span>
          <Plus />
        </div>
        <section id="about" className="about wrap section">
          <div className="section-index">01 / WHO WE ARE</div>
          <div className="about-content">
            <h2>
              WE BUILD ROBOTS.
              <br />
              <span>
                AND THE PEOPLE
                <br />
                BEHIND THEM.
              </span>
            </h2>
            <div className="about-details">
              <p>
                Totus Tuus brings together a team of builders, thinkers, and problem-solvers in
                FIRST Tech Challenge. Robotics is our starting point. Collaboration is what moves us
                forward.
              </p>
              <p>
                From a first sketch to a working mechanism, every challenge is a chance to learn,
                experiment, and make something better—together.
              </p>
              <a
                href="https://www.firstinspires.org/programs/ftc/"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                What is FIRST Tech Challenge? <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="stats">
            <div className="stat outline">
              <span>19168</span>
              <p>OUR TEAM NUMBER</p>
              <small>One identity. A shared ambition.</small>
            </div>
            <div className="stat filled">
              <span>7</span>
              <p>FACES BEHIND THE TEAM</p>
              <small>Meet the people making it happen.</small>
            </div>
            <div className="stat story">
              <Code2 size={28} />
              <h3>Ideas into action.</h3>
              <p>
                Design. Code. Test. Repeat.
                <br />
                The process is part of the adventure.
              </p>
            </div>
          </div>
          <Geometry className="about-geometry" />
        </section>
        <section id="team" className="wrap section team">
          <div className="section-top">
            <div>
              <div className="section-index">02 / OUR PEOPLE</div>
              <h2>
                DIFFERENT MINDS.
                <br />
                <span>ONE TEAM.</span>
              </h2>
            </div>
            <p>
              The faces behind Totus Tuus.
              <br />
              Get to know our team.
            </p>
          </div>
          <div className="people-grid">
            {people.map((name, i) => (
              <button
                className="person"
                key={name}
                onClick={() => setPopup({ type: "member", index: i })}
              >
                <div className="portrait">
                  <span className="portrait-index">{String(i + 1).padStart(2, "0")} / TT</span>
                  <img src={`/images/${name.toLowerCase()}.png`} alt={name} loading="lazy" />
                  <div className="portrait-arrow">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
                <div className="person-info">
                  <h3>{name}</h3>
                  <span>
                    View profile <Plus size={15} />
                  </span>
                </div>
                <p>Role & biography coming soon</p>
              </button>
            ))}
            <div className="join-panel">
              <Users size={32} />
              <h3>
                YOUR NEXT
                <br />
                CHALLENGE
                <br />
                STARTS HERE.
              </h3>
              <p>Interested in building with us?</p>
              <button className="text-link" onClick={contact}>
                Get in touch <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </section>
        <section id="season" className="season section">
          <div className="wrap season-grid">
            <div>
              <div className="section-index">03 / THE CURRENT CHALLENGE</div>
              <h2>
                A NEW SEASON.
                <br />
                <span>A NEW BUZZ.</span>
              </h2>
              <p>
                The 2026–2027 FIRST Tech Challenge season is BIOBUZZ™ presented by RTX, part of
                FIRST CANOPY™. Discover the challenge and the world of ideas it opens up.
              </p>
              <a
                className="button mint"
                href="https://www.firstinspires.org/programs/ftc/game-and-season"
                target="_blank"
                rel="noreferrer"
              >
                Explore BIOBUZZ <ArrowUpRight size={18} />
              </a>
              <div className="season-note">
                <span className="dot" /> EXPLORE OUR WORKSHOP & CAD PHOTOS BELOW
              </div>
            </div>
            <a
              href="https://www.firstinspires.org/programs/ftc/game-and-season"
              target="_blank"
              rel="noreferrer"
              className="season-art"
            >
              <span>2026–2027 / OFFICIAL SEASON</span>
              <img
                src="/images/biobuzz.png"
                alt="FIRST Tech Challenge BIOBUZZ presented by RTX"
                loading="lazy"
              />
              <span>
                BIG IDEAS START WITH A LITTLE CURIOSITY. <ArrowUpRight size={22} />
              </span>
            </a>
          </div>
          <div className="wrap build-spotlight">
            <button className="build-photo" onClick={() => setPopup({ type: "gallery", index: 1 })}>
              <img
                src="/images/workshop-01.jpg"
                alt="A robot and electronics on a workbench during a workshop session"
                loading="lazy"
              />
              <span>
                Inside the workshop <ArrowUpRight size={22} />
              </span>
            </button>
            <div>
              <div className="section-index">FROM THE SCREEN TO THE WORKBENCH</div>
              <h3>
                THIS IS WHERE
                <br />
                <span>IDEAS GET REAL.</span>
              </h3>
              <p>
                CAD on screen. Components on the table. A closer look at the hands-on work behind
                the build.
              </p>
              <a
                href="#gallery"
                className="text-link"
                onClick={() => setGalleryFilter("Workshop & CAD")}
              >
                See the build photos <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="wrap field-references">
            <div className="field-header">
              <h3>The playing field.</h3>
              <p>Current and past game references—not a record of team results.</p>
            </div>
            <div className="field-grid">
              {gameFields.map((index) => (
                <button
                  key={index}
                  className="field-card"
                  onClick={() => setPopup({ type: "gallery", index })}
                >
                  <img
                    src={galleryItems[index].src}
                    alt={galleryItems[index].title}
                    loading="lazy"
                  />
                  <span>
                    {galleryItems[index].title} <ArrowUpRight size={18} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
        <section id="gallery" className="wrap section gallery">
          <div className="section-top">
            <div>
              <div className="section-index">04 / THROUGH OUR LENS</div>
              <h2>
                THE PEOPLE.
                <br />
                THE <span className="orange">POSSIBILITIES.</span>
              </h2>
            </div>
            <div className="filters" aria-label="Gallery filters">
              {galleryFilters.map((f) => (
                <button
                  key={f}
                  className={f === galleryFilter ? "active" : ""}
                  aria-pressed={f === galleryFilter}
                  onClick={() => setGalleryFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="gallery-grid photo-gallery">
            {galleryItems
              .map((item, index) => ({ item, index }))
              .filter(
                ({ item }) => galleryFilter === "All photos" || item.category === galleryFilter,
              )
              .map(({ item, index }) => (
                <button
                  className={`gallery-image ${item.category === "Portraits" ? "portrait-photo" : item.category === "Team identity" ? "crest-tile" : "scene-photo"}`}
                  key={item.src}
                  onClick={() => setPopup({ type: "gallery", index })}
                >
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <span>
                    {item.title} <ArrowUpRight size={20} />
                  </span>
                </button>
              ))}
          </div>
          <p className="caption">
            Workshop moments, CAD exploration, and the people behind the build. Field diagrams and
            the sample robot are reference imagery.
          </p>
        </section>
        <section id="awards" className="wrap awards section">
          <div>
            <div className="section-index">05 / OUR JOURNEY</div>
            <h2>
              EVERY STEP
              <br />
              <span>IS EARNED.</span>
            </h2>
            <p>Celebrating the work, the learning, and the moments that bring us together.</p>
          </div>
          <div className="award-placeholder">
            <Trophy size={35} />
            <h3>Our story is still being added.</h3>
            <p>
              Verified awards, event results, and season milestones will live here. Details coming
              soon.
            </p>
            <a
              href="https://ftc-events.firstinspires.org/"
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Explore official FTC results <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section id="sponsors" className="sponsors section">
          <div className="wrap">
            <div className="section-top">
              <div>
                <div className="section-index">06 / BUILD WITH US</div>
                <h2>
                  BIG IDEAS NEED
                  <br />
                  <span>GREAT SUPPORT.</span>
                </h2>
              </div>
              <p>
                Help the next generation of builders
                <br />
                take their next step.
              </p>
            </div>
            <div className="sponsor-row">
              <div className="sponsor-slot">
                <Plus />
                <span>YOUR LOGO COULD BE HERE</span>
              </div>
              <div>
                <h3>A place for our partners.</h3>
                <p>
                  Sponsor names and logos will be added once confirmed. Support can help with parts,
                  tools, and opportunities to learn.
                </p>
                <button onClick={contact} className="text-link">
                  Become a sponsor <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="news" className="wrap section news">
          <div className="section-top">
            <div>
              <div className="section-index">07 / STAY CURIOUS</div>
              <h2>
                FROM THE
                <br />
                <span>WORLD OF FIRST.</span>
              </h2>
            </div>
            <a
              className="text-link"
              href="https://community.firstinspires.org/topic/ftc"
              target="_blank"
              rel="noreferrer"
            >
              All FIRST updates <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="news-grid">
            <a
              className="news-card featured"
              href="https://www.firstinspires.org/first-canopy"
              target="_blank"
              rel="noreferrer"
            >
              <span className="eyebrow">2026–2027 SEASON</span>
              <Geometry />
              <h3>
                Meet FIRST CANOPY.
                <br />
                Explore what’s next.
              </h3>
              <span className="news-bottom">
                Discover the official season <ArrowUpRight />
              </span>
            </a>
            <a
              className="news-card"
              href="https://community.firstinspires.org/topic/ftc"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={32} />
              <span className="eyebrow">COMMUNITY & NEWS</span>
              <h3>
                Ideas, updates,
                <br />
                and inspiration.
              </h3>
              <span className="news-bottom">
                Read the FTC blog <ArrowUpRight />
              </span>
            </a>
            <a
              className="news-card"
              href="https://www.firstinspires.org/resources/library"
              target="_blank"
              rel="noreferrer"
            >
              <Wrench size={32} />
              <span className="eyebrow">TOOLS FOR BUILDERS</span>
              <h3>
                Keep learning.
                <br />
                Keep building.
              </h3>
              <span className="news-bottom">
                Explore FIRST resources <ArrowUpRight />
              </span>
            </a>
          </div>
        </section>
        <section id="support" className="support section wrap">
          <Geometry />
          <div className="section-index">THE NEXT CHAPTER STARTS WITH YOU</div>
          <h2>
            HELP US BUILD
            <br />
            <span>WHAT’S NEXT.</span>
          </h2>
          <p>
            Support the ideas. Support the team.
            <br />
            Be part of the Totus Tuus journey.
          </p>
          <div className="support-actions">
            <button className="button mint" onClick={support}>
              <Heart size={18} /> Donate to the team <ArrowUpRight size={18} />
            </button>
            <button className="button outline-button" onClick={contact}>
              Become a partner <ArrowUpRight size={18} />
            </button>
          </div>
          <small>Donation link awaiting team verification.</small>
        </section>
      </main>
      <footer className="footer wrap">
        <div className="footer-top">
          <div>
            <a className="brand" href="#top">
              <img src="/images/crest-cutout.png" alt="" />
              <span>
                TOTUS TUUS<small>FIRST TECH CHALLENGE · 19168</small>
              </span>
            </a>
            <p>More than a robot. A team.</p>
          </div>
          <div>
            <span className="footer-label">EXPLORE</span>
            <a href="#team">Our team</a>
            <a href="#season">Our season</a>
            <a href="#awards">Awards & milestones</a>
          </div>
          <div>
            <span className="footer-label">GET INVOLVED</span>
            <a href="#sponsors">Sponsorship</a>
            <button onClick={support}>Support the team</button>
            <button onClick={contact}>Contact us</button>
          </div>
          <div className="socials">
            <span className="footer-label">FOLLOW THE JOURNEY</span>
            <div>
              {[
                { name: "Instagram", icon: Instagram },
                { name: "YouTube", icon: Youtube },
                { name: "Email", icon: Mail },
              ].map(({ name, icon: Icon }) => (
                <button
                  key={name}
                  aria-label={name}
                  onClick={() =>
                    name === "Email"
                      ? contact()
                      : pending(
                          `${name} — coming soon`,
                          `The team’s verified ${name} link has not been provided yet. It will be added here when available.`,
                        )
                  }
                >
                  <Icon size={19} />
                </button>
              ))}
            </div>
            <small>Social links coming soon.</small>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Totus Tuus · Team 19168</span>
          <span>FIRST® is a registered trademark of FIRST.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
      <dialog
        ref={dialog}
        aria-modal="true"
        aria-label="Totus Tuus details"
        tabIndex={-1}
        className="dialog"
        onCancel={() => setPopup(null)}
      >
        <div className="dialog-inner">
          <button className="dialog-close" aria-label="Close dialog" onClick={() => setPopup(null)}>
            <X />
          </button>
          {popup?.type === "member" && (
            <>
              <div className="modal-portrait">
                <img
                  src={`/images/${people[popup.index].toLowerCase()}.png`}
                  alt={people[popup.index]}
                />
              </div>
              <div className="eyebrow">MEET TOTUS TUUS</div>
              <h2>{people[popup.index]}</h2>
              <p className="pending-label">Role & biography coming soon</p>
              <p>
                This profile is ready for a team-approved bio, role, interests, and favorite
                robotics moments.
              </p>
            </>
          )}
          {popup?.type === "notice" && (
            <>
              <div className="eyebrow">TOTUS TUUS / 19168</div>
              <h2>{popup.title}</h2>
              <p>{popup.text}</p>
              <button className="button mint" onClick={() => setPopup(null)}>
                Got it <ArrowRight size={18} />
              </button>
            </>
          )}
          {popup?.type === "gallery" && (
            <>
              <img
                className="lightbox-image"
                src={galleryItems[popup.index].src}
                alt={galleryItems[popup.index].title}
              />
              <div className="lightbox-bottom">
                <button
                  aria-label="Previous image"
                  onClick={() =>
                    setPopup({
                      type: "gallery",
                      index: (popup.index + galleryItems.length - 1) % galleryItems.length,
                    })
                  }
                >
                  <ChevronLeft />
                </button>
                <h3>{galleryItems[popup.index].title}</h3>
                <button
                  aria-label="Next image"
                  onClick={() =>
                    setPopup({ type: "gallery", index: (popup.index + 1) % galleryItems.length })
                  }
                >
                  <ChevronRight />
                </button>
              </div>
              <p className="lightbox-caption">{galleryItems[popup.index].description}</p>
              <span className="image-count">
                {popup.index + 1} / {galleryItems.length}
              </span>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
