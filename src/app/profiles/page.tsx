
import Users from "../../components/user/Users";


async function getUsers() {
    try {
        let response = await fetch(`${process.env.URL_GET_USERS}`);
        if(!response.ok) {
            throw new Error("Error");
        }
        let json = await response.json();
        return json;

    } catch (error) {
        return false;
    }
}

async function PageProfiles() {

    let datausers = await getUsers();

    return (<div>
        {
            datausers == false 
            ? (<div>Error</div>) 
            : (<Users users={datausers.data} />)
        }
        
    </div>);
}

export default PageProfiles;