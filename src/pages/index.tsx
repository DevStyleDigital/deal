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
      <section className="w-full md:h-[35rem] h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.584915493165!2d-47.623089748725796!3d-23.511455905338625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5ed6e568b7c3d%3A0x4c515549133e4aa9!2sR.%20Benedito%20Antunes%20Ribeiro%2C%20721%20-%20Jd%20M%20da%20Gl%C3%B3ria%2C%20Ara%C3%A7oiaba%20da%20Serra%20-%20SP%2C%2018190-000!5e0!3m2!1spt-BR!2sbr!4v1685051571540!5m2!1spt-BR!2sbr"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </section>
      <Footer />
    </>
  );
};

export default Home;
