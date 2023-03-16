import Head from "next/head";
import Navbar from '../ui/Navbar';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ title = "Portafolio", children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Navbar/>
        {children}
      </div>
      {/* <div className="flex flex-col justify-center gap-4 min-[920px]:flex-row">
        <div className="flex min-[920px]:justify-end flex-grow-0 min-[920px]:basis-56 h-16 min-[920px]:h-screen">
          <Navbar />
        </div>
        <div className="flex-1 max-w-[1000px] w-[90%]">{children}</div>
        <div className="flex-grow-0 hidden basis-28 min-[920px]:basis-56 min-[920px]:block">
        </div>
      </div> */}
    </>
  );
}
