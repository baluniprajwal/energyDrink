import { useState } from "react"
import bottleMain from "./assets/drink.png"
import featureImage from "./assets/beetroot.png"
import beetrootTwo from "./assets/beetroot2.png"
import manageWeightImg from "./assets/manageweight.png"
import antioxidantImg from "./assets/antioxident.png"

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#clinic', label: 'Juice Clinic' },
  { href: '#about', label: 'About CPJ' },
  { href: '#gallery', label: 'Gallery' },
]

const categorySections = [
  { label: 'Juice', targetId: 'section-1' },
  { label: 'Shots', targetId: 'clinic' },
  { label: 'Packs', targetId: 'products' },
]

const benefitCards = [
  {
    title: 'Stamina',
    subtitle: 'in a beet',
    accent: '#b9633b',
    image: beetrootTwo,
    titleLines: ['Stamina'],
  },
  {
    title: 'Manage weight',
    subtitle: 'with almond milk',
    accent: '#f4d6b6',
    image: manageWeightImg,
    titleLines: ['Manage', 'weight'],
  },
  {
    title: 'Antioxidant',
    subtitle: 'boost with cacao',
    accent: '#d990a2',
    image: antioxidantImg,
    titleLines: ['Antioxidant'],
  },
]

const App = () => {
  const currentYear = new Date().getFullYear()
  const [activeCategory, setActiveCategory] = useState(categorySections[0].targetId)

  const handleCategoryClick = (targetId) => {
    setActiveCategory(targetId)
    if (targetId === 'section-1') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="app-shell">
      <header className="hero-header">
      <nav className="nav-links nav-left" aria-label="Primary">
        {navLinks.slice(0, 2).map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="logo-cluster" aria-label="CPJ logo">
        <span className="logo-icon" aria-hidden="true">
          CPJ
        </span>
        <span className="logo-text">CPJ</span>
      </div>

      <div className="nav-right">
        <nav className="nav-links nav-right-links" aria-label="Secondary">
          {navLinks.slice(2).map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="action-cluster">
          <button className="signup-btn" type="button">
            Sign Up
          </button>
        </div>
      </div>
    </header>

    <aside className="category-panel" aria-label="Flavour categories">
      <div className="category-items">
        {categorySections.map((category) => (
          <button
            key={category.label}
            type="button"
            className={`category-chip ${activeCategory === category.targetId ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.targetId)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <button className="panel-grid" aria-label="Open categories grid" type="button">
        <span />
        <span />
        <span />
        <span />
      </button>
    </aside>

    <main className="hero">
      <div className="hero-stage" id="section-1">
        <h1 aria-label="CTRL" className="hero-wordmark">
          CTRL
        </h1>
        <span className="hero-sup" aria-hidden="true">
          1
        </span>

        <div className="bottle-stage">
          <img src={bottleMain} alt="Ctrl energy shake bottle" className="bottle-main" draggable="false" />
        </div>
      </div>

      <section className="hero-details">
        <p>Almond milk, beetroot, vanilla pods, maca powder, cacao and sea salt.</p>
        <p className="price">
          330ml / <span>&pound;4.50</span>
        </p>
        <button type="button" className="primary-cta">
          Order now
        </button>
      </section>

      <section
        id="clinic"
        className="relative w-screen min-h-screen bg-[#E77766] px-6 pt-16 pb-6 md:px-16 md:pt-20 md:pb-8 flex items-center justify-center overflow-hidden"
      >
        <div className="flex w-full max-w-[1200px] flex-col gap-12 text-white md:flex-row md:items-center md:gap-20">
          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-[620px] lg:max-w-[700px]">
              <img
                src={featureImage}
                alt="Beetroot ingredient"
                className="w-full select-none drop-shadow-[0_40px_55px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>

          <div className="feature-copy feature-copy-panel">
            <p>
              Stacked with protein, good fats and complex carbohydrates, this shake is the perfect healthy breakfast
              alternative to keep you full up till lunchtime.
            </p>
            <p>
              Its contains maca and cacao to help rid your body of pesky free radicals. To top it off, beetroot is
              packed with calcium, vitamin C, potassium and folic acid — a great way to kick-start the morning.
            </p>
          </div>
        </div>
      </section>

      <section className="benefit-grid" id="products">
        {benefitCards.map((card) => (
          <article key={card.title} className="benefit-card">
            <img src={card.image} alt={card.title} className="benefit-image" draggable="false" />
            <div className="benefit-overlay">
              <h3>
                {card.titleLines?.map((line, index) => (
                  <span key={`${card.title}-${index}`}>{line}</span>
                )) || card.title}
              </h3>
              <p>{card.subtitle}</p>
              <span className="benefit-plus" aria-hidden="true">
                +
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>

    <footer className="site-footer" aria-label="CTRL Pressed Juice footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="footer-kicker">Cold-pressed energy fuel</p>
          <p className="footer-wordmark">
            CTRL<span aria-hidden="true"> / </span>CPJ
          </p>
          <p className="footer-note">Hand bottled in Shoreditch, London</p>
        </div>

        <div className="footer-mission" aria-label="CTRL mission statement">
          <p className="footer-headline">STAY IN CTRL</p>
          <p className="footer-subhead">Daily blends built for stamina, focus, and calm.</p>
          <div className="footer-stats">
            <div>
              <p className="stat-number">18g</p>
              <p className="stat-label">Plant protein</p>
            </div>
            <div>
              <p className="stat-number">0%</p>
              <p className="stat-label">Refined sugar</p>
            </div>
            <div>
              <p className="stat-number">5</p>
              <p className="stat-label">Functional botanicals</p>
            </div>
          </div>
        </div>

        <div className="footer-meta">
          <p>&copy; {currentYear} CPJ Labs Ltd.</p>
          <p>Crafted with beetroot, cacao, and almond milk</p>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default App





