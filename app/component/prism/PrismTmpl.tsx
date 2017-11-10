import { Render, core } from "pyrite";
import {PrismCtrl} from "./PrismCtrl";
import * as Prism from 'prismjs';


export function PrismTmpl(this: PrismCtrl) {
    const sanitize = Prism.highlight(this.attrs.pyCode, Prism.languages[this.attrs.pyLanguage]);

    return (
        <pre>
            <code class={"language-" + this.attrs.pyLanguage}>
                {core.trust(sanitize)}
            </code>
        </pre>
    )
}