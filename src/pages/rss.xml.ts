import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import type { APIContext } from 'astro';

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
    const blog = await getCollection('blog');
    return rss({
        title: SITE_TITLE.toString(),
        description: SITE_DESCRIPTION.toString(),
        site: context.site?.toString() || 'https://feral.cat',
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            content: sanitizeHtml(parser.render(post.body)),
            link: `/${post.slug}/`,
        })),
  });
}