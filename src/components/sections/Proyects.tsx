import Section from "../layouts/Section";
import Button from "../ui/Button";

type NameCategory = "react" | "mongodb" | "flutter" | "express" | "nodejs";

interface Proyect {
  id: number;
  title: string;
  description: string;
  image?: string;
  categories: { name: NameCategory }[];
}

const proyects: Proyect[] = [
  {
    id: 1,
    title: "Ecommerce Books",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image:
      "https://s3-alpha.figma.com/hub/file/763524909/8af4a269-fb28-40e0-866c-9b9c7851b69f-cover.png",
    categories: [
      { name: "mongodb" },
      { name: "express" },
      { name: "react" },
      { name: "nodejs" },
    ],
  },
  {
    id: 2,
    title: "Ecommerce Books",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image:
      "https://s3-alpha.figma.com/hub/file/763524909/8af4a269-fb28-40e0-866c-9b9c7851b69f-cover.png",
    categories: [
      { name: "mongodb" },
      { name: "express" },
      { name: "react" },
      { name: "nodejs" },
    ],
  },
  {
    id: 3,
    title: "Ecommerce Books",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image:
      "https://s3-alpha.figma.com/hub/file/763524909/8af4a269-fb28-40e0-866c-9b9c7851b69f-cover.png",
    categories: [
      { name: "mongodb" },
      { name: "express" },
      { name: "react" },
      { name: "nodejs" },
    ],
  },
];

export default function Proyects() {
  return (
    <Section id="proyects">
      <div className="pt-16">
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-black uppercase text-32">
            Mis <span className="text-azul-verdoso">proyectos</span>
          </h2>
          <div className="flex gap-2">
            <Button text="Frontend" variant="outline" />
            <Button text="Full stack" />
            <Button text="Móvil" variant="outline" />
          </div>
          <div className="flex flex-col gap-8">
            {proyects.map((proyect) => (
              <div key={proyect.id} className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-center">
                <div>
                  <img src={proyect.image} alt={proyect.title} />
                </div>
                <div className="flex flex-col gap-4 md:justify-center">
                  <h3 className="text-32">{proyect.title}</h3>
                  <p>{proyect.description}</p>
                  <div className="h-1 m-auto w-36 bg-azul-verdoso"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
