import Endereco from "assets/svg/endereco"
import Facebook from "assets/svg/facebook"
import Instagram from "assets/svg/instagram"
import Tel from "assets/svg/tel"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="w-full h-fit bg-white flex justify-center items-center p-[2rem] ">
            <div className="w-[90%] h-full flex justify-between items-center max-xl:w-[95%] max-md:w-[100%] max-sm:flex-col max-sm:gap-[2rem]">
                <div className="flex flex-col gap-[1rem] max-sm:items-center">
                    <span className="text-[#011F2F] flex items-center gap-[1rem] max-sm:text-center max-sm:items-start"><Endereco /> Av. Ademar de Barros, 195 - Vila Trujillo, Sorocaba - SP</span>
                    <span className="text-[#011F2F] flex items-center gap-[1rem] max-sm:text-center"><Tel /> (15) 99817-9909 • (15) 3318-1531</span>
                </div>
                <div className="flex flex-col gap-[1rem] items-end max-sm:items-center">
                    <div className="flex gap-[1rem]">
                        <Link href={'/'} className="transition-all hover:scale-[1.05]"><Facebook /></Link>
                        <Link href={'/'} className="transition-all hover:scale-[1.05]"><Instagram /></Link>
                    </div>
                    <Link href={'/'} className="text-[#011F2F]">Intelligence by Core.ag</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer