import { Render, core } from "pyrite";
import {PrismExCtrl} from "./PrismExCtrl";
import {Prism} from "../../component";

export function PrismExTmpl(this: PrismExCtrl) {
    const example= `
        <div>
            <Prism pyLanguage="html" pyCode={example}></Prism>
        </div> `

    return (
        <div>
            <h2>Pyrite Prism example</h2>
            <p>How use it:</p>
            <Prism pyLanguage="html" pyCode={example}></Prism>
            <div>
                <h3>Attributes</h3>
                <ul>
                    <li>
                        <span>
                            <b>pyLanguage</b>: language which you want to show. <br/> 
                            Just use the sufix (html, javascript, etc...) <br/>
                            Read more about language support <a href="http://prismjs.com">here</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b>pyCode</b>: code which you want to show as example
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}