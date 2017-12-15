import { m } from "pyrite";
import { PrismController } from "./PrismController";
import * as Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-css-extras.min';
import 'prismjs/components/prism-sass.min';
import 'prismjs/components/prism-scss.min';
import 'prismjs/components/prism-coffeescript.min';
import 'prismjs/components/prism-java.min';
import 'prismjs/components/prism-go.min';
import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-ruby.min';
import 'prismjs/components/prism-c.min';
import 'prismjs/components/prism-cpp.min';
import 'prismjs/components/prism-csharp.min';
import 'prismjs/components/prism-php.min';
import 'prismjs/components/prism-php-extras.min';
import 'prismjs/components/prism-rust.min';
import 'prismjs/components/prism-dart.min';
import 'prismjs/components/prism-django.min';
import 'prismjs/components/prism-less.min';
import 'prismjs/components/prism-lua.min';
import 'prismjs/components/prism-haskell.min';
import 'prismjs/components/prism-http.min';
import 'prismjs/components/prism-apacheconf.min';
import 'prismjs/components/prism-bash.min';

export function PrismTemplate(this: PrismController) {
	const language = this.props.language || "html";

	const template = Prism.highlight(this.props.code, Prism.languages[language]);

    return (
		<pre>
    		<code class={"language-" + language}>{m.trust(template)}</code>
        </pre> 
	);
}