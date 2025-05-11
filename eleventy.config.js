
export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.setOutputDirectory("docs");
    eleventyConfig.addPassthroughCopy("./assets/main.css");
    eleventyConfig.addWatchTarget("./assets/main.css");
    eleventyConfig.addPassthroughCopy("./assets/*.jpg");
    eleventyConfig.addPassthroughCopy("./assets/*.ttf");
    eleventyConfig.addNunjucksFilter("log", (val,item) => console.log(val,item));
};