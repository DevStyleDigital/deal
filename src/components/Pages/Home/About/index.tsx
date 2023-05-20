import { Logo } from 'components/Logo';
import Backdrop3 from '../../../../assets/imgs/backdrop-3.png';
import Mascot2 from '../../../../assets/imgs/mascot-2.png';
import Image from 'next/image';

export const About = () => (
  <section className="relative">
    <Image
      src={Backdrop3}
      alt=""
      className=" absolute top-0 left-0 w-full object-cover h-full"
    />
    <div className="relative z-10 w-full h-full">
      <div className="max-w flex max-[814px]:flex-col p-4 py-8 items-center h-full gap-24">
        <div>
          <Logo className="max-sm:w-56" />
        </div>
        <span className="text-white">
          Nosso objetivo é oferecer uma ampla variedade de materiais de alta qualidade
          para construção e reforma, desde cimento e tijolos até tintas e ferramentas de
          última geração.
          <br />
          <br /> Como uma empresa comprometida com a satisfação do cliente, estamos sempre
          buscando maneiras de melhorar nossos serviços. Estamos aqui para ajudá-lo desde
          o planejamento até a conclusão do seu projeto, para que você possa aproveitar ao
          máximo sua experiência conosco.
        </span>
        <div className="max-xl:hidden">
          <Image
            src={Mascot2}
            alt=""
            className="w-[70rem] max-[1730px]:w-[50rem] h-auto max-[1116px]:max-h-72"
          />
        </div>
      </div>
    </div>
  </section>
);
