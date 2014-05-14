define('blog-resources/resources/Blogs',[], function () {
	function Blogs() {
		return {
			query: function (params) {
				return [{
					title: "Blog Entry 1",
					summary: "some text about a summary",
					author: "Andrew Silluron",
					date: new Date(),
					content: "This is the content of blog entry 1, it really is"
				}, {
					title: "Blog Entry 2",
					summary: "second summary",
					author: "Marcus Tractor",
					date: new Date(),
					content: "This is the content of blog entry 1, it really is"
				}, {
					title: "Blog Entry 3",
					summary: "some text about a summary",
					author: "Darrel Yutes",
					date: new Date(),
					content: "This is the content of blog entry 1, it really is"
				}, {
					title: "Blog Entry 4",
					summary: "some text about a summary",
					author: "Major Jamon",
					date: new Date(),
					content: "This is the content of blog entry 1, it really is"
				}];
			}
		};
	}

	return Blogs;
});
define('blog-resources/resources',["blog-resources/resources/Blogs"], function (Blogs) {
	module.exports = angular.module("blog-resources", [])
		.service("Blogs", Blogs);
});
