export interface MingguProps {
    minggu: string
}

const Boxminggu = ({minggu}: MingguProps) => {
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