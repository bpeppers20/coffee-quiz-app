import React from 'react'

export default function Home() {
    return (
        <main>
            <h1>Find the Right Recipe for you</h1>
            <br/>
            <br/>
            <div className="img-map">
                <img src={require('./images/coffee1.jpg')} alt="Coffee1" className="coffee-img"/>
                <img src={require('./images/coffee2.jpg')} alt="Coffee2" className="coffee-img"/>
                <img src="https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Coffee3" className="coffee-img"/>
                <img src={require('./images/coffee4.jpg')} alt="Coffee4" className="coffee-img"/>
                <img src="https://images.unsplash.com/photo-1447347974530-d7c185559683?ixlib=rb-1.2.1&auto=format&fit=crop&w=1274&q=80" alt="Coffee5" className="coffee-img"/>
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Coffee6" className="coffee-img"/>
            </div>
            {/* Space for formating. Will find a better way later*/}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>About</h1>
            <div className="img-map">
                <img src={require('./images/coffee6.jpg')} alt="Coffee6" className="coffee-img-big"/>
                <div className="text-block">
                    This site was created to connect you to a coffee recipe gear towards your specific taste.
                    We have all had those moments where we wanted to try something new, but didn't know where 
                    to start or want to order when you go to your local coffee shop. With this app, you can take
                    a quiz to find recipes based on your taste preferances and diet. Didn't like your results? 
                    You can take the quiz as many times as you like till you find something or things that 
                    pique your interest. Already have a drink in mind? Use the search bar function in the 
                    nav bar to search through the recipe list based on name or ingredient. It is all free
                    so there is no hurt and trying right? The quiz now!
                </div>
            </div>
            <h1>Try the quiz now!</h1>
            <a href="/quiz" className="btn quizBtn">Take Quiz</a>
            
        </main>
    )
}
