"use client"
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { json } from "stream/consumers";

function FormTask() {
    const route = useRouter();
    const {idtask} = useParams();

    const [isEdit, setIsEdit] = useState<Boolean>();
    const [state, setData] = useState<{nombre: string, description: string}>({
        nombre: '',
        description: ''
    })

    useEffect(() => {
        if(idtask) {
            setIsEdit(true);
            fetch(`/api/tasks/${idtask}`, {
                method: 'GET'
            }).then((res) => res.json())
            .then((json) => {
                setData({
                    nombre: json.nombre,
                    description: json.description
                })
            })
        }
        else {
            //console.log("Estas en Home")
            setIsEdit(false);
        }
    }, [idtask]);
    

    async function addTask() {

        let completedForm: Boolean = true;
        let completedField: Boolean;

        
        for(let value of Object.values(state)) {

            let patt = new RegExp(/^[A-Za-z0-9\s]+$/g
            );
            let res = patt.test(value);

            if(res) {
                completedField = true
            }
            else {
                completedField = false
            }

                
            if(completedField == false) {
                completedForm = false
            }
        }
        

        if(completedForm) {
            const res = await fetch("/api/tasks", {
                method: 'POST',
                body: JSON.stringify(state),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            //const data = await res.json();
            route.refresh();
            //setState(data); 
        } 
        else {
            alert("El formulario no esta completado")
        }
    }

    async function editTask(idtask: Number) {
        await fetch (`/api/tasks/${idtask}`, {
            method: 'PUT',
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        route.push("/");
        route.refresh();
    }

    async function deleteTask(idtask: Number) {
        await fetch (`/api/tasks/${idtask}`, {
            method: 'DELETE'
        })
        
        route.push("/");
        route.refresh();
    }
    


    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let {name, value} = e.target
        setData({...state, [name]: value})
    }

    function onHandleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if(idtask) {
            editTask(Number(idtask));
        }
        else {
            addTask();
        }
    }

    function onHandleDelete(): void {
        deleteTask(Number(idtask))
    }

    return (<form 
    className="text-zinc-700 m-auto" 
    onSubmit={(e) => onHandleSubmit(e) }>
        <div className="flex flex-col gap-3 w-full">
            <p className="text-center">Form</p>
            <label className="mt-2">
                <input 
                type="text" 
                name="nombre" 
                id="nombre" 
                defaultValue={state.nombre} 
                onChange={(e) => onHandleChange(e)} 
                placeholder="Name task"
                className="w-full text-zinc-700 px-4 py-2 outline-none"
                />
            </label>
            <label>
                <input 
                type="text" 
                name="description" 
                id="nombre" 
                defaultValue={state.description} 
                onChange={(e) => onHandleChange(e)} 
                placeholder="Description task"
                className="w-full text-zinc-700 px-4 py-2 outline-none"
                />
            </label>
            <div className="mt-5">
            {
                isEdit 
                ? (<>
                <div className="flex flex-row gap-20">
                     <input 
                type="submit" 
                value={"Edit task"} 
                className="w-full py-2 bg-sky-500 text-zinc-100 mt-2 text-center cursor-pointer rounded-md"/>
                <input 
                type="submit" 
                value={"Delete Task"} 
                onClick={onHandleDelete}
                className="w-full py-2 bg-red-500 text-zinc-100 mt-2 text-center cursor-pointer rounded-md"/>
                </div>
                <div className="mt-20 text-center">
                    <a className="underline cursor-pointer" onClick={() => route.push("/")} >Go back</a>
                </div>
                </>
                
                ) 
                : (<div>
                     <input 
                    type="submit" 
                    value={"Add task"} 
                    className="w-full py-2 bg-zinc-800 text-zinc-100 mt-2 text-center cursor-pointer rounded-md"/>
                </div>)
            }
            </div>
        </div>
    </form>);
}

export default FormTask;

