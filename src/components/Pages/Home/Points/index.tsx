import { BoxIcon } from 'assets/svgs/box';
import { CardIcon } from 'assets/svgs/card';
import { TruckIcon } from 'assets/svgs/truck';
import { TrophyIcon } from 'assets/svgs/trophy';

const POINTS = [
  {
    id: 1,
    Icon: BoxIcon,
    title: 'OS MELHORES PRODUTOS',
    desc: 'diversas opções',
  },
  {
    id: 2,
    Icon: CardIcon,
    title: '12X NO CARTÃO',
    desc: 'parcelamento de cartões',
  },
  {
    id: 3,
    Icon: TruckIcon,
    title: 'COMPRE NA LOJA',
    desc: 'e receba em casa',
  },
  {
    id: 4,
    Icon: TrophyIcon,
    title: 'SOMOS ESPECIALISTAS',
    desc: 'confiança e segurança',
  },
];

export const Points = () => (
  <section className="max-w w-full px-2">
    <ul className="flex flex-wrap justify-center items-center gap-8">
      {POINTS.map((point) => (
        <li
          key={point.id}
          className="bg-primary-400 text-white max-md:max-w-full rounded-2xl py-5 px-6 w-full max-w-xs flex items-center gap-4"
        >
          <span>
            <point.Icon className="w-auto h-10" />
          </span>
          <span className="flex flex-col leading-4">
            <span className="uppercase font-bold">{point.title}</span>
            <span>{point.desc}</span>
          </span>
        </li>
      ))}
    </ul>
  </section>
);
