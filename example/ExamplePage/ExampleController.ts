import { Component, Template} from "pyrite";
import { ExampleTemplate } from './ExampleTemplate';

@Template(ExampleTemplate)
export class ExampleController extends Component<any>{
	exampleCode: string = `
		<div>
			<h1>This is an example</h1>
			<div>Diferent element</div>
		</div>
	`;
}