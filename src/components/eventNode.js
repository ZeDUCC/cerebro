class eventNode extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .custom-button {
                    padding: 50px 50px;
                    background-color: #f3f4f8;
                    color: black;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                }

                .custom-button:hover {
                    background-color: #e0e1e5;
                    transform: scale(1.05);
                }
            </style>
            <button class="custom-button">
            <slot></slot>
            </button>
        `;

        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('buttonClick'));
        });
    }

}

customElements.define('event-node', eventNode);