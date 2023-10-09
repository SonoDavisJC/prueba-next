"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ModelUser } from "../../app/model/model";

function ProfileUser(props: ModelUser): React.JSX.Element {

    let route = useRouter();
    let { avatar, first_name, last_name, id, email} = props

    let [state, setState] = useState({
        avatar,
        first_name,
        last_name,
        email
    })


    return (
    <form className="flex flex-col gap-5 justify-center text-zinc-500 w-80 m-auto">
        <div>
            <a onClick={() => route.push("/profiles")} className="underline cursor-pointer">
Go back
</a>
        </div>
        <div className="w-full">
            <Image  src={`${state.avatar}`} alt={`${state.first_name}`} width={300} height={300} />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <label>
                <small>First name</small> 
                <p className="text-zinc-800">{`${state.first_name}`}</p>
            </label>
            <label>
                <small>Last name</small> 
                <p className="text-zinc-800">{`${state.last_name}`}</p>
            </label>
            <label className="col-span-full">
                <small>Email</small> 
                <p className="text-zinc-800">{`${state.email}`}</p>
            </label>
        </div>
    </form> );
}

export default ProfileUser;