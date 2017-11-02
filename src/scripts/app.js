import { removeElements } from "./remove-elements";
import { getElementsByClass, getElementsById } from "./dom-utils";

const removeAccessibilityToolbars = (ids, classes) => {
	removeElements(ids, 	getElementsById)
	removeElements(classes, getElementsByClass)
}

const ids 	  = ['INDWrap', 'enable-toolbar', 'almareader', 'wrapAndiIconOpenMenuBtn', 'accessibility-widget']
const classes = ['menu-accessibility', 'accessibility_component', 'pojo-a11y-toolbar-link']

removeAccessibilityToolbars(ids, classes)