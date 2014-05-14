define(["blog-resources/resources/Blogs"], function (Blogs) {
	module.exports = angular.module("blog-resources", [])
		.service("Blogs", Blogs);
});