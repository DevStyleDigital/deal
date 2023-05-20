import Backdrop2 from '../../../../assets/imgs/backdrop-2.png';
import Image from 'next/image';
import Link from 'next/link';

import Desc1 from '../../../../assets/imgs/descriptions/desc-1.png';
import Desc2 from '../../../../assets/imgs/descriptions/desc-2.png';
import Desc3 from '../../../../assets/imgs/descriptions/desc-3.png';
import Desc4 from '../../../../assets/imgs/descriptions/desc-4.png';
import Desc5 from '../../../../assets/imgs/descriptions/desc-5.png';
import Desc6 from '../../../../assets/imgs/descriptions/desc-6.png';

const DESCRIPTIONS = [Desc6, Desc5, Desc4, Desc3, Desc2, Desc1];

export const Descriptions = () => (
  <section className="max-w px-2 flex h-fit gap-4 justify-center max-[1313px]:flex-col">
    <div className="relative block max-[1313px]:h-fit max-[1313px]:w-full h-fit w-fit 1.5xl:ml-10 min-[1365px]:ml-5">
      <Image
        src={Backdrop2}
        alt=""
        className="min-[1314px]:h-[calc((16.5rem*2)+1rem)] h-72 min-[1314px]:w-[30rem] w-full"
      />
      <div className="absolute top-0 flex text-center flex-col gap-10 left-0 w-full h-full justify-center items-center">
        <span className="block font-bold text-3xl text-secondary-400">
          Siga @domus
          <br /> no Instagram
        </span>
        <span>
          Fique por dentro das novidades,
          <br /> promoções e muito mais
        </span>
        <Link href="/" className="btn">
          <span>acessar</span>
        </Link>
      </div>
    </div>
    <div className="flex flex-wrap gap-4 justify-center">
      {DESCRIPTIONS.map((desc, i) => (
        <Image
          key={i}
          src={desc}
          alt=""
          className="max-w-[16.5rem] w-full h-full max-h-[16.5rem]"
        />
      ))}
    </div>
  </section>
);
