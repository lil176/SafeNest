
import { useState } from 'react'
import './App.css'

const services = [
  {
    icon: '👶',
    title: 'Nanny & Babysitting',
    description: 'Find caring childcare providers for your little ones.',
    label: 'Childcare',
    searchTerms: ['nanny', 'nannies', 'babysitting', 'babysitter', 'childcare']
  },
  {
    icon: '🧸',
    title: 'Daycare Services',
    description: 'Explore trusted daycare options for your children.',
    label: 'Childcare',
    searchTerms: ['daycare', 'day care', 'daycare services', 'childcare']
  },
  {
    icon: '🧹',
    title: 'Housekeeping',
    description: 'Find reliable help with cleaning, laundry and ironing.',
    label: 'Home cleaning',
    searchTerms: ['housekeeper', 'housekeepers', 'housekeeping', 'cleaning']
  },
  {
    icon: '❤️',
    title: 'Caregiving',
    description: 'Find compassionate caregivers for your loved ones.',
    label: 'Personal care',
    searchTerms: ['caregiver', 'caregivers', 'caregiving', 'personal care']
  },
  {
    icon: '🍳',
    title: 'Domestic Help',
    description: 'Get support with cooking and everyday household tasks.',
    label: 'Home assistance',
    searchTerms: ['domestic help', 'cooking', 'home assistance']
  }
]

const searchableServices = [
  { label: 'Nannies', query: 'nannies' },
  { label: 'Housekeepers', query: 'housekeepers' },
  { label: 'Caregivers', query: 'caregivers' },
  { label: 'Daycare services', query: 'daycare services' }
]

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [activeSearch, setActiveSearch] = useState('')
  const normalizedSearch = activeSearch.toLowerCase()
  const visibleServices = normalizedSearch
    ? services.filter((service) =>
        service.searchTerms.some((term) =>
          term.includes(normalizedSearch) || normalizedSearch.includes(term)
        )
      )
    : services

  function handleSearch(event) {
    event.preventDefault()
    setActiveSearch(searchInput.trim())
  }

  function selectService(query) {
    setSearchInput(query)
    setActiveSearch(query)
  }

  function clearSearch() {
    setSearchInput('')
    setActiveSearch('')
  }

  return (
    <div className="app">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a className="logo" href="/">
          <span className="logo-icon">S</span>
          Safe<span>Nest</span>
        </a>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#how">How it works</a>
          <a href="#about">About us</a>
        </div>

        <div className="nav-actions">
          <button className="login">Log in</button>
          <button className="signup">Get started →</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main>
        <section className="hero">
          <div className="hero-content">

            <span className="eyebrow">
              YOUR HOME. YOUR FAMILY. OUR CARE.
            </span>

            <h1>
              Find trusted help for your
              <span> family and home.</span>
            </h1>

            <p>
              Discover available nannies, housekeepers and caregivers.
              Choose the right person and book reliable home services
              with greater confidence.
            </p>

            <div className="hero-actions">
              <a href="#services" className="primary-btn">
                Explore services →
              </a>

              <a href="#how" className="secondary-btn">
                How it works
              </a>
            </div>

            <div className="trust-note">
              <span>✓</span> Transparent verification
              <span>✓</span> Flexible bookings
              <span>✓</span> Local providers
            </div>
          </div>

          <div className="hero-visual">
            <img
              className="hero-image"
              src="/images/safenest-hero.png"
              alt="A caregiver spending time with two children at home"
            />
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">

          <div className="section-heading">
            <span className="eyebrow">EXPLORE OUR SERVICES</span>

            <h2>
              What help do you <span>need?</span>
            </h2>

            <p>
              From childcare to household assistance,
              find the support that makes life easier.
            </p>
          </div>

          <div className="service-search">
            <label htmlFor="service-search-input">What kind of help do you need?</label>
            <form className="service-search-form" onSubmit={handleSearch}>
              <span className="search-icon" aria-hidden="true">⌕</span>
              <input
                id="service-search-input"
                type="search"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Search nannies, housekeepers, caregivers..."
              />
              <button type="submit">Search services</button>
            </form>

            <div className="service-search-options" aria-label="Popular services">
              <span>Popular:</span>
              {searchableServices.map((service) => (
                <button
                  className={activeSearch === service.query ? 'search-chip active' : 'search-chip'}
                  key={service.query}
                  onClick={() => selectService(service.query)}
                  type="button"
                >
                  {service.label}
                </button>
              ))}
            </div>
          </div>

          <p className="search-results" aria-live="polite">
            {activeSearch
              ? `${visibleServices.length} ${visibleServices.length === 1 ? 'service' : 'services'} found for “${activeSearch}”`
              : 'Browse all available services'}
            {activeSearch && (
              <button className="clear-search" onClick={clearSearch} type="button">
                Clear search
              </button>
            )}
          </p>

          <div className="service-grid">
            {visibleServices.map((service) => (
              <article className="service-card" key={service.title}>

                <div className="service-top">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <span className="service-label">
                    {service.label}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#how">
                  Explore service <span>→</span>
                </a>
              </article>
            ))}
          </div>
          {visibleServices.length === 0 && (
            <p className="no-results">
              No services match that search. Try nannies, housekeepers, caregivers, or daycare.
            </p>
          )}
        </section>

        {/* HOW IT WORKS */}
        <section className="how" id="how">

          <div className="section-heading">
            <span className="eyebrow">SIMPLE AND CONVENIENT</span>
            <h2>How SafeNest <span>works</span></h2>
            <p>
              Finding trusted home support should be simple.
            </p>
          </div>

          <div className="steps">

            <div className="step-card">
              <strong>01</strong>
              <div className="step-icon">🔎</div>
              <h3>Choose a service</h3>
              <p>Select the type of help your family needs.</p>
            </div>

            <div className="step-card">
              <strong>02</strong>
              <div className="step-icon">👩🏽‍💼</div>
              <h3>Choose a provider</h3>
              <p>Compare profiles, skills, rates and availability.</p>
            </div>

            <div className="step-card">
              <strong>03</strong>
              <div className="step-icon">📍</div>
              <h3>Book with confidence</h3>
              <p>Confirm your booking and follow arrival updates.</p>
            </div>

          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="cta">
          <span className="eyebrow">JOIN THE SAFENEST COMMUNITY</span>
          <h2>Find the help your family deserves.</h2>
          <p>
            Whether you need childcare or household support,
            SafeNest is here to help.
          </p>
          <a href="#services" className="cta-button">
            Get started today →
          </a>
        </section>

      </main>

      {/* FOOTER */}
      <footer id="about">

        <div className="footer-content">
          <div>
            <a className="logo footer-logo" href="/">
              <span className="logo-icon">S</span>
              Safe<span>Nest</span>
            </a>

            <p>
              Trusted childcare and home services
              for Zimbabwean families.
            </p>
          </div>

          <div className="footer-links">
            <a href="#services">Our services</a>
            <a href="#how">How it works</a>
            <a href="#about">About us</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 SafeNest. All rights reserved.
          <span>Built with care in Zimbabwe 🇿🇼</span>
        </div>

      </footer>

    </div>
  )
}

export default App
