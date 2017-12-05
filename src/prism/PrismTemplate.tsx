import { m } from "pyrite";
import { PrismController } from "./PrismController";
import * as Prism from 'prismjs';

export function PrismTemplate(this: PrismController) {
	const language = this.props.language || "html";

	const template = Prism.highlight(this.props.code, Prism.languages[language]);

    return (
		<pre>
    		<code class={"language-" + language}>{m.trust(template)}</code>
        </pre> 
	);
}