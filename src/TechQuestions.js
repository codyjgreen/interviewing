import './App.css';
import React from "react";

function TechQuestions() {
    return(
        <div className="Questions">
          <h2>Interview questions</h2>
          <p1>Every other week there will be two new questions posted here. <br></br> You should open the one that corresponds to you based on where your name falls on the signup sheet. 
          <br></br> You should then take the time Monday - Thursday of interview week to try to solve the problem that you are asking your peer. <br></br>
            This is to help you be a better interviewer because if you know the question you are asking <br></br> your peer you can help guide them in the right direction if needed.
            <br></br> Your peer will be doing the same. <br></br> On interview day you will take turns interviewing each other with each of you having 45 minutes to work towards a solution to the problem you are given. <br></br>
            The goal of these interviews is not so much getting the right answer but being able to explain to the interviewer <br></br>how you would approach the question and keeping an open dialoge between the two of you. <br></br>
            They are hiring you because you are going to make their team better not because you are the best developer in the world. <br></br> Take these practice interviews seriously and try to give eachother meaningful feedback.   </p1>
          
          <div className="Question1">
           <a
            className="App-link"
            href="https://docs.google.com/document/d/1tqs4xNekweJoj1-rRED8Fbos-qVqDX6uiJtVfPDUVTw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >Interviewer #1 Question
          </a>
          </div>
  
          <div className="Question2">
           <a
            className="App-link"
            href="https://docs.google.com/document/d/1wdzHHKI8nH8-tEaPMOMD6gk40OUxwOOXUBtuGmcxSF0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >Interviewer #2 Question
          </a>
          </div>
          </div>
    )
}

export default TechQuestions;