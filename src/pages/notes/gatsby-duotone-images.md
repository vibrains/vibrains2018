---
path: '/gatsby-duotone-images'
title: 'Duotone Images with Gatsby'
date: '2017-11-07'
---

gatsby-transformer-sharp exposes several image processing GraphQL functions built on the Sharp image processing library. With it and Gatsby Image you can easily add fast, optimized, responsive images to your site.

So how do we set all this up?

First of all I assume that you have a Gatsby site created, if you don't, I suggest you take a look at the <a href="https://github.com/gatsbyjs/gatsby-starter-default" target="_blank">Gatsby default starter</a> which should get you up and running fairly quickly.

Once you have your Gatsby site up and running you'll need to add a few Gatsby plugins in order to start working with images:

You’ll need a few plugins for this:

**gatsby-transformer-sharp** allows you to create multiples images of the right sizes and resolutions with a query  
**gatsby-plugin-sharp** powers the connections between Sharp and Gatsby Plugins  
**gatsby-source-filesystem** plugin allows you to query files with GraphQL  

In this case we'll use Yarn with the following:

``` yarn add gatsby-transformer-sharp gatsby-plugin-sharp gatsby-source-filesystem ```

``` js
var foo = function (bar) {
	return bar++;
};

console.log(foo(5));
```

```javascript
// In your gatsby-config.js
plugins: [
{
	resolve: `gatsby-transformer-remark`,
	options: {
		plugins: [
		`gatsby-remark-prismjs`,
		]
	}
}
]
```