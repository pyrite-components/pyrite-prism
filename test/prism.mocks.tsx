import { m, Template, Component} from "pyrite";
import { PrismController as Prism } from "../src/prism/PrismController"

@Template(function(this: TestPrism) {
    return(
        <Prism language='js' code={this.example}></Prism>   
    )
})
class TestPrism extends Component<any>{
    example: string = 'var x = 10;';
    loaded: Boolean;

    $onCreate() {
        this.loaded = true;
    }
}

export const testPrism: any = (
    <TestPrism></TestPrism>
);