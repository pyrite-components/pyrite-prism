import { Render, Component } from "pyrite";
import { PrismController as Prism } from "../../src/prism/PrismController";

export const PrismComponentDefault = (
	<Prism code="<div>Example</div>" />
);

export const PrismComponent = (
	<Prism code="console.log('Example');" language="js" />
);