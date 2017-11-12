import { Component, Attributes} from "pyrite";
import { ExampleTemplate } from './ExampleTemplate';

@Component(ExampleTemplate)
export class ExampleController {
	exampleCode: string = `
		<div>
			<h1>This is an example</h1>
			<div>Diferent element</div>
		</div>
	`;
}