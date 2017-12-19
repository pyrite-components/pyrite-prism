const jsdom = require('jsdom-global')();

import { m } from "pyrite"
import { expect } from "chai";

import { testPrism } from './prism.mocks'

describe('Prism Component', () => {

	before(()=> {
		m.render(document.body, testPrism);
	});

	it('should load the component', ()=> {
		expect((document.body as any).vnodes[0].state.loaded).to.be.true;
	})

	it('should have code element an attribute class with value language-js ', () => {
		const code = (document.body as any).vnodes[0].dom.querySelector("code");
		expect(code.getAttribute('class')).to.be.equal('language-js')
	});
});