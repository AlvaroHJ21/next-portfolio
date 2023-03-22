export default function Section({
    id,
    children,
}: {
    id: string;
    children: React.ReactNode;
}) {
    return (
        <section
            id={id}
            className='text-white'
        >
            <div className='container w-[90%] m-auto'>
                {children}
            </div>
        </section>
    );
}
