import { Render, core } from "pyrite";
import { PrismController } from "./PrismController";
import * as Prism from 'prismjs';

export function PrismTemplate(this: PrismController) {
	const language = this.attrs.language || "html";

	const template = Prism.highlight(this.attrs.code, Prism.languages[language]);

    return (
		<pre>
    		<code class={"language-" + language}>{core.trust(template)}</code>
        </pre> 
	);
}