import BannerHero from '../../../../assets/imgs/banner-hero.png';
import Mascot from '../../../../assets/imgs/mascot.png';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => (
  <section className="w-full h-fit relative">
    <Image
      src={BannerHero}
      alt=""
      priority
      className="w-full object-cover -object-[4rem] h-[50vh]"
    />
    <div className="mx-auto absolute h-full w-full top-0 left-0">
      <div className="top-1/2 h-fit w-fit min-[931px]:left-1/2 max-[930px]:right-16 max-sm:-translate-x-1/2 -translate-y-1/2 absolute max-sm:left-1/2">
        <div className="flex flex-col w-fit gap-4 max-sm:text-center max-sm:items-center">
          <span className="text-4xl font-bold text-secondary-400 whitespace-nowrap">
            Uma marca
            <br /> para você <br />
            chamar de Lar
          </span>
          <Link href="" className="py-2 px-6 uppercase w-fit rounded-md bg-secondary-400">
            <span className="linear-tertiary clip-text font-bold">Ver ofertas</span>
          </Link>
        </div>
      </div>
      <div className="max-[930px]:hidden">
        <Image
          src={Mascot}
          alt=""
          priority
          className="absolute bottom-0 right-[10%] h-[38rem] max-[1439px]:max-h-96 w-auto max-[1710px]:right-10 max-[1116px]:right-2 max-[1116px]:max-h-72"
        />
      </div>
    </div>
  </section>
);
