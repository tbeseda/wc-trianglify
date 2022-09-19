import trianglify from "./vendor/trianglify.bundle.js";

export default class WCTrianglify extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		this.template = document.createElement("template");
		this.template.innerHTML = WCTrianglify.template();

		if (shadow) {
			shadow.append(this.template.content.cloneNode(true));
			this.container = shadow.querySelector(".wc-trianglify-container");
		}
	}

	connectedCallback() {
		this.trianglify();
	}

	static get observedAttributes() {
		return [];
	}

	attributeChangedCallback(name, oldValue, newValue) {}

	trianglify() {
		if (this.container) {
			this.container.innerHTML = "";
			const pattern = trianglify({
				width: window.innerWidth,
				height: window.innerHeight,
				// TODO: pass in user options
			});
			this.container.appendChild(pattern.toCanvas());
		}
	}

	static template() {
		return /*html*/ `
    <style>
      .wc-trianglify-container {
        z-index: -1;
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        min-width: 100%;
        min-height: 100%;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
    </style>

    <div class="wc-trianglify-container"></div>
    `;
	}
}

customElements.define("wc-trianglify", WCTrianglify);
