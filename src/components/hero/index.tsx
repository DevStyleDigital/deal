import Image from "next/image"
import Banner from "../../assets/banner.png"
import logo from "../../assets/deal.png"
import Link from "next/link"
import Whatsapp from "assets/svg/whatsapp"
const Hero = () => {
    return (
        <div className="w-full h-[95vh] relative">
            <Image src={Banner} className="w-full h-full" alt="banner" width={5760} height={3280} />
            <div className="w-[70%] p-[2rem] flex flex-col items-center gap-[3rem] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-transparent max-sm:w-[100%]">
                <Image src={logo} alt="logo" width={1784} height={1248} className="w-[30%] max-md:w-[70%]" />
                <h1 className="text-white text-[1.5rem] text-center w-[80%] leading-8 font-medium max-xl:text-[1rem] max-xl:leading-6 max-xl:w-[90%]">O que torna a Deal Empreendimentos incomparável é a atenção 
                    e o respeito aos clientes e a transparência em todos os projetos à execução.</h1>
                <Link  className="py-[1rem] px-[2rem] bg-[#D9D9D9] rounded-lg text-[#011F2F] font-bold flex items-center gap-[1rem] text-[1.2rem] max-xl:text-[.8rem] max-sm:gap-[.8rem] transition-all max-sm:px-[1rem] hover:scale-[1.05] max-[331px]:text-[.7rem]" href='https://www.figma.com/exit?url=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5515998179909'><Whatsapp /> Canal de Atendimento | WhatsApp</Link>
            </div>
        </div>
    )
}

export default Hero