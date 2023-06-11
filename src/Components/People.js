import {useState} from "react";
function People ({people}) {
    const [search, setSearch] = useState("");
    const [person, setPerson] = useState("");
    const [error, setError] = useState(false);

    function handleSubmit (event) {
        event.preventDefault()
        if (search) {
            setPerson(people.find((person) => person.name.toLowerCase().includes(search.toLowerCase())));
            if (!person) {
                setError("Not Found")
            }
        }else {
            setPerson("");
            setError("Not Found");
        }
        setSearch("");
    }

    function handleChange (event) {
        setSearch(event.target.value);
    }
    return (
        <div className="people">
            <h2>Search for a Person</h2>
            <section>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={search} onChange={handleChange}/>
                    <button>Search</button>
                </form>
            </section>
            {person ? 
            <aside>
                <section>
                    <h3><span>Name: </span>{person.name}</h3>
                    <p><span>Age: </span>{person.age}</p>
                    <p><span>Eye Color: </span>{person.eye_color}</p>
                    <p><span>Hair Color: </span>{person.hair_color}</p>
                </section>
            </aside> : error ?
            <section>
                <p>{error}</p>
            </section>
            :null }
        </div>
    )
}   
export default People;