import { Component, m, Template } from "pyrite";
import { PrismTemplate } from "./PrismTemplate";

export interface PrismAttributes {
    language: string;
    code: string;
}

@Template(PrismTemplate)
export class PrismController extends Component<PrismAttributes>{
}