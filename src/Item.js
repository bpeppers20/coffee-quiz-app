import React, { useState, useEffect } from 'react';

export default function Item({ match }) { // use match to get url data from another js file
    const [item, setItem] = useState({
        ingredients: [],
        qualities: []
    }); // useEffect to change a state variable
    useEffect(() => {
        fetchItems(); 
    },[]); // Calls when component is first mounted

    const fetchItems = async () => {
        const data = await (await fetch(`https://coffee-recipe-api.herokuapp.com/drinks/${match.params.id}`)).json();
        setItem(data);
    }
    return (
        <main>
            {item.name}
            <br/>
            <br/>
            <img src={`${item.image}`} alt={`${item.name}`} className="coffee-img"/>
            <br/>
            {item.description}
            <br/>
            <br/>
            {item.recipe}
            <br/>
            <br/>
            Calories: {item.calories}
            <br/>
            <br/>
            Ingredients:
            {item.ingredients.map(ingredient => (
                <span> {ingredient}, </span>
            ))}
            <br/>
            <br/>
            Qualities:
            {item.qualities.map(quality => (
                <span> {quality}, </span>
            ))}
            <br/>
            <br/>
            {item.instructions}
            <br/>
            <br/>
            View sources website here!: {<a href={item.url}>{item.url}</a>}



        </main>
    )
}
