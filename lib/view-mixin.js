var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

var renderer = require('./renderer');

modules.exports = {
	renderer: renderer,

	attachElContent: function(tree) {
		var patches,
			rootNode;

		if(this.tree == null) {
			rootNode = createElement(tree);
			this.$el.replaceWith(rootNode);
		} else {
			patches = diff(this.tree, tree);
			rootNode = patch(this.el, patches);
		}

		this.setElement(rootNode);
		this.tree = tree;
	}
};