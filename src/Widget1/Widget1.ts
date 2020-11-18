import { html, LitElement, unsafeCSS } from "lit-element";
import { customElement } from "lit-element/lib/decorators";

// Not for now
// import styles from "./Widget1.less";

//declare var $: any;

@customElement('widget-one')
export class WidgetOne extends LitElement {
    
    //static styles = unsafeCSS(styles);

    constructor() {
        super();
    }

    firstUpdated() {
        console.log("This is Widget One")
    }

    render() {
        return html`<div id="widget-one"></div>`;
    }

}