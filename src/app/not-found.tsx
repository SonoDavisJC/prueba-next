import Link from "next/link";

function NotFound() {
    return ( <div className="text-center flex justify-center items-center h-full">
            <div>
                <h2 className="text-3xl font-semibold">Ups</h2 >
                <p>Oh, la pagina no fue econtrada</p>
                <Link href={"/"} className="underline inline-block mt-5">Volver a Inicio</Link>
            </div>
    </div> );
}

export default NotFound;