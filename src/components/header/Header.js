import React from "react";
import './Header.css';
import About from "../about/About";
import Experience from "../experience/Experience";
import Hobbies from "../hobbies/Hobbies"
import Classes from "../classes/Classes"


export default function Header(){
    function NavigationBar(){
        return(
            <div>
                <div class="navBar">
                    
                    <ul class="nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#coursework">Coursework</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#hobbies">Hobbies</a></li>
                    </ul>
                </div>
                <Stars/>
                <HomeSection />
                <div class="content">
                    <AboutSection />
                    <ClassesSection />
                    <ExperienceSection />
                    <HobbiesSection />
                </div>
            </div>
        )
    }

    function Stars(){
        return(
            <div className="star">
                <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                   <div id="title"></div>
            </div>
        )            
    }

    function HomeSection(){
      
        return(
            <div class="home-area" id="home">
                    <h1 className="headerText">Hi, I'm William</h1>
                
            </div>
        )
    }

    function AboutSection(){
        return(
            <div class="about-area" id="about">
                <div className="text-part">
                    <h1>About Me <span role="img" aria-label="bulb">💡</span></h1>
                    <hr/>
                    <About />
                </div>
            </div>
        )
    }

    function ExperienceSection(){
        return(
            <div class="experience-area" id="experience">
                <div className="text-part">
                    <h1>Experience <span role="img" aria-label="rocket">🚀</span></h1>
                    <hr/>
                    <Experience/>
                </div>
            </div>
        )
    }

    function HobbiesSection(){
        return(
            <div class="hobbies-area" id="hobbies">
                <div className="text-part">
                    <h1>Hobbies <span role="img" aria-label="camera">📸</span></h1>
                    <hr/>
                    <Hobbies/>
                </div>
            </div>
        )
    }

    function ClassesSection(){
        return(
            <div class="class-area" id="coursework">
                <div className="text-part">
                    <h1>Coursework <span role="img" aria-label="books">📚</span></h1>
                    <hr/>
                    <Classes/>

                </div>
            </div>
        )
    }
    return(
        <NavigationBar />
        
        
    )
}
