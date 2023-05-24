import Image from 'next/image';
import { Logo } from 'components/Logo';
import { WhatsIcon } from 'assets/svgs/whats';
import Backdrop1 from '../../assets/imgs/backdrop-1.png';

export const Header = () => {
  return (
    <header className="h-fit relative w-full linear-primary">
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <Image
          src={Backdrop1}
          alt=""
          priority
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="max-w flex py-8 max-ml:flex-col relative sm:px-16 p-4 h-full w-full items-center gap-8 max-lg:justify-between">
        <div className="h-fit">
          <Logo className="w-60 h-auto" />
        </div>
        <div className="text-white flex max-sm:flex-col h-fit w-fit items-center font-bold gap-4 sm:gap-16 lg:ml-[15vw] mx-0">
          <span className="uppercase sm:whitespace-nowrap text-center">
            Frete Gratis para toda região*
          </span>

          <span className="flex items-center gap-2">
            <WhatsIcon />
            <span className="text-xs">15</span>
            <span>99650.6060</span>
          </span>
        </div>
      </div>
    </header>
  );
};
