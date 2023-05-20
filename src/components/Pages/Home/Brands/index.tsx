import { Slider } from 'components/Slider';

import Brand1 from '../../../../assets/imgs/brands/brand-1.png';
import Brand2 from '../../../../assets/imgs/brands/brand-2.png';
import Brand3 from '../../../../assets/imgs/brands/brand-3.png';
import Brand4 from '../../../../assets/imgs/brands/brand-4.png';
import Brand5 from '../../../../assets/imgs/brands/brand-5.png';
import Image from 'next/image';

const BRANDS = [
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
];

export const Brands = () => (
  <section className="max-w text-center">
    <span className="uppercase text-xl mb-11 block font-medium">
      AS MARCAS MAIS PROCURADAS
    </span>

    <Slider.Root
      loop
      slidesPerView={1}
      spaceBetween={4}
      centeredSlides
      autoplay={{ delay: 600 }}
      breakpoints={{
        1316: { slidesPerView: 5, centeredSlides: false, spaceBetween: 20 },
        1102: { slidesPerView: 3, centeredSlides: false, spaceBetween: 20 },
        552: { slidesPerView: 2, centeredSlides: false, spaceBetween: 20 },
      }}
    >
      {BRANDS.map((brand, i) => (
        <Slider.Slide
          key={i}
          className="select-none max-w-[209px] border-gray-400 border-[1px] rounded-xl"
        >
          <div className="flex items-center justify-center">
            <div className="w-full flex items-center justify-center p-2 h-[94px]">
              <Image src={brand} alt="" className="h-auto w-auto" />
            </div>
          </div>
        </Slider.Slide>
      ))}
    </Slider.Root>
  </section>
);
