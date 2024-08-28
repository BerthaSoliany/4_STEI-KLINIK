
export interface PitaProps {
    judul: string
}

const Pita = ({judul}: PitaProps) => {
    return (
        <>
            <div className="flex-none w-screen h-[71px] bg-[#006769] absolute top-0" style={{marginTop:"78px"}}>
                <div className="pt-[21.5px] px-10">
                    <p className="text-[#FFFFFF] text-xl">{judul}</p>
                </div>
            </div>
        </>
    )
}

export default Pita;