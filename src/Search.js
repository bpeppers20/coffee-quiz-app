import React, { useEffect, useState } from 'react'

export default function Search() {
    const [items, setItems] = useState([]); // useEffect to change a state variable

    const [search, setSearch] = useState(""); // effect for string search
    const [query, setQuery] = useState('Coffee');
    
    useEffect(() => {
        fetchItems();
    }, [query]);

    // Functions
    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const fetchItems = async () => {
        const data = await (await fetch('https://coffee-recipe-api.herokuapp.com/drinks')).json();
        const newArr = [];
        data.forEach(item => {
            if (item.name.includes(query) || item.ingredients.includes(query)) { // Filter for qualities and ingredients
                newArr.push(item);
            }
        });
        setItems(newArr);
    }
         

    const updateQuery = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    return (
        <main>
            <form onSubmit={updateQuery}>
                <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
            </form>
            <div className="img-map">
                {items.map(item => (
                    <p key={item.id} >
                    <a href={`/search/${item._id}`} className="img-grid">
                        <div className="options">{item.name}</div>
                        <img src={`${item.image}`} alt={`${item.name}`} className="coffee-img" />
                    </a>
                </p>
                ))}
            </div>
        </main>
    );
}
