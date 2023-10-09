// "use client"

import FormTask from "../components/form/FormTask";
import Tasks from "../components/task/Tasks";
import { prisma } from "../libs/prisma";
import { Task } from "./model/model";


async function loadTasks(): Promise<Task[]> {
    const res = await prisma.task.findMany();
    return res
}


export const dynamic = "force-dynamic" 

async function Home(): Promise<JSX.Element>  {
    //const [data, setState] = useState([]);

    const data = await loadTasks();

    /*
    async function loadTasks() {
        const res = await fetch("api/tasks");
        const json = await res.json();
        setState(json);
    }
    
    useEffect(() => {
        loadTasks()
    }, [])
    */

    return (<div>
        <div className="w-full flex px-5 gap-10 mt-10 flex-row max-sm:flex-col">
            <section className="w-80 max-sm:w-full">
                <FormTask />
            </section> 
            <section className="flex-1">  
            {
                <Tasks tasks={data}/>
            }        
            </section>
        </div>
    </div>);
}

export default Home;