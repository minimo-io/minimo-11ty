const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");

module.exports = function(eleventyConfig){

    // ingore searching for templates in this folders
    eleventyConfig.ignores.add('src/tests');
    eleventyConfig.ignores.add('src/blog/2-the-lightning-network.md');

    // additional file copies
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy({'src/js/bundle.js': 'bundle.js'});
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
    eleventyConfig.addPassthroughCopy('src/.well-known');

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