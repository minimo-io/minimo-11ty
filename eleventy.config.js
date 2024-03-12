const pluginEmojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginDrafts = require("./eleventy.config.drafts.js");

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

    eleventyConfig.addFilter("rideDate", (dateString) => {
        dateObj = new Date(dateString);
        let monthNumber = dateObj.getMonth();
        if (monthNumber < 10) monthNumber = "0"+monthNumber;     
        let dayNumber = dateObj.getDate();
        if (dayNumber < 10) dayNumber = "0"+dayNumber;        
        let yearNumber = dateObj.getFullYear();
        return `${yearNumber}-${monthNumber}-${dayNumber}`;
    });    

    // reading time
    eleventyConfig.addPlugin(pluginEmojiReadTime, {
        showEmoji: false
    });

    // syntaxhighlighter
    eleventyConfig.addPlugin(pluginSyntaxHighlight, {
        preAttributes: { tabindex: 0 }
    });

    // drafts functionality as in https://www.11ty.dev/docs/quicktips/draft-posts/
    eleventyConfig.addPlugin(pluginDrafts);


    return {
        dir: {
            input: "src",
            output: "_site"
        },
        htmlTemplateEngine: "njk"
        // markdownTemplateEngine: "njk"
    }
}