import { Slider } from 'components/Slider';
import Banner1 from '../../../../assets/imgs/banners/banner-1.png';
import Banner2 from '../../../../assets/imgs/banners/banner-2.png';
import Banner3 from '../../../../assets/imgs/banners/banner-3.png';
import BannerMobile1 from '../../../../assets/imgs/banners/banner-mobile-1.png';
import BannerMobile2 from '../../../../assets/imgs/banners/banner-mobile-2.png';
import BannerMobile3 from '../../../../assets/imgs/banners/banner-mobile-3.png';
import Image from 'next/image';
import Link from 'next/link';

const IMAGES = [
  { id: 1, image: Banner1, mobile: BannerMobile1, alt: '', href: '/' },
  { id: 2, image: Banner2, mobile: BannerMobile2, alt: '', href: '/' },
  { id: 3, image: Banner3, mobile: BannerMobile3, alt: '', href: '/' },
];

export const Hero = () => (
  <section className="w-full h-fit relative">
    <Slider.Root
      style={{ width: '100%' }}
      loop
      disableArrows
      autoplay={{ delay: 1000 * 10 }} // 10s
      navigation={{ nextEl: '', prevEl: '' }}
    >
      {IMAGES.map((image) => (
        <Slider.Slide key={image.id} className="w-full">
          <Link href={image.href} className="w-full h-fit">
            <Image
              src={image.image}
              alt={image.alt}
              priority
              className="w-full object-cover -object-[4rem] h-[50vh] max-md:hidden"
            />
            <Image
              src={image.mobile}
              alt={image.alt}
              priority
              className="w-full object-cover object-top h-[75vh] md:hidden"
            />
          </Link>
        </Slider.Slide>
      ))}
    </Slider.Root>
  </section>
);
