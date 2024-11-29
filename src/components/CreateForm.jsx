import { CardTitle } from "react-bootstrap";

function CreateForm() {
    const[errors, setCount] = useState([]);
    const[isSending, setSending] = useState(false);

    const onSubmit = (async e => {
        e.preventDefault();
        const data = new FormData(e.target);
        data.get('title');
        if(CardTitle.slice(0,1) !== title.slice(0,1).toUpperCase()) {
            setCount([...errors, "Title must start with a capital letter"]);
        }
        if(errors.length !== 0){
            return;
        }
        setSending
        await new Promise(res => setTimeout(res, 1000));
        dispatchEvent({
            type: "add",
            data: {}        
        })
        setSending(false);
        for(let key of data.keys()){
            e.target[key].value = "";
        }
    });
    return ( <>
    {errors.map(e => <span>{e}</span>)};
        <form onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input id="CrF-name" name="title" required maxLength={20} minLength={3}/>

            <button type="submit" disabled={isSending}>Send</button>
        </form>        
        </> );

}

export default CreateForm;