/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent } from '../astro.f5a0c553.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.3b301471.mjs';
import { b as books } from './_book_.astro.4b226bc4.mjs';
import 'path-to-regexp';
import 'cookie';
import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'fs';
import 'http';
import 'tls';
import 'mime';
import 'string-width';

const $$Astro$3 = createAstro("https://jaumetruyols.github.io/pruebabooks.github.io/");
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-6xl font-black uppercase text-center py-8">
    Libreria de
    <span class="block text-[58px] text-8xl">programación</span>
</h1>`;
}, "C:/Users/jaume/Documents/intelliJ/pruebabooks.github.io/src/components/Title.astro");

const $$Astro$2 = createAstro("https://jaumetruyols.github.io/pruebabooks.github.io/");
const $$BookItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BookItem;
  const {
    id,
    title,
    img
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl"${addAttribute(`/${id}`, "href")}>
    <img${addAttribute(`Portada del libro ${title}`, "alt")} class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"${addAttribute(img, "src")}${addAttribute(`view-transition-name: book-${id}`, "style")}>
</a>`;
}, "C:/Users/jaume/Documents/intelliJ/pruebabooks.github.io/src/components/BookItem.astro");

const $$Astro$1 = createAstro("https://jaumetruyols.github.io/pruebabooks.github.io/");
const $$ListOfBooks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListOfBooks;
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">
    ${books.map(({ id, title, img }) => {
    return renderTemplate`<li>
                        ${renderComponent($$result, "BookItem", $$BookItem, { "id": id, "title": title, "img": img })}
                    </li>`;
  })}
</ul>`;
}, "C:/Users/jaume/Documents/intelliJ/pruebabooks.github.io/src/components/ListOfBooks.astro");

const $$Astro = createAstro("https://jaumetruyols.github.io/pruebabooks.github.io/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Libreria de practica de animacion fade in Astro" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<main class="m-auto max-w-4xl">
        ${renderComponent($$result2, "Title", $$Title, {})}
        ${renderComponent($$result2, "ListOfBooks", $$ListOfBooks, {})}
       <!-- <ul class="grid grid-cols-2 md:grid-cols-3 grap-3">
            <li>
                <a href="/clean-code">
                    <img class="aspect-[200/300] h-full object-cover w-full max-w-full rounded-lg" src="http://"/>
                </a>
            </li>
        </ul>-->

        <!--<h1>Welcome to <span class="text-gradient">Astro</span></h1>
        <p class="instructions">
            To get started, open the directory <code>src/pages</code> in your project.<br />
            <strong>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
        </p>
        <ul role="list" class="link-card-grid">
            <Card
                href="https://docs.astro.build/"
                title="Documentation"
                body="Learn how Astro works and explore the official API docs."
            />
            <Card
                href="https://astro.build/integrations/"
                title="Integrations"
                body="Supercharge your project with new frameworks and libraries."
            />
            <Card
                href="https://astro.build/themes/"
                title="Themes"
                body="Explore a galaxy of community-built starter themes."
            />
            <Card
                href="https://astro.build/chat/"
                title="Community"
                body="Come say hi to our amazing Discord community. ❤️"
            />
        </ul>-->
    </main>
` })}

<!--<style>
	main {
		margin: auto;
		padding: 1.5rem;
		max-width: 60ch;
	}
	h1 {
		font-size: 3rem;
		font-weight: 800;
		margin: 0;
	}
	.text-gradient {
		background-image: var(&#45;&#45;accent-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 400%;
		background-position: 0%;
	}
	.instructions {
		line-height: 1.6;
		margin: 1rem 0;
		border: 1px solid rgba(var(&#45;&#45;accent), 25%);
		background-color: white;
		padding: 1rem;
		border-radius: 0.4rem;
	}
	.instructions code {
		font-size: 0.875em;
		font-weight: bold;
		background: rgba(var(&#45;&#45;accent), 12%);
		color: rgb(var(&#45;&#45;accent));
		border-radius: 4px;
		padding: 0.3em 0.45em;
	}
	.instructions strong {
		color: rgb(var(&#45;&#45;accent));
	}
	.link-card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
		gap: 1rem;
		padding: 0;
	}
</style>-->`;
}, "C:/Users/jaume/Documents/intelliJ/pruebabooks.github.io/src/pages/index.astro");

const $$file = "C:/Users/jaume/Documents/intelliJ/pruebabooks.github.io/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
