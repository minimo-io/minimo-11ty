const pluginEmojiReadTime = require('@11tyrocks/eleventy-plugin-emoji-readtime')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const feedPlugin = require('@11ty/eleventy-plugin-rss')
// const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')

const pluginDrafts = require('./eleventy.config.drafts.js')
// const rimraf = require('rimraf')
const fs = require('fs')
const path = require('path')

module.exports = function (eleventyConfig) {
    // ingore searching for templates in this folders
    eleventyConfig.ignores.add('src/tests')

    // additional file copies
    if (process.env.ELEVENTY_RUN_MODE != 'build') {
        eleventyConfig.addPassthroughCopy('src/assets/css')
    }
    eleventyConfig.addPassthroughCopy('src/assets/gpxs')
    eleventyConfig.addPassthroughCopy('src/assets/images')
    eleventyConfig.addPassthroughCopy('src/assets/gallery')
    eleventyConfig.addPassthroughCopy('src/assets/js')
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' })
    eleventyConfig.addPassthroughCopy('src/.well-known') // for nostr
    eleventyConfig.addPassthroughCopy('src/feed.xml')

    eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`)
    // if content is markdown then wrap it around, else: free will!
    // because sometimes I need more flexibility in expense of clarity
    eleventyConfig.addShortcode('templatey', function (content) {
        let templateExtension = this.page.inputPath.toString().split('.').pop()
        if (templateExtension == 'md') {
            return `<div class="wrapper ismarkdown">${content}</div>`
        } else {
            return content
        }
    })

    eleventyConfig.addFilter('postDate', (dateString) => {
        dateObj = new Date(dateString)
        let monthName = dateObj.toLocaleString('en', { month: 'long' })
        let dayNumber = dateObj.getDate()
        let yearNumber = dateObj.getFullYear()
        return `${monthName} ${dayNumber}, ${yearNumber}`
    })

    eleventyConfig.addFilter('rideDate', (dateString) => {
        dateObj = new Date(dateString)
        let monthNumber = dateObj.getMonth()
        if (monthNumber < 10) monthNumber = '0' + monthNumber
        let dayNumber = dateObj.getDate()
        if (dayNumber < 10) dayNumber = '0' + dayNumber
        let yearNumber = dateObj.getFullYear()
        return `${yearNumber}-${monthNumber}-${dayNumber}`
    })

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter('head', (array, n) => {
        if (!Array.isArray(array) || array.length === 0) {
            return []
        }
        if (n < 0) {
            return array.slice(n)
        }

        return array.slice(0, n)
    })

    // Remove iframes from a text (for the atom feed)
    eleventyConfig.addFilter('removeIframes', (htmlContent) => {
        return htmlContent.replace(/<iframe\b[^>]*>(.*?)<\/iframe>/gi, '')
    })

    // base plugin
    // eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
    // reading time
    eleventyConfig.addPlugin(pluginEmojiReadTime, {
        showEmoji: false,
    })

    // syntaxhighlighter
    eleventyConfig.addPlugin(pluginSyntaxHighlight, {
        preAttributes: { tabindex: 0 },
    })

    // drafts functionality as in https://www.11ty.dev/docs/quicktips/draft-posts/
    eleventyConfig.addPlugin(pluginDrafts)
    // feed
    eleventyConfig.addPlugin(feedPlugin, {})

    eleventyConfig.addGlobalData('runMode', () => {
        return process.env.ELEVENTY_RUN_MODE
    })

    // add the photos collection from assets/gallery
    eleventyConfig.addGlobalData('galleryImages', () => {
        const directoryPath = path.join(__dirname, 'src/assets/gallery')

        // Read all files in the directory
        const files = fs.readdirSync(directoryPath)
        return files.map((file) => {
            let fileExt = path.extname(file)
            if (fileExt != '.webp') return false
            return {
                name: file,
                path: path.join('/assets/gallery', file), // Adjust this path as needed
            }
        })
    })

    return {
        dir: {
            input: 'src',
            output: '_site',
        },
        htmlTemplateEngine: 'njk',
        // markdownTemplateEngine: "njk"
    }
}
