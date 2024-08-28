import Link from "next/link";

export interface FeatlinkProps {
    featlink: string
    featcolor: string
    featname: string
}

const Featlink = ({featlink, featcolor, featname}: FeatlinkProps) => {
    if (featcolor === "solid") return( 
        <>
            <span className='border-[#016869] border-[1px] rounded-full p-2 pl-12 pr-12 text-2xl bg-[#016869] m-3'>
                <Link href={featlink} rel="noopener noreferrer" target="_blank" className='text-[#FFFFFF]'>{featname}</Link>     
            </span>
        </>
    )

    return( <>
                <span className='border-[#016869] border-[1px] rounded-full p-2 pl-12 pr-12 text-2xl bg-[#FFFFFF] m-3'>
                    <Link href={featlink} rel="noopener noreferrer" target="_blank" className='text-[#016869]'>{featname}</Link>     
                </span>
            </>

    );
};

export default Featlink;