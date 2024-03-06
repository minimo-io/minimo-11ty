const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");

module.exports = function(eleventyConfig){

    // ingore searching for templates in this folders
    eleventyConfig.ignores.add('src/tests');

    // additional file copies
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
    eleventyConfig.addPassthroughCopy('src/.well-known');

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    // if content is markdown then wrap it around, else: free will!
    // because sometimes I need more flexibility in expense of clarity
    eleventyConfig.addShortcode("templatey", function(content){
        let templateExtension = this.page.inputPath.toString().split('.').pop();
        if (templateExtension == "md"){
            return `<div class="wrapper ismarkdown">${content}</div>`;
        }else{
            return content;
        }
    });

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