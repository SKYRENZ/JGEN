export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <p className="footer-title">JGen Youth</p>
            <p className="footer-subtitle">Raising a generation for Christ</p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" title="Follow us on Facebook">
                <span className="sr-only">Facebook</span>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 4.98 3.66 9.1 8.44 9.88v-6.99H7.9v-2.9h2.53V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v6.99C18.34 21.17 22 17.05 22 12.07Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="footer-section">
            <p className="footer-about-header">About Us</p>
            <p className="footer-about-text">
              JGen Youth is a community of young people passionate about knowing God, growing in faith, and serving others.
            </p>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <p className="footer-contact-header">Get In Touch</p>
            <div className="footer-contact-info">
              <div>
                <p className="footer-contact-label">Phone</p>
                <p className="footer-contact-value">+63 912 345 6789</p>
              </div>
              <div>
                <p className="footer-contact-label">Email</p>
                <p className="footer-contact-value">hello@jgenyouth.org</p>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="footer-section">
            <p className="footer-contact-header">Stay Connected</p>
            <p className="footer-subscribe-text">Get the latest updates from JGen</p>
            <div className="footer-subscribe-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-subscribe-input"
                aria-label="Email address"
              />
              <button className="footer-subscribe-button">Reach Out</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2026 JGen Youth | All Rights Reserved</p>
            <p className="footer-copyright">Let no one despise your youth – 1 Timothy 4:12</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
