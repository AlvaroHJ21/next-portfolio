import ButtonIcons from "../ui/ButtonIcons";

export default function Footer() {
  return (
    <div className="flex flex-col gap-4 items-center py-4 bg-[#181622]">
      <ButtonIcons/>
      <p className="text-gris"> &copy; Alvaro Huaysara. 2023</p>
    </div>
  );
}
