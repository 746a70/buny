class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <a href="https://instagram.com/buny________"><img src="images/ig.png" width="100"></a>
          <a href="https://soundcloud.com/djbuny"><img src="images/sc.png" width="100"></a>
          <a href="https://bunyy.bandcamp.com"><img src="images/bc.png" width="100"></a>
          <a href="https://ra.co/dj/buny"><img src="images/ra.png" width="100" margin-bottom="-100"></a>
          <p>© 2024 buny's world</p>
        </footer>
      `;
    }
  }
  

  customElements.define('footer-component', Footer);