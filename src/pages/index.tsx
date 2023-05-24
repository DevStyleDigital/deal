import { Header } from 'components/Header';
import { Hero } from 'components/Pages/Home/Hero';
import { Points } from 'components/Pages/Home/Points';
import { Products } from 'components/Pages/Home/Products';
import { Brands } from 'components/Pages/Home/Brands';
import { Descriptions } from 'components/Pages/Home/Descriptions';
import { About } from 'components/Pages/Home/About';
import { Footer } from 'components/Footer';
import { WhatsIcon } from 'assets/svgs/whats';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Header />
      <div className="fixed z-50 right-0 top-1/2 h-fit -translate-y-1/2 linear-primary/180">
        <Link
          href="https://api.whatsapp.com/send?phone=5515996506060"
          target="_blank"
          className="block w-fit h-fit p-4 px-5"
        >
          <WhatsIcon className="text-white w-9 h-8" />
        </Link>
      </div>
      <main className="flex flex-col gap-20 w-full">
        <Hero />
        <Points />
        <Products />
        <Brands />
        <Descriptions />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;
