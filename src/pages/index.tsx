import { Header } from 'components/Header';
import { Hero } from 'components/Pages/Home/Hero';
import { Points } from 'components/Pages/Home/Points';
import { Products } from 'components/Pages/Home/Products';
import { Brands } from 'components/Pages/Home/Brands';
import { Descriptions } from 'components/Pages/Home/Descriptions';
import { About } from 'components/Pages/Home/About';
import { Footer } from 'components/Footer';

const Home = () => {
  return (
    <>
      <Header />
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
