"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { ModelUser } from "../../app/model/model";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


function User(props: ModelUser): React.JSX.Element {

    const router: AppRouterInstance = useRouter();

    let {id, last_name, first_name, email, avatar} = props
    const idUser: Number = id;

    return (
        <div className="w-96 shadow-md shadow-zinc-200 px-4 py-2 flex gap-5 items-center rounded-md cursor-pointer max-sm:w-full max-sm:mx-2"
        onClick={() => router.push(`user/${idUser}`)}>
            <div>
                <Image src={""+ avatar+""} alt="Imagen" width={100} height={100} className="rounded-full" />
            </div>
            <div className="w-full  flex items-center justify-between">
                <div>
                    <h2>{first_name + " " + last_name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>);
}

export default User;