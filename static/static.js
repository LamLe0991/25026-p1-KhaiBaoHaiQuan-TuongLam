export const headerHTML = `
    <header>
        <div class="header-container">
            <a href="#" class="logo">
                <span class="logo-text">CustomsHub</span>
            </a>

            <nav class="navbar" id="navbar">
                <ul>
                    <li><a href="/homepage/homepage.html">Home</a></li>
                    <li class="dropdown">
                        <a href="#services" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Services</a>
                        <ul class="dropdown-menu" aria-label="Services submenu">
                            <li><a href="/services/services-canada.html">Canadian Customs Brokerage &amp; Consulting</a></li>
                            <li><a href="/services/services-vietnam.html">Vietnamese Customs Brokerage &amp; Consulting</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#sectors" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Sectors</a>
                        <ul class="dropdown-menu" aria-label="Sectors submenu">
                            <li><a href="/sectors/sectorsFashion.html">Fashion &amp; Apparel</a></li>
                            <li><a href="/sectors/sectorsElectronic.html">Electronics &amp; Appliances</a></li>
                            <li><a href="/sectors/sectorsManu.html">Manufacturing</a></li>
                            <li><a href="/sectors/sectorsChem.html">Chemicals</a></li>
                            <li><a href="/sectors/sectorsFood.html">Food &amp; Beverage</a></li>
                        </ul>
                    </li>
                    <li><a href="/client-exp/client-exp.html">Experience</a></li>
                    <li><a href="/tracking/tracking.html">Tracking</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="/contact-us/contact-us.html">Contact Us</a></li>
                    <li><a href="/contact-us/contact-us.html" class="cta-button">Get a Quote</a></li>
                </ul>
            </nav>

            <button class="hamburger" id="hamburger" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>
`;

export const footerHTML = `
    <footer>
        <div class="footer-container">
            <div class="footer-content">
                <!-- Company Info -->
                <div class="footer-section">
                    <div class="footer-logo">
                        <div class="footer-logo-text">CustomsHub</div>
                    </div>
                    <p>Expert customs brokerage and consulting services for import-export between Canada and Vietnam. Simplifying global trade since day one.</p>
                    <div class="social-icons">
                        <a href="#" title="LinkedIn" aria-label="LinkedIn">
                            <i class="fa-brands fa-linkedin"></i>
                            </a>
                        <a href="#" title="Facebook" aria-label="Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" title="Instagram" aria-label="Instagram">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <!-- Canada Office -->
                <div class="footer-section">
                    <h3>Canada Office</h3>
                    <div class="contact-info">
                        <i class="fas fa-location-dot"></i>
                        <p>123 Kingsway<br>Burnaby BC V3M 3J4 Canada</p>
                    </div>    
                    <div class="contact-info">
                        <i class="fas fa-phone"></i>
                        <p>+1 (416) 555-0100</p>
                    </div>
                    <div class="contact-info">
                        <i class="fas fa-envelope"></i>
                        <p><a href="mailto:info@customshub.ca">info@customshub.ca</a></p>
                    </div>
                </div>

                <!-- Vietnam Office -->
                <div class="footer-section">
                    <h3>Vietnam Office</h3>
                    <div class="contact-info">
                        <i class="fas fa-location-dot"></i>
                        <p>456 Nguyen Hue Boulevard<br>Ho Chi Minh City, Vietnam</p>
                    </div>
                    <div class="contact-info">
                        <i class="fas fa-phone"></i>
                        <p>+84 (28) 3822-1000</p>
                    </div>
                    <div class="contact-info">
                        <i class="fas fa-envelope"></i>
                        <p><a href="mailto:info@customshub.vn">info@customshub.vn</a></p>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Careers</a>
                    <a href="#">Contact</a>
                    <a href="#">Blog</a>
                </div>
            </div>

            <div class="footer-divider"></div>

            <div class="footer-bottom">
                <p>&copy; 2026 CustomsHub. All rights reserved.</p>
            </div>
        </div>
    </footer>
`;

export const letsconnectHTML = `
    <section id="quote" class="contact-section">
      <div class="container">
        <h2>Let's Connect</h2>
        <p>
          By submitting this form, you agree that CustomsHub may contact you
          regarding your inquiry. Your information will not be shared with third
          parties.
        </p>

        <form class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">First Name *</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name *</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
          </div>

          <div class="form-group">
            <label for="company">Company *</label>
            <input type="text" id="company" name="company" required />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="service">Type of Service</label>
              <select id="service" name="service">
                <option>Customs Brokerage</option>
                <option>Import / Export Consulting</option>
                <option>Tariff Classification</option>
                <option>Compliance Audits</option>
              </select>
            </div>
            <div class="form-group">
              <label for="industry">Industry</label>
              <select id="industry" name="industry">
                <option>-- Select --</option>
                <option>Manufacturing</option>
                <option>Technology</option>
                <option>Retail</option>
                <option>Healthcare</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>

          <button type="submit" class="submit-btn">Submit</button>
        </form>
      </div>
    </section>
`;