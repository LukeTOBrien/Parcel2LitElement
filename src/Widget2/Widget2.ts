import { html, LitElement, unsafeCSS } from "lit-element";
import { customElement } from "lit-element/lib/decorators";

@customElement('widget-two')
export class WidgetTwo extends LitElement {

    constructor() {
        super();
    }

    firstUpdated() {
        console.log("This is Widget two")
    }

    render() {
        return html`<div id="widget-two"></div>`;
    }

}