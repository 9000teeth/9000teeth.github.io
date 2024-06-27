---
title: 'New site & blog'
pubDate: 'Jun 26 2024'
---

I hosted the first version of this site, idly up for almost three years, with GitHub Pages. It was three HTML pages stapled together. I was a simple cat and needed nothing better. But if all goes right, I'll be making proper (i.e. presentable) development efforts soon, which I'd like to document as I go. I also wanted someplace to host the art I make, and you know how galleries bloat.

So a static site generator had its merits from the outset. I thought of using [Jekyll](https://jekyllrb.com/), since GitHub Pages processes sites through it already. Or [Hugo](https://gohugo.io/). I ultimately chose [Astro.js](https://astro.build/) for syntax familiarity's sake, plus Astro is framework agnostic, so it'll be easier to reuse or expand with it. The bit of client-side JS I have now isn't ideal, but I don't plan on hosting with GitHub Pages forever.

Couple more things:

I'm a fan of the [barba.js](https://barba.js.org/) library, which uses AJAX to effectively turn a site into a single page application. Astro gets close with the ViewTransitions routing component, only the HTML it grabs is all rendered at build time. The [ViewTransitions API itself](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) lacks support for quite a few browsers, though, including the one I'm using.

Finally&mdash;first attempt at SCSS. I like it. Unsure if it was worth breaking my "fewer dependencies" rule for&mdash;tepidity toward Rails has a bit to do with its Gems system&mdash;since/but it is just marginally faster to write for a site this size.