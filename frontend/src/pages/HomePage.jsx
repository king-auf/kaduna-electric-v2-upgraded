import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreditBanner from "../components/CreditBanner";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function HomePage() {
  const [dailySales, setDailySales] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const salesTimer = setInterval(() => {
      setDailySales((prev) => (prev >= 5000000 ? 5000000 : prev + 50000));
    }, 30);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(salesTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page-shell">
      {/* Animated Background */}
      <div className="bg-orb orb-1" style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
      <div className="bg-orb orb-2" style={{ transform: `translateY(${scrollY * 0.5}px)` }} />
      <div className="bg-orb orb-3" style={{ transform: `translateY(${scrollY * 0.4}px)` }} />
      <div className="stars" />

      {/* Header */}
      <motion.header className="topbar" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <motion.div className="logo" whileHover={{ scale: 1.1, rotate: 5 }}>
          ⚡ Kaduna Electric
        </motion.div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          <a href="#credit">Credit</a>
          <Link to="/login" className="nav-button">Login</Link>
          <Link to="/register" className="nav-button nav-secondary">Register</Link>
        </nav>
      </motion.header>

      <main className="container">
        {/* HERO SECTION - DRAMATIC */}
        <motion.section className="hero-section" variants={containerVariants} initial="hidden" animate="visible">
          <div className="hero-content">
            <motion.div className="hero-badge" variants={itemVariants}>
              ✨ The future of utility payments
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              Power at your
              <span className="gradient-glow"> fingertips</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={itemVariants}>
              Buy electricity tokens in seconds, track usage in real-time, and unlock flexible credit options. Experience payments reimagined.
            </motion.p>

            <motion.div className="hero-buttons" variants={itemVariants}>
              <Link to="/register" className="btn-primary">
                <span>Start Free Now</span>
                <span className="btn-arrow">→</span>
              </Link>
              <a href="#features" className="btn-secondary">Learn More</a>
            </motion.div>

            {/* Trust Stats */}
            <motion.div className="trust-grid" variants={itemVariants}>
              <div className="trust-stat">
                <div className="stat-number">9.8K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="trust-stat">
                <div className="stat-number">₦2.5B+</div>
                <div className="stat-label">Processed Daily</div>
              </div>
              <div className="trust-stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime Guaranteed</div>
              </div>
            </motion.div>
          </div>

          {/* HERO VISUAL - ANIMATED CARD */}
          <motion.div className="hero-visual" variants={itemVariants}>
            <motion.div
              className="floating-card"
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="card-glow" />
              <div className="card-inner">
                <div className="card-header">
                  <span className="card-title">📊 Live Dashboard</span>
                  <span className="live-badge">● LIVE</span>
                </div>

                <div className="card-stat-big">
                  <div className="stat-big-value">₦{(dailySales / 1000000).toFixed(1)}M</div>
                  <div className="stat-big-label">Today's Revenue</div>
                </div>

                <div className="card-metrics">
                  <motion.div className="metric" whileHover={{ x: 8 }}>
                    <div className="metric-bar" style={{ width: "87%" }} />
                    <div className="metric-text">12.4K Transactions</div>
                  </motion.div>
                  <motion.div className="metric" whileHover={{ x: 8 }}>
                    <div className="metric-bar" style={{ width: "92%" }} />
                    <div className="metric-text">9.8K Customers</div>
                  </motion.div>
                  <motion.div className="metric" whileHover={{ x: 8 }}>
                    <div className="metric-bar" style={{ width: "100%" }} />
                    <div className="metric-text">99.9% Uptime</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* FEATURES - SPECTACULAR */}
        <motion.section
          id="features"
          className="features-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <div className="section-badge">Why choose us</div>
            <h2>Engineered for speed. Designed for you.</h2>
          </motion.div>

          <div className="features-grid">
            {[
              { icon: "⚡", title: "Lightning Fast", desc: "Complete payment in under 5 seconds" },
              { icon: "🔐", title: "Bank Security", desc: "Military-grade encryption on all data" },
              { icon: "💳", title: "Smart Credit", desc: "Flexible payment with ₦20K limit" },
              { icon: "📱", title: "Mobile First", desc: "Perfect on any device, anywhere" },
              { icon: "📈", title: "Live Analytics", desc: "Real-time usage and spending insights" },
              { icon: "🛟", title: "24/7 Support", desc: "Always here when you need us" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="feature-box"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 50px 100px rgba(34, 211, 238, 0.2)" }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* HOW IT WORKS */}
        <motion.section
          id="how"
          className="how-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <div className="section-badge">Simple steps</div>
            <h2>Get power in 4 taps</h2>
          </motion.div>

          <div className="steps-flow">
            {[
              { num: "01", title: "Sign Up", desc: "Create your account in 30 seconds" },
              { num: "02", title: "Add Meter", desc: "Verify your meter number" },
              { num: "03", title: "Buy Token", desc: "Choose your amount" },
              { num: "04", title: "Done!", desc: "Get token instantly via SMS" },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="step-item"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="step-num">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                {i < 3 && <div className="step-arrow">→</div>}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CREDIT SECTION */}
        <CreditBanner />

        {/* CTA FINALE */}
        <motion.section
          className="cta-finale"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div className="cta-content" variants={containerVariants}>
            <motion.h2 variants={itemVariants}>Ready to power up?</motion.h2>
            <motion.p variants={itemVariants}>Join the electricity revolution. Fast, secure, and flexible.</motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/register" className="cta-btn">Start Now →</Link>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>⚡ Kaduna Electric</h3>
            <p>Powering Nigeria's future, one token at a time.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Security</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Support</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Kaduna Electric. All rights reserved. | Built with ⚡ for Nigeria</p>
        </div>
      </footer>
    </div>
  );
}
