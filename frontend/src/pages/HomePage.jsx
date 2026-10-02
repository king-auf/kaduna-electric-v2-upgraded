import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreditBanner from "../components/CreditBanner";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const floatVariants = {
  float: {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: { duration: 2, repeat: Infinity },
  },
};

export default function HomePage() {
  const [dailySales, setDailySales] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDailySales((prev) => (prev >= 2500000 ? 2500000 : prev + 25000));
    }, 50);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page-shell">
      {/* Animated background elements */}
      <div className="floating-glow glow-one" style={{ transform: `translateY(${scrollY * 0.5}px)` }} />
      <div className="floating-glow glow-two" style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
      <div className="floating-glow glow-three" />
      <div className="grid-background" />
      <div className="noise-overlay" />

      {/* Header */}
      <header className="topbar">
        <motion.div className="logo" whileHover={{ scale: 1.05 }}>
          ⚡ Kaduna Electric
        </motion.div>
        <nav className="nav-links">
          <a href="#features" className="nav-link-item">Features</a>
          <a href="#how-it-works" className="nav-link-item">How it works</a>
          <a href="#credit" className="nav-link-item">Credit</a>
          <Link to="/login" className="nav-button">Login</Link>
          <Link to="/register" className="nav-button nav-button-secondary">Register</Link>
        </nav>
      </header>

      <main className="container">
        {/* Hero Section */}
        <motion.section
          className="hero"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-left">
            <motion.span className="badge" variants={itemVariants}>
              ⚡ Smart utility payments
            </motion.span>

            <motion.h1 className="hero-title" variants={itemVariants}>
              Power your life with
              <span className="gradient-text"> lightning-fast</span> electricity tokens
            </motion.h1>

            <motion.p className="hero-subtitle" variants={itemVariants}>
              Buy tokens in seconds, track meters effortlessly, and enjoy flexible credit options. The future of utility payments is here.
            </motion.p>

            <motion.div className="hero-actions" variants={itemVariants}>
              <Link to="/register" className="primary-btn">
                <span>Get Started</span>
                <span className="btn-arrow">→</span>
              </Link>
              <a href="#features" className="secondary-btn">
                <span>Learn More</span>
              </a>
            </motion.div>

            <motion.div className="trust-badges" variants={itemVariants}>
              <div className="trust-item">
                <span className="trust-number">9.8K+</span>
                <span className="trust-label">Happy customers</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">₦2.5B+</span>
                <span className="trust-label">Processed</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">99.9%</span>
                <span className="trust-label">Uptime</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right - Interactive Card */}
          <motion.div className="hero-right" variants={itemVariants}>
            <motion.div className="hero-card" variants={floatVariants} animate="float">
              <div className="card-glow" />
              <div className="card-content">
                <div className="card-header">
                  <div className="card-title">
                    <span className="card-icon">📊</span>
                    <span>Live Dashboard</span>
                  </div>
                  <motion.span className="live-badge" variants={pulseVariants} animate="pulse">
                    LIVE
                  </motion.span>
                </div>

                <div className="card-stats">
                  <div className="stat-block">
                    <div className="stat-value" style={{ fontSize: "2.5rem" }}>
                      ₦{(dailySales / 1000000).toFixed(1)}M
                    </div>
                    <div className="stat-label">Daily Revenue</div>
                  </div>
                </div>

                <div className="card-breakdown">
                  {[
                    { label: "Transactions", value: "12.4K", color: "#22d3ee" },
                    { label: "Customers", value: "9.8K", color: "#3b82f6" },
                    { label: "Uptime", value: "99.9%", color: "#10b981" },
                  ].map((item) => (
                    <motion.div key={item.label} className="breakdown-item" whileHover={{ x: 5 }}>
                      <div className="breakdown-dot" style={{ background: item.color }} />
                      <div>
                        <div className="breakdown-label">{item.label}</div>
                        <div className="breakdown-value">{item.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="card-footer">
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: "0%" }}
                      animate={{ width: "87%" }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                  <span className="progress-label">87% Monthly Target</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          className="features-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <motion.p className="section-label" variants={itemVariants}>
              Why we're different
            </motion.p>
            <motion.h2 className="section-title" variants={itemVariants}>
              Everything you need for seamless payments
            </motion.h2>
          </div>

          <div className="features-grid">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                desc: "Buy tokens in under 10 seconds with our optimized checkout.",
              },
              {
                icon: "🔒",
                title: "Bank-Level Security",
                desc: "Your data is encrypted and protected with enterprise security.",
              },
              {
                icon: "💳",
                title: "Flexible Payment",
                desc: "Pay instantly or use our smart credit facility for later.",
              },
              {
                icon: "📱",
                title: "Mobile First",
                desc: "Beautiful experience on any device, anywhere, anytime.",
              },
              {
                icon: "📊",
                title: "Smart Analytics",
                desc: "Track your usage, spending, and save with insights.",
              },
              {
                icon: "🤝",
                title: "24/7 Support",
                desc: "Our team is always here to help with any questions.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(34, 211, 238, 0.2)" }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          id="how-it-works"
          className="how-it-works"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <motion.p className="section-label">Simple process</motion.p>
            <motion.h2 className="section-title">Get power in 4 easy steps</motion.h2>
          </div>

          <div className="steps-container">
            {[
              { num: "01", title: "Create Account", desc: "Sign up in less than a minute with your email." },
              { num: "02", title: "Add Your Meter", desc: "Enter your meter number for verification." },
              { num: "03", title: "Choose Amount", desc: "Pick token value that suits your needs." },
              { num: "04", title: "Get Power", desc: "Receive your token instantly via SMS & email." },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="step-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                {idx < 3 && <div className="step-arrow">→</div>}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Credit Banner */}
        <CreditBanner />

        {/* CTA Section */}
        <motion.section
          className="cta-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h2>Ready to power up?</h2>
            <p>Join thousands of happy customers enjoying fast, secure electricity token payments.</p>
            <Link to="/register" className="cta-button">
              Start Now →
            </Link>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">⚡ Kaduna Electric</div>
            <p>Making electricity payments simple, fast, and secure.</p>
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
              <a href="#">Careers</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Kaduna Electric. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
