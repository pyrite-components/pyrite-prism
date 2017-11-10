import { Pyrite, core } from "pyrite";
import '../node_modules/prismjs/themes/prism.css';

import { router } from "./router";

const pyrite = new Pyrite({
	routes: router,
	rootPath: "/home"
});