import Head from 'next/head';
import Navbar from '../ui/navbar/Navbar';

interface Props {
    title?: string;
    children: React.ReactNode;
}

export default function Layout({ title = 'Portafolio', children }: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            {children}
        </>
    );
}
