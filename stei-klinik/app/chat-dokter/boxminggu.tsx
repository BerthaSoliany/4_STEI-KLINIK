export interface MingguProps {
    minggu: string
    aktif: boolean
}

const Boxminggu = ({minggu, aktif}: MingguProps) => {
    if (aktif === false) return( 
        <>
            <div className="bg-[#d9d9d9] w-[298px] h-[54px] rounded-[10px] mb-10 border-[1px] border-[#b4b4b4]">
                <div className="p-3 text-center text-xl">
                        <p className="text-black">{minggu}</p>
                </div>
            </div>
        </>
    )

    return(
        <>
            <div className="bg-gradient-to-b from-[#11726C] to-[#40a578] w-[298px] h-[54px] rounded-[10px] mb-10">
                <div className="p-3 text-center text-xl">
                        <p className="text-[#FFFFFF]">{minggu}</p>
                </div>
            </div>
        </>
    );
};

export default Boxminggu;