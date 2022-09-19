export default class WCTrianglify extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {}

	static get observedAttributes() {}

	attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define("wc-toast", WCTrianglify);
