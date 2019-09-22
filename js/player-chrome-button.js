import PlayerChromeElement from './player-chrome-element.js';

const template = document.createElement('template');

template.innerHTML = `
<style>
  :host {
    background-color: var(--player-chrome-control-background-color, transparent);
  }

  svg .icon {
    fill: var(--player-chrome-icon-color, #eee);
  }
</style>
<div id="icon-container">
  <slot></slot>
</div>
`;

class PlayerChromeButton extends PlayerChromeElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.iconContainer = this.shadowRoot.querySelector('#icon-container');

    this.addEventListener('click', e => {
      this.onClick(e);
    });
  }

  onClick() {}

  set icon(svg) {
    this.iconContainer.innerHTML = svg;
  }
}

window.customElements.define('player-chrome-button', PlayerChromeButton);

export default PlayerChromeButton;