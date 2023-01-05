class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <header class="header">
                <div class="nav-flex">
                    <a href="index.html">
                        <img class="logo" src="/logo.webp" alt="Reveries Lab Logo" />
                    </a>
                    <h2 class="heading-secondary">reveries.lab</h2> 
                </div>
                <nav class="main-nav">
                    <ul class="main-nav-list">
                    <li><a class="main-nav-link" href="/index.html">Home</a></li>
                    <li>
                        <a class="main-nav-link" href="/projects/index.html">Projects</a>
                    </li>
                    <li>
                        <a class="main-nav-link" href="/research/index.html">Research</a>
                    </li>
                    <li><a class="main-nav-link" href="/about.html">About</a></li>
                    </ul>
                </nav>
            </header>
        `;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <footer class="footer">
                <div class="container grid-footer">
                <div class="footer-socials">
                    <ul class="social-links">
                    <li>
                        <a class="footer-link" href="https://www.instagram.com/rshredow/"
                        ><ion-icon class="social-icon" name="logo-instagram"></ion-icon
                        ></a>
                    </li>
                    <li>
                        <a
                        class="footer-link"
                        href="https://www.facebook.com/robert.shredow"
                        ><ion-icon class="social-icon" name="logo-facebook"></ion-icon
                        ></a>
                    </li>
                    <li>
                        <a class="footer-link" href="https://github.com/rpshredow"
                        ><ion-icon class="social-icon" name="logo-github"></ion-icon
                        ></a>
                    </li>
                    <li>
                        <a
                        class="footer-link"
                        href="https://www.linkedin.com/in/robert-shredow-37995393/"
                        ><ion-icon class="social-icon" name="logo-linkedin"></ion-icon
                        ></a>
                    </li>
                    </ul>
                </div>
                <div class="footer-col">
                    <p class="footer-address">
                    111 College Hill St
                    </p> 
                    <p class="footer-address">Cheney, Washington 99004
                    </p>
                    <a class="footer-link" href="mailto:rshredow@gmail.com"
                    >rshredow@gmail.com</a
                    >
                    <a class="footer-link" href="tel:509-294-5271">509-294-5271</a>
                </div>

                <div class="footer-col copyright-span">
                    <p class="footer-copyright">
                    Copyright &copy; 2022 by Robert Shredow, All rights reserved.
                    </p>
                </div>
                </div>
            </footer>
        `;
  }
}

customElements.define("my-footer", MyFooter);
