import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreditBanner from "../components/CreditBanner";

export default function HomePage() {
  const [dailySales, setDailySales] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDailySales((prev) => (prev >= 120000 ? 120000 : prev + 1500));
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const statCards = [
    { label: "Customers served", value: "9,860" },
    { label: "Transactions today", value: "1,248" },
    { label: "Active meters", value: "18.6K" },
  ];

  return (
    <div className="page-shell">
      <div className="floating-glow glow-one" />
      <div className="floating-glow glow-two" />

      <header className="topbar">
        <div className="logo">Kaduna Electric</div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#credit">Credit</a>
          <Link to="/login" className="nav-button">Login</Link>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-copy"
          >
            <span className="badge">Smart utility payments</span>
            <h1>Buy electricity tokens faster and smarter.</h1>
            <p>
              Secure token purchases, smarter meter tracking, and flexible credit support for reliable power access.
            </p>

            <div className="hero-actions">
              <Link to="/dashboard" className="primary-btn">Buy token</Link>
              <a href="#credit" className="secondary-btn">Credit plan</a>
            </div>

            <div className="mini-stats">
              {statCards.map((item) => (
                <div key={item.label} className="mini-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
            className="hero-panel"
          >
            <div className="panel-head">
              <span>Daily sales</span>
              <span className="live-dot">Live</span>
            </div>

            <div className="amount">₦{dailySales.toLocaleString()}</div>

            <div className="panel-list">
              <div><span>Transactions</span><strong>1,248</strong></div>
              <div><span>Customers</span><strong>9,860</strong></div>
              <div><span>Credit limit</span><strong>₦20,000</strong></div>
            </div>
          </motion.div>
        </section>

        <section id="features" className="feature-section">
          <div className="section-header">
            <p>Why customers choose us</p>
            <h2>Reliable payment experience built for speed.</h2>
          </div>

          <div className="feature-grid">
            {[
              { title: "Fast checkout", text: "Simple purchases in a few taps and secure verification." },
              { title: "Smart customer records", text: "Track meters, bills, and purchase history with zero confusion." },
              { title: "Flexible support", text: "Safe credit plans and repayment tracking for customers in need." },
            ].map((feature) => (
              <motion.div key={feature.title} className="feature-card" whileHover={{ y: -8 }}>
                <div className="feature-icon">⚡</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="steps-section">
          <div className="section-header">
            <p>How it works</p>
            <h2>Four quick steps to power up.</h2>
          </div>

          <div className="steps-grid">
            {[
              "Create account",
              "Add meter",
              "Select amount",
              "Complete payment",
            ].map((step, index) => (
              <div key={step} className="step-card">
                <span className="step-index">0{index + 1}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </section>

        <CreditBanner />
      </main>
    </div>
  );
}
