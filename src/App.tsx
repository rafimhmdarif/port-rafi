import { useEffect, useState, type ReactNode } from "react";
import profilePhoto from "./assets/rafi-profile.jpg";

const EMAIL = "rafi.arif2003@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/rafi-muhammad-arif-6a8568175/";
const GITHUB = "https://github.com/rafimhmdarif";

const navItems = [
  ["Tentang", "about"],
  ["Proyek", "projects"],
  ["Pengalaman", "experience"],
  ["Keahlian", "skills"],
  ["Kontak", "contact"],
];

const timeline = [
  {
    title: "Magang Mandiri",
    role: "Direktorat Ajudan Jenderal TNI Angkatan Darat",
    date: "Sep 2024 – Jan 2025",
  },
  {
    title: "Studi Independen Bersertifikat",
    role: "PT TalentHub Digital Indonesia",
    date: "Feb 2024 – Jun 2024",
  },
  {
    title: "Ketua Bidang Seni dan Olahraga",
    role: "HIMATIF, Universitas Widyatama",
    date: "Okt 2023 – Agu 2024",
  },
  {
    title: "Member GDSC Widyatama",
    role: "Google Developer Student Club",
    date: "Okt 2023 – Sekarang",
  },
  {
    title: "Staff Divisi Seni dan Olahraga",
    role: "HIMATIF, Universitas Widyatama",
    date: "Okt 2022 – Agu 2023",
  },
];

const techStack = ["Flutter", "Dart", "React", "HTML", "CSS", "JavaScript", "UI/UX Design"];

const icons: Record<string, ReactNode> = {
  pin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18v12H3z" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </svg>
  ),
};

function Icon({ name }: { name: keyof typeof icons }) {
  return <span className="icon">{icons[name]}</span>;
}

// Baca tema tersimpan satu kali di awal, supaya pilihan tema tidak tertimpa
// saat komponen pertama kali dirender (termasuk di React StrictMode).
function getInitialDark(): boolean {
  try {
    const saved = localStorage.getItem("rafi-theme");
    if (saved) return saved === "dark";
  } catch {
    // localStorage bisa diblokir; abaikan dan ikuti preferensi sistem
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function App() {
  const [dark, setDark] = useState(getInitialDark);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      localStorage.setItem("rafi-theme", dark ? "dark" : "light");
    } catch {
      // abaikan
    }
  }, [dark]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#about" aria-label="Ke bagian atas">
          RA<span>.</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Buka menu navigasi"
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav-open" : ""} aria-label="Navigasi utama">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setDark(!dark)}
          aria-label={dark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
        >
          <Icon name={dark ? "sun" : "moon"} />
        </button>
      </header>

      <section className="hero section-shell" id="about">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> Tersedia untuk kesempatan baru
          </div>
          <h1>
            Rafi Muhammad <span>Arif</span>
          </h1>
          <p className="hero-role">Web &amp; Mobile Developer — Mahasiswa Teknik Informatika</p>
          <p className="hero-intro">
            Saya membangun pengalaman digital yang fungsional, cepat, dan nyaman digunakan—dari
            aplikasi mobile sampai produk berbasis web.
          </p>

          <div className="hero-actions">
            <button className="primary-button" onClick={() => scrollTo("projects")}>
              Lihat proyek <Icon name="arrow" />
            </button>
            <a className="text-link" href={`mailto:${EMAIL}`}>
              Mari berbicara
            </a>
          </div>

          <div className="contact-line">
            <span>
              <Icon name="pin" /> Bandung, Indonesia
            </span>
            <a href={`mailto:${EMAIL}`}>
              <Icon name="mail" /> {EMAIL}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-card">
            <img className="portrait-photo" src={profilePhoto} alt="Potret Rafi Muhammad Arif" />
            <div className="portrait-grid" />
          </div>
          <div className="hero-stamp">
            <span>Based in</span>
            <strong>BDG</strong>
          </div>
        </div>
      </section>

      <section className="section-shell projects-section" id="projects">
        <div className="section-heading">
          <div>
            <span className="section-kicker">01 — Karya pilihan</span>
            <h2>Proyek yang saya banggakan.</h2>
          </div>
          <p>Proyek dan pembelajaran yang pernah saya kerjakan.</p>
        </div>

        <div className="bento-grid">
          <article className="project-card featured">
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1650661926447-9efb2610f64c?auto=format&fit=crop&w=1600&q=85"
                alt="Laptop di meja kerja dengan pencahayaan biru"
              />
              <span className="project-number">01</span>
            </div>
            <div className="project-content">
              <div>
                <span className="card-label">Aplikasi mobile</span>
                <h3>Aplikasi Absensi</h3>
                <p>
                  Aplikasi absensi berbasis Flutter yang saya buat saat magang mandiri di Direktorat
                  Ajudan Jenderal TNI Angkatan Darat.
                </p>
              </div>
              <div className="tags">
                <span>Flutter</span>
                <span>Dart</span>
              </div>
            </div>
          </article>

          <article className="project-card compact blue-card">
            <span className="project-number">02</span>
            <div className="mini-window">
              <span />
              <span />
              <span />
              <div>UI</div>
            </div>
            <span className="card-label">Pembelajaran</span>
            <h3>Studi Independen Bersertifikat</h3>
            <p>
              Belajar Cloud Computing, UI/UX Design, Web Development, dan Fullstack Development di PT
              TalentHub Digital Indonesia.
            </p>
          </article>

          <article className="project-card compact">
            <span className="project-number">03</span>
            <div className="project-orbit" aria-hidden="true">
              <span>WEB</span>
            </div>
            <span className="card-label">Proyek kelompok</span>
            <h3>Website Jual Beli Mobil</h3>
            <p>Website jual beli mobil yang dikerjakan bersama tim di Universitas Widyatama.</p>
          </article>

          <article className="project-card stack-card" id="skills">
            <span className="card-label">Toolbox</span>
            <h3>Tech stack</h3>
            <div className="stack-list">
              {techStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>

          <article className="project-card certificate-card">
            <span className="card-label">Pembelajaran</span>
            <h3>Sertifikasi</h3>
            <div className="certificate-row">
              <div>
                <strong>2</strong>
                <span>Sertifikat</span>
              </div>
              <p>Programming Essentials in C (Cisco) dan Studi Independen Bersertifikat.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-shell">
          <div className="section-heading light-heading">
            <div>
              <span className="section-kicker">02 — Perjalanan</span>
              <h2>Belajar dengan melakukan.</h2>
            </div>
            <p>Pengalaman yang membentuk cara saya berpikir dan bekerja.</p>
          </div>

          <div className="experience-layout">
            <div className="timeline">
              {timeline.map(({ title, role, date }, index) => (
                <article className="timeline-item" key={`${title}-${date}`}>
                  <span className="timeline-index">0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{role}</p>
                  </div>
                  <time>{date}</time>
                </article>
              ))}
            </div>

            <aside className="learning-card">
              <span className="card-label">Sekarang</span>
              <h3>Sedang dipelajari & dibuat</h3>
              <p>
                Menyusun skripsi Teknik Informatika di Universitas Widyatama sambil memperdalam
                pengembangan web dan Flutter.
              </p>
              <div className="learning-footer">
                <span>Skripsi</span>
                <span>Flutter</span>
                <span>Web Development</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <span className="section-kicker">03 — Kontak</span>
        <h2>
          Punya ide menarik?
          <br />
          Mari bikin bareng.
        </h2>
        <a className="contact-email" href={`mailto:${EMAIL}`}>
          {EMAIL} <Icon name="arrow" />
        </a>
      </section>

      <footer>
        <a className="brand" href="#about">
          RA<span>.</span>
        </a>
        <p>© 2026 Rafi Muhammad Arif</p>
        <div className="socials">
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${EMAIL}`}>Email</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
