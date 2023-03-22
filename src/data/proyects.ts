type NameCategory = "React" | "Mongodb" | "Flutter" | "Express" | "Nodejs";

export interface Proyect {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  image2?: string;
  categories: { name: NameCategory }[];
}

export const proyects: Proyect[] = [
  {
    id: 1,
    title: "Audífonos TechPRO",
    subtitle: "Landing Page",
    description:
      'El proyecto de la landing page para los audífonos "TechPRO" cuenta con cuatro secciones: una sección principal con una imagen de los audífonos y el precio, una sección de características técnicas.',
    // description:
    //   'El proyecto de la landing page para los audífonos "TechPRO" cuenta con cuatro secciones: una sección principal con una imagen de los audífonos y el precio, una sección de características técnicas, una sección de modelos disponibles con sus precios y una sección de registro con un formulario para que los usuarios puedan proporcionar su correo electrónico y recibir información actualizada sobre los productos de la marca. La página es completamente responsive y está diseñada con HTML y CSS.',
    image: "/img/cover-audifonos.webp",
    image2: "/img/cover-audifonos.png",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 2,
    title: "Best Seller Books",
    subtitle: "Eccomerce",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-book-ecommerce.webp",
    image2: "/img/cover-book-ecommerce.png",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 3,
    title: "Arquitectura Bosque",
    subtitle: "Landing Page",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-bosque.webp",
    image2: "/img/cover-bosque.png",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 4,
    title: "La Cafetería",
    subtitle: "Página Web",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-cafeteria.webp",
    image2: "/img/cover-cafeteria.png",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 5,
    title: "Tiendas Muebles",
    subtitle: "Página Web",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-muebles.webp",
    image2: "/img/cover-muebles.png",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 6,
    title: "Mis Pokemons",
    subtitle: "Aplicación Web",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-pokemon.webp",
    image2: "/img/cover-pokemon.png",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 7,
    title: "¿Quién es ese Pokemón?",
    subtitle: "Aplicación Web",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-pokemon-2.webp",
    image2: "/img/cover-pokemon-2.png",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 8,
    title: "eWallet",
    subtitle: "Landing Page",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-wallet.webp",
    image2: "/img/cover-wallet.png",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
];
