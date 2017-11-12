import { Component, Attributes, Children, core } from "pyrite";
import { PrismTemplate } from "./PrismTemplate";

@Component(PrismTemplate)
export class PrismController {
    @Attributes attrs: {
        language: string;
        code: string;
    };
}