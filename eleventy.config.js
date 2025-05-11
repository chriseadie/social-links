
export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.setOutputDirectory("docs");
	eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
		autoescape: false, // warning: don’t do this!
	});
};