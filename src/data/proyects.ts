import {
  CSSLogo,
  expressLogo,
  HTMLLogo,
  mongoDBLogo,
  nextjsLogo,
  nextUILogo,
  nodeJSLogo,
  reactLogo,
  sassLogo,
  tailwindLogo,
  vueLogo,
} from "@/assets";

type NameCategory =
  | "Todos"
  | "Landing Page"
  | "Páginas Web"
  | "Aplicaciones Web"
  | "Ecommerce"
  | "Aplicaciones Móviles";

export interface Category {
  name: NameCategory;
}

export interface Tecnology {
  name: string;
  img: string;
}

export interface Proyect {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  image2?: string;
  categories: Category[];
  tecnolgoies?: Tecnology[];
}

export const categories: Category[] = [
  {
    name: "Todos",
  },
  {
    name: "Landing Page",
  },
  {
    name: "Páginas Web",
  },
  {
    name: "Aplicaciones Web",
  },
  {
    name: "Ecommerce",
  },
  {
    name: "Aplicaciones Móviles",
  },
];

export const proyects: Proyect[] = [
  {
    id: 1,
    title: "Audífonos TechPRO",
    subtitle: "Landing Page",
    description: `El proyecto de la landing page para los audífonos "TechPRO" cuenta con cuatro secciones: una sección principal con una imagen de los audífonos y el precio, una sección de características técnicas, una sección de modelos disponibles con sus precios y una sección de registro con un formulario para que los usuarios puedan proporcionar su correo electrónico y recibir información actualizada sobre los productos de la marca. La página es completamente responsive y está diseñada con HTML y CSS puro.
      `,
    image: "/img/cover-audifonos.webp",
    image2: "/img/cover-audifonos.png",
    categories: [{ name: "Landing Page" }],
    tecnolgoies: [
      {
        name: "HTML",
        img: HTMLLogo,
      },
      {
        name: "CSS",
        img: CSSLogo,
      },
    ],
  },
  {
    id: 2,
    title: "Best Seller Books",
    subtitle: "Eccomerce",
    description:
      "Best Seller Book es un ecommerce de Libros, donde puedes comprar libros de diferentes categorías, ver los libros más vendidos, más nuevos, más valorados, etc. Cuenta con pantallas de login, registro, resultados de busqueda, detalles de un libro, carrito de compras. El proyecto fue desarrollado con tecnologías modernas como React, TailwindCSS, MongoDB, Express y NodeJS.",
    image: "/img/cover-book-ecommerce.webp",
    image2: "/img/cover-book-ecommerce.png",
    categories: [{ name: "Aplicaciones Web" }, { name: "Ecommerce" }],
    tecnolgoies: [
      {
        name: "React",
        img: reactLogo,
      },
      {
        name: "Tailwind",
        img: tailwindLogo,
      },
      {
        name: "NodeJS",
        img: nodeJSLogo,
      },
      {
        name: "ExpressJS",
        img: expressLogo,
      },
      {
        name: "MongoDB",
        img: mongoDBLogo,
      },
    ],
  },
  {
    id: 3,
    title: "Arquitectura Bosque",
    subtitle: "Landing Page",
    description:
      "Arquitectura Bosque es una landing page para una empresa dedicada a la venta y alquiler de cabañas y casas de campo. En la página se exponen los modelos de casas disponibles en un diseño moderno y minimalista. El proyecto fue desarrollado con HTML y CSS puro.",
    image: "/img/cover-bosque.webp",
    image2: "/img/cover-bosque.png",
    categories: [{ name: "Landing Page" }],
    tecnolgoies: [
      {
        name: "HTML",
        img: HTMLLogo,
      },
      {
        name: "CSS",
        img: CSSLogo,
      },
    ],
  },
  {
    id: 4,
    title: "La Cafetería",
    subtitle: "Página Web",
    description:
      'La página Web para "La Cafetería" cuenta con  6 secciones. Home: donde se muestra información resumida de las otras secciones, Nosotros: donde se expone una descripçión más detallada de la empresa, Proceso: donde se presenta los procesos de elaboracion del café desde la extraccion de los granos de café hasta la preparación de la taza de café. Menú: donde se muestra un listado de los productos que se elaboran en la cafetería y sus respectivos precios, con un diseño moderno. Galería: donde se muestran fotografías de las instalaciones y productos elaborados en la cafetería. Contacto: donde se muestra un formulario para que los usuarios puedan contactar a la empresa. El proyecto fue desarrollado con HTML, para los estilos se usó Gulp y Sass, y NodeJS como entorno de ejecución .',
    image: "/img/cover-cafeteria.webp",
    image2: "/img/cover-cafeteria.png",
    categories: [{ name: "Páginas Web" }],
    tecnolgoies: [
      {
        name: "HTML",
        img: HTMLLogo,
      },
      {
        name: "Sass",
        img: sassLogo,
      },
      {
        name: "NodeJS",
        img: nodeJSLogo,
      },
    ],
  },
  {
    id: 5,
    title: "Tiendas Muebles",
    subtitle: "Página Web",
    description:
      "Tiendas Muébles es una página web para una empresa dedicada a la venta de muebles. La página cuenta con 4 secciones: Home, Nosotros, Productos y Contacto. En el proyecto se pusieron en practica conceptos avanzados de CSS como flex y grid. El proyecto fue desarrollado con HTML y CSS puro.",
    image: "/img/cover-muebles.webp",
    image2: "/img/cover-muebles.png",
    categories: [{ name: "Landing Page" }, { name: "Páginas Web" }],
    tecnolgoies: [
      {
        name: "HTML",
        img: HTMLLogo,
      },
      {
        name: "CSS",
        img: CSSLogo,
      },
    ],
  },
  {
    id: 6,
    title: "Mis Pokemons",
    subtitle: "Aplicación Web",
    description:
      'La aplicación "Mis Pokemons" es una aplicación web que permite a los usuarios visualizar a los 151 pokemons inciales, poder seleccionarlos, observar los detalles de cada uno, guardarlos como favoritos o quirtarlos. El proyecto fue desarrollado con NextJS y NextUI. Al ser un proyecto hecho en NextJS se aprovechó su renderizado del lado del servidor (SSR) y la generación estática de sitios (SSG). La data fue consumida de una API externo.',
    image: "/img/cover-pokemon.webp",
    image2: "/img/cover-pokemon.png",
    categories: [{ name: "Aplicaciones Web" }],
    tecnolgoies: [
      {
        name: "NextJS",
        img: nextjsLogo,
      },
      {
        name: "NextUI",
        img: nextUILogo,
      },
    ],
  },
  {
    id: 7,
    title: "¿Quién es ese Pokemón?",
    subtitle: "Aplicación Web",
    description:
      "Esta es una aplicación web donde los usuario pueden medir sus conocimientos sobre los distintos pokemons que existen con solo ver su sombra, cada acierto equivale a 1 punto acumulativo, el ususario puede elegir entre 4 opciones y deberá responder antes de que el tiempo se agote, por cada respuesta incorrecta o tiempo vencido se restará 1 corazón de 3, cuando se quede sin corazones la partida habrá finalizado y se mostrará el puntaje total. El proyecto fue desarrollado con VueJS. La data fue consumida de una API externo.",
    image: "/img/cover-pokemon-2.webp",
    image2: "/img/cover-pokemon-2.png",
    categories: [{ name: "Aplicaciones Web" }],
    tecnolgoies: [
      {
        name: "Vue",
        img: vueLogo,
      },
    ],
  },
  {
    id: 8,
    title: "eWallet",
    subtitle: "Landing Page",
    description:
      "eWallet es una landing page promocionar una apliacion móvil para el manejo de finanzas personales. El proyecto fue desarrollado con HTML y CSS puro.",
    image: "/img/cover-wallet.webp",
    image2: "/img/cover-wallet.png",
    categories: [{ name: "Landing Page" }],
    tecnolgoies: [
      {
        name: "HTML",
        img: HTMLLogo,
      },
      {
        name: "CSS",
        img: CSSLogo,
      },
    ],
  },
];
