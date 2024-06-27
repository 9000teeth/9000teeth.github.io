---
title: 'New site & blog'
pubDate: 'Jun 26 2024'
---

I hosted the first version of this site, idly up for almost three years, with GitHub Pages. It was three HTML pages stapled together. I was a simple woman and needed nothing better. But if all goes right, I'll be making proper (i.e. presentable) development efforts soon, which I'd like to document as I go. I also wanted someplace to host the art I make, and you know how galleries bloat.

A static site generator, then, had its merits from the outset. I thought of using [Jekyll](https://jekyllrb.com/), since GitHub Pages processes sites through it already. Or [Hugo](https://gohugo.io/). I chose Astro ultimately because I am most familiar with JavaScript, and yet Astro deploys with little to no client-side JS. (I don't plan on hosting with GitHub Pages forever.)

It's relatively easy on the component libraries, too, and framework agnostic, not that I ended up using any frameworks.

Couple more things:

I'm a fan of the [barba.js](https://barba.js.org/) library, which uses AJAX to effectively turn a site into a single page application. Astro gets close with the ViewTransitions routing component: The static components it needs are there to begin with, so there's no live generation of content. The [ViewTransitions API itself](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) lacks support for quite a few browsers, though, including the one I'm using.

Finally&mdash;first attempt at SCSS. I like it. Unsure if it was worth breaking my "fewer dependencies" rule for&mdash;part of what turned me off Ruby was the aspect of keeping all those Gemfiles up to date&mdash;since/but it is marginally faster to write for a site this size.