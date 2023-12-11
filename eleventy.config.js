const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");

module.exports = function(eleventyConfig){


    // eleventyConfig.addPassthroughCopy('./src/css/style.css');
    eleventyConfig.addPassthroughCopy('./src/images');
    // eleventyConfig.addPassthroughCopy('./src/js/bundle.js');
    eleventyConfig.addPassthroughCopy({
        './src/js/bundle.js': 'bundle.js'
    });
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addFilter("postDate", (dateString) => {
        dateObj = new Date(dateString);
        let monthName = dateObj.toLocaleString('en', { month: 'long' });
        let dayNumber = dateObj.getDate();
        let yearNumber = dateObj.getFullYear();
        return `${monthName} ${dayNumber}, ${yearNumber}`;
    });    

    // reading time
    eleventyConfig.addPlugin(emojiReadTime, {
        showEmoji: false
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        },
        htmlTemplateEngine: "njk"
        // markdownTemplateEngine: "njk"
    }
}