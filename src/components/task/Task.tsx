"use client"

import { useRouter } from "next/navigation";
import React from "react";

import { Task } from "../../app/model/model";



function Task(props: Task) {

    const route = useRouter();

    let {id, nombre, description, date} = props;

    const idTask = id;

    const onFormEdit = () => {
        route.push(`tasks/${idTask}`);
    }

    const dateString = new Date(""+date+"").toLocaleDateString()

    return (
    <article 
    className="bg-zinc-200 p-4 cursor-pointer flex flex-col gap-1 rounded-md" 
    onClick={onFormEdit} >
        <h3 className="font-bold">{nombre}</h3>
        <p>{description}</p>
        <p className="text-end text-sm text-zinc-500 mt-3">Create on {dateString}</p>
    </article>);
}

export default Task;