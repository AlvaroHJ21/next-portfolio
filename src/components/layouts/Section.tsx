export default function Section({
    id,
    backgroundColor,
    children,
}: {
    id: string;
    backgroundColor?: string;
    children: React.ReactNode;
}) {
    return (
        <section
            id={id}
            className='text-white bg-azul-marino-oscuro'
        >
            <div className='max-w-[1000px] w-[90%] min-h-screen m-auto'>
                {children}
            </div>
        </section>
    );
}
