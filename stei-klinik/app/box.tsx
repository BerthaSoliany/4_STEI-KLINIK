export interface props {
    nama: string;
    nim: string;
    chat: string;
    pw: string;
    keluar: string
}

const box = ({nama, nim, chat, pw, keluar}: props) => {
    return (
        <>
            <div className="flex">
                <div className="h-[122px] w-[122px] rounded-full"></div>
                <div className="h-[633px] w-[547px] bg-[#DAEED5] mb-5">
                        <div className="pt-2">
                            <div className="h-[62px] w-[433px] bg-[#40A578] mb-5">
                                <p className="text-black text-base">{nama}</p>
                                <p className="text-black text-xs">{nim}</p>
                            </div>
                            <p className="text-black text-base">{chat}</p>
                            <p className="text-black text-base">{pw}</p>
                            <p className="text-black text-base">{keluar}</p>
                        </div>
                    </div>
                </div> 
        </>
    );
};

export default box;