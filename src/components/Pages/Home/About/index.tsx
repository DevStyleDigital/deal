import { Logo } from 'components/Logo';
import Backdrop3 from '../../../../assets/imgs/backdrop-3.png';
import Mascot2 from '../../../../assets/imgs/mascot-2.png';
import Image from 'next/image';

export const About = () => (
  <section className="relative">
    <Image
      src={Backdrop3}
      alt=""
      className="absolute left-0 w-full object-cover h-[80%] max-xl:h-full bottom-0"
    />
    <div className="relative z-10 w-full h-full">
      <div className="max-w flex max-[814px]:flex-col p-4 py-8 pb-0 items-center h-full gap-24">
        <div className="max-xl:hidden">
          <Logo className="max-sm:w-56" />
        </div>
        <span className="text-white max-xl:text-center">
          Nosso objetivo é oferecer uma ampla variedade de materiais de alta qualidade
          para construção e reforma, desde cimento e tijolos até tintas e ferramentas de
          última geração.
          <br />
          <br /> Como uma empresa comprometida com a satisfação do cliente, estamos sempre
          buscando maneiras de melhorar nossos serviços. Estamos aqui para ajudá-lo desde
          o planejamento até a conclusão do seu projeto, para que você possa aproveitar ao
          máximo sua experiência conosco.
        </span>
        <div className="max-xl:hidden mb-4">
          <Image
            src={Mascot2}
            alt=""
            className="w-[70rem] max-[1730px]:w-[50rem] h-auto max-[1116px]:max-h-72"
          />
        </div>
      </div>
      <div className="flex items-end xl:hidden justify-center mt-10 mb-8 gap-8 p-2">
        <Logo className="min-w-[8rem] h-auto" />
        <Image src={Mascot2} alt="" className="w-1/2 h-auto min-w-0 max-w-[13rem]" />
      </div>
    </div>
  </section>
);
