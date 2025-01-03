class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <p>© 2024 buny's world</p>
        </footer>
      `;
    }
  }
  

  customElements.define('footer-component', Footer);