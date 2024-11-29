import { useContext } from "react";
import {redirect} from 

function ProfileCard({name, rating} ) {
    const appDispatch = useContext(AppContext).dispatch;
    return ( 
        <>
        <div>
            <p>{name}</p>
            <p>{rating}</p>
            <button onClick={e => redirect("/lab4/edit</div>")}>Edit</button>
            <button>Delete</button>
            <button>Rate</button>
        </div>
        </>);
}
export default ProfileCard;