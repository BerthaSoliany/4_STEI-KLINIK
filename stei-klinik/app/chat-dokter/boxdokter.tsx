import Image from "next/image";

export interface DokProps {
    nama: string;
    dokter: string;
    nomor: string;
}

const Boxdokter = ({nama, dokter, nomor}: DokProps) => {
    return (
        <>
            <div className="h-[149px] w-[298px] rounded-[5px] border-[#11726c] border-[1px] p-6">
                <div className="flex flex-row space-x-4">
                    <div className="overflow-hidden rounded-[5px] h-[99px] w-[83px]">
                        <div className="h-[99px] w-[99px]">
                            <Image
                                src="/boxgreen.png"
                                width={200}
                                height={100}
                                alt="boxgreen"
                            />
                        </div>
                    </div>
                    <div className="pt-2">
                        <p className="text-black text-base font-bold">{nama}</p>
                        <p className="text-black text-xs">{dokter}</p>
                        <p className="text-black text-xs">{nomor}</p>
                    </div>
                </div>
            </div> 
        </> 
    );
    };

export default Boxdokter;