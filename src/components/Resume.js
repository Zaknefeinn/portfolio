import React from 'react';
import ResumePhoto from '../images/Resume_picture.jpg';
export default () => {
  return (
    <div className="Resume">
      <div className="resume-left column">
        <div className="resume-section">
          <img className="resume-photo" src={ResumePhoto} alt="" />
        </div>
        <div className="resume-section">
          <div className="resume-section-header">
            <h3>SUMMARY</h3>
          </div>
          <p>
            A Full Stack Developer, dedicated to creating and improving next
            generation applications. Completed several web applications, and
            lead a development team in completing a chrome extension. Actively
            seeking a position as a developer to further my talents and aid in
            generating cutting edge technologies.
          </p>
        </div>
        <div className="resume-section">
          <div className="resume-section-header">
            <h3>TECHNICAL SKILLS</h3>
          </div>
          <p>
            Strong: React, JavaScript, HTML5, CSS3, ES6, NodeJS, Express,
            MongoDB, Redux, Git/Version Control
          </p>
          <p>
            Knowledgeable: React Native, D3, Webpack, Photoshop, Semantic UI,
            OAuth
          </p>
        </div>
        <div className="resume-section">
          <div className="resume-section-header">
            <h3>CERTIFICATIONS</h3>
          </div>
          <p>FCC Front End Certificate</p>
          <p>FCC Data Visualization Certificate</p>
        </div>
        <div className="resume-section">
          <div className="resume-section-header">
            <h3>CONTACT</h3>
          </div>
          <p>t: (479) 800-8269</p>
          <p>e: ehutc00f@gmail.com</p>
          <p>w: ehutchison.net</p>
        </div>
      </div>
      <div className="resume-right column">
        <h2>Eric Hutchison</h2>
        <div className="resume-section">
          <div className="resume-section-header">
            <h3>EXPERIENCE</h3>
          </div>
          <div className="resume-item">
            <div className="resume-item-title">
              Chingu Cohorts – Toronto, Canada
            </div>
            <div className="resume-item-date">Nov 2017 – Present </div>
            <div className="resume-item-position">
              Front End Developer (Remote)
            </div>
            <ul>
              <li>
                Develop applications with a small, remote team utilizing
                technologies, such as React, NodeJS, Express, and MongoDB
                Southern
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <div className="resume-item-title">
              Reprographics, Inc. - Bentonville, AR
            </div>
            <div className="resume-item-date">Jan 2011 – Present</div>
            <div className="resume-item-position">
              Production Manager / File Manager
            </div>
            <ul>
              <li>
                Expedite orders via email, phone calls, as well as in person
                while maintaining workflow
              </li>
              <li>Produce or scan blueprints and specification documents</li>
              <li>
                Electronically file bidding jobs in the area for general and
                subcontractors to view and distribute using proprietary
                web-based programming
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <div className="resume-item-title">
              Advanced Information Management - Lowell, AR
            </div>
            <div className="resume-item-date">Sep 2010 – Jan 2011</div>
            <div className="resume-item-position">Warehouse Coordinator</div>
            <ul>
              <li>
                Stored and pulled legal, medical, and personal documentation
                totaling well over 50,000 boxes with limited assistance
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <div className="resume-item-title">
              Walmart #100 - Bentonville, AR
            </div>
            <div className="resume-item-date">Mar 2009 – Sep 2010</div>
            <div className="resume-item-position">Dry Goods Stocker / ICS</div>
            <ul>
              <li>
                Maintained on-hand inventory of both the sales floor and back
                room
              </li>
            </ul>
          </div>
        </div>
        <div className="resume-section">
          <div className="resume-section-header">
            <h3>PROJECTS</h3>
          </div>
          <div className="resume-item">
            <a className="resume-link" href="">ChinguTabs</a>: Chrome new tab extension meant to increase productivity
            in everyday tasks utilizing the MERN stack.
          </div>
          <div className="resume-item">
          <a className="resume-link" href="">VoteCo</a>: Create a poll and vote on other users’ topics using
            JavaScript, Express, MongoDB, and EJS.
          </div>
          <div className="resume-item">
          <a className="resume-link" href="">DataVisualization</a>: Multiple projects working with D3.js to chart
            several different data sets, ranging from heat maps to world maps.
          </div>
          <div className="resume-item">
          <a className="resume-link" href="">DungeonCrawler</a>: A mini-game based off the classic Roguelike genre
            using React.
          </div>
          <div className="resume-item">
          <a className="resume-link" href="">Ehutchison.net</a>: My personal portfolio showcasing more of my
            projects, created with React.
          </div>
        </div>
        <div className="resume-section">
          <div className="resume-section-header">
            <h3>EDUCATION</h3>
          </div>
          <div className="resume-item">
            <div className="resume-item-title">Udemy</div>
            <div className="resume-item-date">Dec 2017 - present</div>
            <ul>
              <li>
                Completed 92 course hours geared toward Full Stack and Mobile
                Development
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <div className="resume-item-title">freeCodeCamp</div>
            <div className="resume-item-date"> Oct 2016 – May 2018</div>
            <ul>
              <li> Approximately 1100 hours of coursework</li>
            </ul>
          </div>
          <div className="resume-item">
            <div className="resume-item-title">Bentonville High School</div>
            <div className="resume-item-date"> May 2009</div>
          </div>
        </div>
      </div>
    </div>
  );
};