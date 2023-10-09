import Link from "next/link";
import Image from "next/image";

function Navbar(): React.JSX.Element {
    return ( <nav className="px-5 py-5 w-full flex justify-between max-md:flex-col max-md:gap-5">
        <div className="flex justify-center">
            <div>
            <Link href={"/"}>
            <Image src="/next.svg" 
                width={"100"} 
                height={"100"} 
                alt="Imagen Next"
                />
            </Link>
            </div>
        </div>
        <div className="flex justify-center">
            <ul className="flex gap-5 px-5">
                <li>
                    <Link href={"/"}>Tasks</Link>
                </li>
                <li>
                    <Link href={"/profiles"}>Profiles</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
            </ul>
        </div>
    </nav> );
}

export default Navbar;