import { Component, Attributes, Children } from "pyrite";
import {PrismTmpl} from "./PrismTmpl";

@Component(PrismTmpl)
export class PrismCtrl {
    @Attributes attrs: {
        pyLanguage: string;
        pyCode: string;
    }
}