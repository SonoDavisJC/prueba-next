import User from "./User";

function Users({users}: any) {
    return ( 
        <>
        <section className="flex flex-col items-center gap-2 text-zinc-500">
            {
                users.map((item: any) => {
                    return <User 
                    key={item.id}
                    avatar={item.avatar}
                    first_name={item.first_name}
                    last_name={item.last_name}
                    email={item.email}
                    id={item.id}
                    />
                })
            }
        </section>
            
        </>
     );
}

export default Users; 