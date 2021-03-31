import './App.css';
import React from "react"
import ReactPlayer from "react-player"

function App() {
  return (
    <div className="App">
     

      <body className="Body">
      <h1>Peer Interviewing Event Series</h1>
       
        <p>This video walks you through what you can expect and how to get the most out of the peer interviewing event. <br></br> 
      </p>

        <div className="setup-video">
      <ReactPlayer
        url="https://youtu.be/6b0s-w8yFRI"
      />
    </div>

    <div>
      <h1>Date of next event</h1>
      <h2>4/9/2021</h2>

      <p>The questions will be posted here on <b>Monday 4/5/2021</b> so that you have time to work through the problem that you are giving your peer. <br></br>
      Then on <b>Friday</b> at <b>1PM PST/4PM EST</b> the peer interviews will be held in the Airmeet.</p>

    </div>

      <div className="Signup">
        <h2>Signup Sheet</h2>
        <p>Follow the signup convention displayed in the video above to make sure that you match up with someone.</p>
        <a
          className="App-link"
          href="https://docs.google.com/spreadsheets/d/1fgtVRtwh3XdmN1LAjvjBV6LAl-G2AooLer5k0JBnRN4/edit?pli=1#gid=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Peer Interviewing Signup Sheet
        </a>
        </div>

        <div className="Feedback">
          <h2>Feedback</h2>
        <p>Look over this evlauation sheet so that you are familiar with it for interview day.<br></br>
          Keeping in mind that when you are giving feedback you should be doing so in a C.A.S.K(Consensual, Actionable, Specific, Kind) <br></br> way as you are all here to learn and get better at interviewing.
        </p>
        <a
          className="App-link"
          href="https://docs.google.com/spreadsheets/d/1-fzm0oVNYZ2C6jCFNX8nwe4ET-KeqTQxDOQDl7vvBm0/edit#gid=2141022021"
          target="_blank"
          rel="noopener noreferrer"
        >
          Peer to Peer Evaluation Sheet
        </a>
        </div>

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

        <div className="Airmeet">
          <h2>Airmeet</h2>
          <p>We will be using Airmeet for our interviews which will allow you to find your peer at your table easily.</p>
          
          <a
          className="App-link"
          href="https://www.airmeet.com/e/9a4035e0-8768-11eb-a0ac-3ba8bec4f379"
          target="_blank"
          rel="noopener noreferrer"
        >Airmeet Mock Interview Space
        </a>
        </div>

        <div>
          <h2> Additional Resources</h2>

          <a
          className="App-link"
          href="https://docs.google.com/presentation/d/1dCoQSNo-ZFKsQm6YBpElLvTJkeUhYqecRRUnLK3UX_s/edit#slide=id.g53723775f3_1_8"
          target="_blank"
          rel="noopener noreferrer"
        >Whiteboarding Workshop
        </a>

          <div className="Whiteboarding">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=2icTfVR_fRQ"
      />
    </div>

        </div>

        <footer className="Footer">
  
  
</footer>
        </body>

  

    </div>


  );
}

export default App;
