module.exports = function(eleventyConfig){

    // eleventyConfig.addPassthroughCopy('./src/css/style.css');
    eleventyConfig.addPassthroughCopy('./src/images');
    // eleventyConfig.addPassthroughCopy('./src/js/bundle.js');
    eleventyConfig.addPassthroughCopy({
        './src/js/bundle.js': 'bundle.js'
    });

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}