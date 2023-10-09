
import ProfileUser from "../../../components/profile/ProfileUser";

async function getUser(id: Number) {
    try {
        let response = await fetch(`${process.env.URL_GET_USER}${id}`);
        if(!response.ok) {
            throw new Error("Error");
        }
        let json = response.json();
        return json;
    } catch (error) {
        console.log(error);
        return false
    }
}


async function PageUser({params}: any): Promise<JSX.Element> {

    let data = await getUser(Number(params.iduser));
    
    return (
    <div className="w-full">
        {
            data != false 
            ? (<ProfileUser 
                avatar={data.data.avatar}
                email={data.data.email}
                first_name={data.data.first_name}
                last_name={data.data.last_name}
                id={data.data.id}
                />) 
            : (<div>
                <p>El perfil no existe</p>
            </div>)
        }
        
    </div> );
}

export default PageUser;