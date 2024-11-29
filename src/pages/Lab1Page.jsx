import PersonalInfo from "../components/PersonalInfo";
import { useContext} from 'react';
import AppContext from '../data/AppContext';

function Lab1Page () {
    const {items} = useContext(AppContext);
    return (
        <div className="Lab1-div">
        <h1>Laboratorium 1</h1>
        <h3>Lista imion</h3>
            {items.map((person) => <PersonalInfo  key={person.id} {...person}/>)}
        </div>

    );
}

export default Lab1Page;