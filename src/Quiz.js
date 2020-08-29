import React, { Component } from 'react';
import questions from "./questions"
// This is an Example of a Class Component
export default class Quiz extends Component {

    constructor(props){
        super(props)

        this.state = { 
            question: null,
            userAnswers: [],
            currentIndex: 0,
            options: [],
            disabled: false,
            btnDisabled: true,
            filterResults: []
        }
    }

    loadQuiz = () => { // Load Quiz Question
        const {currentIndex} = this.state; // Manage the states
        this.setState(() => {
            return {
                question: questions[currentIndex].question,
                options: questions[currentIndex].answers
            }
        });
    }

    nextQuestionHandler = () => {
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            disabled: false,
            btnDisabled: true
        });
    }

    componentDidMount() {
        this.loadQuiz();
    }

    storeAnswer = answer => {
        this.setState({
            userAnswer: this.state.userAnswers.push(answer)
        });
    }


    setDisable = value => {
        this.setState({
            disabled: !value
        });
    }

    setBtnDisable = value => { // Disable and reenable next and submit button
        this.setState({
            btnDisabled: !value
        });
    }

    setHidden = () => { // Hide Quiz and display data
        const container = document.getElementsByClassName("container")[0];
        const header = document.getElementsByClassName("header")[0];
        header.innerText = "Your Results!"
        container.style.display = "none";
    }

    // Function for fetching data from api and filtering it
    fetchItems = async () => {
        const { userAnswers } = this.state;
        const data = await (await fetch('https://coffee-recipe-api.herokuapp.com/drinks')).json();
        const newArr = [];
        data.forEach(item => {
            var filters = userAnswers;
            if (item.qualities.includes(filters[0]) && item.ingredients.includes(filters[1])) { // Filter for qualities and ingredients
                newArr.push(item);
            }
        });
        this.setState({
            filterResults: newArr
        });
    }

    // Submit data with fetch request and link to new (or same) page with new info

    // Add a way to reset choice after making it later after beta


    componentDidUpdate(prevProps, prevState) {
        const {currentIndex} = this.state;
        if (this.state.currentIndex !== prevState.currentIndex) {
            this.setState(() => {
                return {
                    question: questions[currentIndex].question,
                    options: questions[currentIndex].answers
                }
            });
        }
    }

   render() {
    const {question, options, currentIndex, filterResults} = this.state;
    return (
        <main>
            <h1 className="header">Coffee Taste Quiz</h1>
            <div className="container">
                <div id="question" >{ question }</div>
                <span className="btn-grid"> {options.map(option => (
                    <button key={option.id} className="btn" disabled={this.state.disabled} onClick={() => {
                        this.storeAnswer(option.value);
                        this.setDisable(this.state.disabled);
                        this.setBtnDisable(this.state.btnDisabled);
                    }}>
                        {option.text}
                    </button>
                ))} </span>

                {currentIndex < questions.length - 1 && 
                <button className="next-btn btn" disabled={this.state.btnDisabled}  onClick={this.nextQuestionHandler}>
                    Next Question
                </button>}
                {currentIndex === questions.length - 1 && <button className="next-btn btn"  disabled={this.state.btnDisabled} onClick={() => {
                            this.setHidden()
                            this.fetchItems();
                        }}>Submit Quiz</button>}
            </div>

            <div className="img-map">
                {filterResults.map(item => (
                    <p key={item.id} >
                        <a href={`/results/${item._id}`} className="img-grid">
                            <div className="options">{item.name}</div>
                            <img src={`${item.image}`} alt={`${item.name}`} className="coffee-img" />
                        </a>
                    </p>
                ))}
            </div>

        </main>
    )
   }
}
