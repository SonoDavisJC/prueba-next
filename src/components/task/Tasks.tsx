import Task from "./Task";

function Tasks({tasks}: any) {

    return ( <div className="grid grid-cols-3 max-xl:grid-cols-1  gap-4 text-zinc-600">
        <div className="col-span-full">
            <p className="text-xl font-bold text-zinc-500">Task list ({tasks.length})</p>
        </div>
        <>
        {
            tasks.length > 0 
            ? (tasks.map((item: any) => {
                return <Task 
                key={item.id}
                nombre={item.nombre}
                description={item.description}
                id={item.id}
                date={String(item.date)}
                />
            })) 
            : (
                <div>
                    No tasks
                </div>
            )
        }
        </>

    </div>);
}

export default Tasks;