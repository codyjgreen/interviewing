import React from 'react';
import ReactPlayer from "react-player";
import Date from './Date';
import TechQuestions from './TechQuestions';



function Engineering(){
    return(
        <div className="App">
     
        <body className="Body">
        <h1>Technical Peer Interviewing</h1>
         
          <p>This video walks you through what you can expect and how to get the most out of the peer interviewing event. <br></br> 
        </p>
  
          <div className="setup-video">
        <ReactPlayer
          url="https://youtu.be/6b0s-w8yFRI"
        />
      </div>
  
      <Date/>
  
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

            <TechQuestions/>
  
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
    
    )
}

export default Engineering;