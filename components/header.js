class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
        <ul>
          <a href="index.html">home</a>
          <a href="shows.html">shows</a>
          <a href="contact.html">contact</a>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);