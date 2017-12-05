import { m } from "pyrite";
import { ExampleController } from "./ExampleController";
import { Prism } from "../../src";

export function ExampleTemplate(this: ExampleController) {
	return (
		<div>
			<h2>Pyrite Prism example</h2>
			<p>How use it:</p>

			<Prism language="html" code={this.exampleCode} />

			<div>
				<h3>Attributes</h3>
				<ul>
					<li>
						<span>
							<b>language</b>: language which you want to show. <br/> 
							Just use the sufix (html, javascript, etc...) <br/>
							Read more about language support <a href="http://prismjs.com">here</a>
						</span>
					</li>
					<li>
						<span>
							<b>code</b>: code which you want to show as example
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
}