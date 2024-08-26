
export interface emjProps {
    gambar: string;
    nama: string;
}
// tambahin untuk function booleannya kalau di click
const Emoji= ({gambar, nama}:emjProps) => {
    return(
        <nav>
            <div className="grid grid-cols">
                <img src={gambar} alt={nama} style={{width:"36.81px", height:"36.81px", marginLeft:"78px", marginTop:"80px"}}/>
                <p className="text-black text-ms" style={{marginLeft:"77px"}}>{nama}</p>
            </div>
        </nav>
    )
}

export default Emoji;