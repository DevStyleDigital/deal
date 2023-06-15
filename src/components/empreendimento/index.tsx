import Image from 'next/image'
import Empreendimentoimg from '../../assets/empreendimento.png'
import EmpreendimentoLogo from '../../assets/logo-empreendimento.png'
import Link from 'next/link'

const Empreendimento = () => {
    return (
        <div className="w-full h-fit min-h-[60vh] bg-[#C1AC75] flex justify-center items-end pt-[4rem] max-md:pt-[2rem]">
            <div className='w-[70%] h-full flex justify-between max-xl:w-[90%] max-md:flex-col-reverse max-md:items-center'>
                <Image src={Empreendimentoimg} className='w-[50%] max-md:w-[90%]' alt='empreendimento' width={2524} height={2236} />
                <div className='w-full h-full flex flex-col items-center gap-[2rem] p-[2rem] max-md:p-[1rem] max-md:gap-[1rem]'>
                    <h1 className='text-center font-medium text-[2rem] leading-10 text-[#48483C] max-xl:text-[1.5rem]'>Conheça nosso lançamento<br/> em Itapetininga</h1>
                    <Image src={EmpreendimentoLogo} alt='logo-empreendimento' className='w-[70%] max-md:w-[100%]' width={1824} height={1140} />
                    <Link href="https://www.figma.com/exit?url=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5515998179909" className='py-[1rem] px-[1.5rem] rounded-2xl bg-[#48483C] text-[#C1AC75] font-bold text-[1.5rem] transition-all max-xl:text-[1rem] hover:scale-[1.05] max-[331px]:text-[0.8rem]'>Conhecer o Empreendimento</Link>
                </div>
            </div>
        </div>
    )
}

export default Empreendimento