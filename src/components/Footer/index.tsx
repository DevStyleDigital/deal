import Backdrop4 from '../../assets/imgs/backdrop-4.png';
import Image from 'next/image';
import { WhatsIcon } from 'assets/svgs/whats';
import { MailIcon } from 'assets/svgs/mail';
import { PinIcon } from 'assets/svgs/pin';
import { InstagramIcon } from 'assets/svgs/instagram';
import { FacebookIcon } from 'assets/svgs/facebook';
import { LinkedinIcon } from 'assets/svgs/linkedin';
import Link from 'next/link';
import { HomesIcon } from 'assets/svgs/homes';
import { CoreLogo } from 'components/Logo/core';

const SOCIALS = [
  {
    id: 1,
    link: 'https://instagram.com',
    Icon: InstagramIcon,
  },
  {
    id: 2,
    link: 'https://facebook.com',
    Icon: FacebookIcon,
  },
  {
    id: 3,
    link: 'https://linkedin.com',
    Icon: LinkedinIcon,
  },
];
const CONTACTS = [
  {
    id: 1,
    text: '(00) 00000.0000',
    Icon: WhatsIcon,
  },
  {
    id: 2,
    text: 'email@domus.com.br',
    Icon: MailIcon,
  },
];

export const Footer = () => (
  <footer>
    <div className="relative">
      <Image
        src={Backdrop4}
        alt=""
        className="absolute top-0 left-0 w-full object-cover h-full"
      />
      <div className="relative z-10 w-full h-full pb-16">
        <div className="max-w flex max-lg:flex-col max-[814px]:flex-col p-4 pt-8 h-full gap-12 xl:gap-24">
          <div className="lg:w-1/2">
            <span className="font-bold text-xl block mb-6 max-lg:text-center">
              Fale com a gente
            </span>

            <ul className="flex items-center w-full justify-between max-lg:justify-center max-lg:gap-8 max-lg:flex-wrap">
              <div className="flex flex-col gap-1 lg:w-1/2">
                {CONTACTS.map((contact) => (
                  <li key={contact.id}>
                    <span className="flex items-center gap-2">
                      <contact.Icon className="fill-black" />
                      <span>{contact.text}</span>
                    </span>
                  </li>
                ))}
              </div>
              <li className="lg:w-1/2">
                <span className="flex items-center gap-2">
                  <PinIcon className="fill-black h-8 w-auto" />
                  <span className="leading-4 lg:whitespace-nowrap">
                    Nononononononon, 00
                    <br />
                    nonoonono - Nononoo / NO
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <span className="font-bold text-xl block mb-6 max-lg:text-center">
              Siga DOMUS
            </span>

            <ul className="flex items-center gap-3 max-lg:justify-center">
              {SOCIALS.map((social) => (
                <li key={social.id}>
                  <Link target="_blank" href={social.link}>
                    <social.Icon className="w-10 h-10" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 max-xl:opacity-40">
        <HomesIcon />
      </div>
    </div>
    <div className="flex w-full h-fit py-7 justify-center">
      <CoreLogo />
    </div>
  </footer>
);
