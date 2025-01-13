class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <p>© 2025 buny's world</p>
        </footer>
      `;
    }
  }
  

  customElements.define('footer-component', Footer);