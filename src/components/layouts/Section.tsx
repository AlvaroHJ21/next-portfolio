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
            <div className='max-w-[1200px] w-[90%] m-auto'>
                {children}
            </div>
        </section>
    );
}
