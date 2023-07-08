/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro.f5a0c553.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.3b301471.mjs';

const books = [
    {
        id: 'clean-code',
        title: 'Clean Code: Manual de desarrollo ágil de software',
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg",
        opinion: 'Un clásico entre los clásicos del mundo de la programación. Aunque en pleno 2023 yo tengo una opinión un poco polémica. No me parece un libro que recomendaría a todo el mundo, especialmente a aquellas personas que están aprendiendo. Además, tiene un tono muy dogmático y existe gente que se lo toma, peligrosamente, como la biblia del desarrollo. Pero si eres capaz de leerlo tomando perspectiva, hay cosas interesantes que todavía están vigentes. Ojo que todos los ejemplos de código están basados en Java y mucha programación orientada a objetos.',
        author: 'Robert C. Martin',
    },
    {
        id: 'aprendiendo-git',
        title: 'Aprendiendo Git',
        img: "https://d2sofvawe08yqg.cloudfront.net/aprendiendo-git/s_hero2x?1628527844",
        opinion: 'Un libro muy interesante para aprender Git. Mucho más allá de los comandos. Habla de buenas prácticas, estrategias de trabajo en equipo y flujos para mejorar la entrega de software. Además, está escrito por un autor español, lo que siempre es de agradecer.',
        author: 'Miguel Angel Durán'
    },
    {
        id: 'the-clean-coder',
        title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347470803i/10284614.jpg",
        opinion: '"The Clean Coder: Un Código de Conducta para Programadores Profesionales" es un libro excepcional que revoluciona la forma en que los programadores abordan su trabajo. Con sus ideas prácticas e inspiradoras, establece un nuevo estándar de profesionalismo en la industria del desarrollo de software. Su enfoque en la responsabilidad personal, el aprendizaje continuo y la comunicación efectiva, promueve la entrega de código limpio, la mejora constante y la colaboración en equipo. En resumen, este libro es una herramienta indispensable que empodera a los programadores para alcanzar la excelencia y contribuir al éxito de sus organizaciones.',
        author: 'Robert C. Martin',
    },
    {
        id: 'javascript-the-good-parts',
        title: 'JavaScript: The Good Parts',
        img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328834793i/2998152.jpg',
        opinion: '"JavaScript: The Good Parts" es un libro imprescindible que destaca las mejores prácticas y características esenciales de JavaScript. A través de una visión concisa y perspicaz, el autor nos guía por el mundo de este lenguaje, revelando su potencial y resaltando sus aspectos más poderosos y efectivos. Con un enfoque en la simplicidad y la elegancia, el libro ofrece una guía práctica para aprovechar al máximo las partes más sólidas y confiables de JavaScript, permitiéndonos escribir un código claro y eficiente. En resumen, esta obra es una valiosa herramienta para cualquier desarrollador que desee dominar el arte de programar con JavaScript.',
        author: 'Douglas Crockford',
    },
    {
        id: 'eloquent-javascript',
        title: 'Eloquent JavaScript: A Modern Introduction to Programming',
        img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1308260856i/8910666.jpg',
        opinion: '"Eloquent JavaScript" es un libro extraordinario que lleva a los lectores en un viaje apasionante a través del mundo de la programación en JavaScript. Con un enfoque amigable y accesible, el autor nos introduce en los conceptos fundamentales del lenguaje y nos guía hábilmente a través de ejercicios prácticos y desafiantes. Con una combinación equilibrada de teoría y práctica, el libro fomenta el pensamiento lógico y creativo, y nos enseña a desarrollar soluciones elegantes y eficientes. En resumen, "Eloquent JavaScript" es una guía imprescindible para aquellos que desean dominar este poderoso lenguaje de programación y explorar todo su potencial.',
        author: 'Marijn Haverbeke',
    },
    {
        id: 'design-patterns',
        title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
        img: 'https://m.media-amazon.com/images/I/51JYkEpbhzL._SY466_.jpg',
        opinion: '"Design Patterns: Elements of Reusable Object-Oriented Software" es un clásico en el mundo del desarrollo de software. Escrito por el grupo conocido como "Gang of Four" (Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides), este libro presenta una colección de patrones de diseño que ofrecen soluciones probadas y reutilizables a problemas comunes en el diseño de software orientado a objetos. Con explicaciones claras y ejemplos prácticos, el libro ayuda a los desarrolladores a mejorar la estructura y flexibilidad de sus sistemas, promoviendo la modularidad, la reutilización y la mantenibilidad del código.',
        author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
    },
    {
        id: 'the-pragmatic-programmer',
        title: 'The Pragmatic Programmer: Your Journey to Mastery',
        img: 'https://m.media-amazon.com/images/I/71f743sOPoL._SY466_.jpg',
        opinion: '"The Pragmatic Programmer: Your Journey to Mastery" es un libro esencial para todo programador que aspire a alcanzar la maestría en su oficio. Escrito por Andrew Hunt y David Thomas, este libro ofrece consejos prácticos y perspectivas únicas sobre diversos aspectos del desarrollo de software, incluyendo el diseño, la implementación, la depuración, el rendimiento y más. A través de anécdotas, ejemplos y principios fundamentales, los autores nos guían en un viaje de crecimiento profesional, fomentando habilidades técnicas y actitudes pragmáticas que nos ayudarán a enfrentar los desafíos del desarrollo de software de manera efectiva.',
        author: 'Andrew Hunt, David Thomas',
    },
    {
        id: 'refactoring',
        title: 'Refactoring: Improving the Design of Existing Code',
        img: 'https://m.media-amazon.com/images/I/81ezCJTXFKL._SY466_.jpg',
        opinion: '"Refactoring: Improving the Design of Existing Code" es un libro imprescindible para aquellos desarrolladores que deseen mejorar la calidad y mantenibilidad de su código existente. Escrito por Martin Fowler, este libro presenta técnicas prácticas y patrones de refactorización que nos permiten reestructurar el código de manera incremental, sin cambiar su funcionalidad externa. A través de ejemplos detallados y explicaciones claras, el autor nos muestra cómo identificar y aplicar refactorizaciones efectivas, mejorando así la legibilidad, flexibilidad y rendimiento del software.',
        author: 'Martin Fowler',
    },

    {
        id: 'the-mythical-man-month',
        title: 'The Mythical Man-Month: Essays on Software Engineering',
        img: 'https://m.media-amazon.com/images/I/51Al66uQmcL._SY445_SX342_.jpg',
        opinion: '"The Mythical Man-Month: Essays on Software Engineering" es un libro clásico que aborda los desafíos y problemas comunes en el desarrollo de software. Escrito por Frederick P. Brooks Jr., este libro ofrece una colección de ensayos que exploran aspectos clave de la ingeniería de software, como la gestión de proyectos, la productividad del equipo, la planificación y más. A través de experiencias reales y reflexiones profundas, el autor nos brinda valiosas lecciones sobre cómo abordar de manera efectiva el desarrollo de software a gran escala.',
        author: 'Frederick P. Brooks Jr.',
    },

    {
        id: 'domain-driven-design',
        title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
        img: 'https://m.media-amazon.com/images/I/61aFldsgAmL._SY466_.jpg',
        opinion: '"Domain-Driven Design: Tackling Complexity in the Heart of Software" es un libro fundamental para aquellos que desean desarrollar software de calidad y con un enfoque en el dominio del problema. Escrito por Eric Evans, este libro presenta principios y patrones de diseño que ayudan a los equipos de desarrollo a comprender y modelar mejor el dominio en el que trabajan. A través de ejemplos prácticos y estrategias claras, el autor nos muestra cómo construir sistemas software de alta calidad, centrados en el negocio y capaces de adaptarse a los cambios en los requisitos.',
        author: 'Eric Evans',
    },
    {
        id: '404',
        img: 'https://media.tenor.com/Aa8mokQYPQ8AAAAd/adult-swim-this-is-fine.gif'
    }
];

const $$Astro = createAstro("https://jaumetruyols.github.io/pruebabooks.github.io/");
const $$book = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$book;
  const { book } = Astro2.params;
  const info = books.find((b) => b.id === book);
  if (!info) {
    Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Libro " + info.title }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<main class="m-auto max-w-4xl">
        <header class="relative">
            <a href="/" type="button" class="fixed left-2 top-2 text-white bg-black hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-black dark:hover:bg-blue-950 dark:focus:ring-blue-800">
                <svg class="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                </svg>
                <span class="sr-only">Icon description</span>
            </a>

            <h1 class="scale-50 font-black uppercase text-6xl md:text-8xl text-center py-8 px-4" style="view-transition-name: book-title">
                Libreria de
                <span class="block text-[36px] md:text-[58px]">programación</span>
            </h1>

        </header>
        <div class="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-x-12 mt-4 md:mt-20 px-8">

            <div class="flex flex-col mb-10">
                <picture class="mb-8 w-full relative">
                    <img class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"${addAttribute(info.img, "src")}${addAttribute(`Portada del libro ${info.title}`, "alt")}${addAttribute(`view-transition-name: book-${info.id}`, "style")}>
                </picture>

                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center">
                    <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path>
                    </svg>
                    Comprar ahora
                </a>
            </div>

            <aside class="mt-10 md:mt-0">
                <h1 class="text-5xl font-black mb-4">${info.title}</h1>
                <!--<div class="relative mb-4">
                    &lt;!&ndash; Agregar el GIF como imagen de fondo con transparencia &ndash;&gt;
                    <div
                            class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-100 rounded"
                            style={{
                                backgroundImage: \`url(https://usagif.com/wp-content/uploads/gifs/book-72.gif)\`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                    ></div>
                    <p class="text-lg p-4 relative z-10">{info.opinion}</p>
                </div>-->
                <p class="text-lg mb-4">${info.opinion}</p>
                <p><strong>Autor:</strong> <span class="font-semibold text-gray-800">${info.author}</span></p>
            </aside>
        </div>

    </main>
` })}`;
}, "C:/Users/jaume/Documents/intelliJ/pruebabooks.github.io/src/pages/[book].astro");

const $$file = "C:/Users/jaume/Documents/intelliJ/pruebabooks.github.io/src/pages/[book].astro";
const $$url = "/[book]";

const _book_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$book,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _book_ as _, books as b };
