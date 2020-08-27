import React from "react";
import './Experience.css';
import "./openAnimation";
import ScrollEffects from "../scrollEffects/scrollEffects"

export default function Experience(){
    return(
        <div class="container">
            <script src="./openAnimation"></script>
            <div class="expandable-boxes">
                <ScrollEffects>
                    <div class="expandable-box">

                        <h2>UniPantry</h2>

                        <h3>Full Stack Software Engineer Intern</h3>
                        <h4>May 2020 - August 2020</h4>
                        <p>
                        <h5>What is it?</h5>
                            <ul className="unipantry">
                                <li>
                                     A mobile application to help college students find ways to achieve a well-balanced diet without breaking the bank. 
                                </li>
                            </ul>
                        <h5>Context</h5>
                            <ul className="context">
                                <li>
                                This was the first real work experience I had. I joined a startup created by Cornell alumni as an intern to build a mobile application 
                                that helps college students with food budgeting and cooking easy but fulfilling meals. I implemented Google Authentication, 
                                a screen where users can set nutritional goals for themselves, and a screen specifically for SUNY Cortland students to see 
                                what dining halls are open and the foods that are being served in those dining halls. What made this internship memorable was the 
                                collaborative environment the startup fostered. As a developer, I was able to form small groups with other developers to work on a specific feature, 
                                collaborate with UI/UX designers to clear up confusion and improve the flow of the application, and meet with management to discuss marketing strategies 
                                and refine company values. With this internship, I also gained exposure to developing and integrating the frontend and backend of a mobile application and 
                                learned about the process of app development.

                                </li>
                            </ul>
                        <h5>What is it built from?</h5>
                            <ul className="tools">
                                <li>
                                React Native was used for the frontend, and Firebase was used for the backend in this project
                                </li>
                                <li>
                                GitHub for version control and contribution amongst team members
                                </li>
                            </ul>
                        
                        </p>
                    </div>
                </ScrollEffects>
                
                <ScrollEffects>
                    <div class="expandable-box">

                        <h2>SpotiDiscover</h2>

                        <h3>Independent Project</h3>
                        <h4>May 2020 - June 2020</h4>
                        <p>
                        <h5>What is it?</h5>
                            <ul className="spotidiscover">
                                <li>
                                    A song finder/ Shazam clone where lyrics to a song is searched and the song’s preview is played from Spotify 
                                </li>
                            </ul>
                        <h5>Context</h5>
                            <ul className="context">
                                <li>
                                This was the second project I built that isn’t related to coursework. I enjoy discovering new music and would always 
                                hear lyrics to a song that stood out to me. Usually, I would type those lyrics into Google, get the song title, 
                                look up the song on Spotify, and play the song. I thought that it would be cool if I streamlined this process, similar to how <a href="https://www.shazam.com/" target="_blank" rel="nofollow noopener noreferrer">Shazam</a> listens to a song 
                                and opens it up on Apple Music. I decided to perform some web-scraping of song titles 
                                from <a href="https://genius.com/" target="_blank" rel="nofollow noopener noreferrer">Genius</a> because, based on my experience of searching up songs, their website were one the first ones to pop up on Google. 
                                From there, I configured the Spotify API and used it to look up the song and play the preview if it was available. What made this project 
                                special was that it was my first time web-scraping and using an API. This project gave me insight into how to build additional features from an 
                                established application and how to streamline a process that I’ve experienced first-hand. 

                                </li>
                            </ul>
                        <h5>What is it built from?</h5>
                            <ul className="tools">
                                <li>
                                Python for configuring the Spotify API and web scraping
                                </li>
                                <li>
                                Django, HTML, and CSS for creating the web frontend
                                </li>
                            </ul>
                        
                        </p>
                    </div>
                </ScrollEffects>
                
                <ScrollEffects>
                    <div class="expandable-box">

                        <h2>POCAML</h2>

                        <h3>Coursework</h3>
                        <h4>October 2019 – December 2019</h4>
                        <p>
                        <h5>What is it?</h5>
                            <ul className="pocaml">
                                <li>
                                    A basic Pokemon game replica that allows players to perform basic actions of the original Pokemon game
                                </li>
                            </ul>
                        <h5>Context</h5>
                            <ul className="context">
                                <li>
                                This was a final project for a class called Data Structures and Functional Programming. After learning the basics of 
                                OCaml and functional programming, we were given an open ended project to complete during the second half of the semester. 
                                My group and I decided to create a very basic Pokémon game from scratch, where the player can catch and battle other Pokémon. 
                                We completed three two-week sprints with guidance from course staff and ended up presenting the finished project to our discussion section 
                                at the end of the semester. What made this project memorable and unique was using OCaml’s recursive pattern-matching feature which isn’t 
                                found in the most popular programming languages today. This feature made recursive functions look more clean, concise, and easier to understand, 
                                and gave me a better understanding of recursion as a whole.

                                </li>
                            </ul>
                        <h5>What is it built from?</h5>
                            <ul className="tools">
                                <li>
                                    OCaml for both the frontend and backend of the application
                                </li>
                                <li>
                                    OCaml external libraries to create the GUI and include music during gameplay
                                </li>
                            </ul>
                        
                        </p>
                    </div>
                </ScrollEffects>

                <ScrollEffects>
                    <div class="expandable-box">

                        <h2>PDF Reader</h2>

                        <h3>Independent Project</h3>
                        <h4>June 2019 – August 2019</h4>
                        <p>
                        <h5>What is it?</h5>
                            <ul className="pdfreader">
                                <li>
                                    A script that parses critical information from academic journals and exports them into a bulleted Microsoft Word document
                                </li>
                            </ul>
                        <h5>Context</h5>
                            <ul className="context">
                                <li>
                                    This was the first project I have done that isn't related to coursework. After I completed my Introduction to Computing
                                    class, I was curious as to how I can better utilize Python to solve real world problems. I did some brainstorming and
                                    noticed that, based on my own experiences, students would frequently be too busy or forget to do readings for a class
                                    and would skim through the text right before class starts. I wanted to create a script that would do all the skimming
                                    and parse out the most important parts of the text while maintaining cohesion when reading the summary. 
                                </li>
                            </ul>
                        <h5>What is it built from?</h5>
                            <ul className="tools">
                                <li>
                                    Python was used to remove citations, clean up white spaces, and parse selected sentences
                                </li>
                                <li>
                                    Tkinter was used to create a simple GUI to open a file explorer 
                                </li>
                            </ul>
                        </p>
                    </div>
                </ScrollEffects>
                
            </div>
            
        </div>
    )
}