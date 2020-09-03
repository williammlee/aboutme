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
                        <li><ResumeButton></ResumeButton></li>
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

    function SocialMediaLinks(){
        return(
            <div class='social-links'>
                <button class='social-btn flex-center' id="twitter" onClick={() => window.open('mailto:wl433@cornell.edu')}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg><span>wl433@cornell.edu</span>
                    
                </button>
            
                <button class='social-btn flex-center' id="linkedin" onClick={() => window.open('https://www.linkedin.com/in/william-lee924/')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg><span>in/william-lee924</span>
                </button>

                <button class='social-btn flex-center' id="github" onClick={() => window.open('https://github.com/williammlee')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg><span>williammlee</span>
                </button>
            </div>
        )
    }

    function HomeSection(){
      
        return(
            <div class="home-area" id="home">
                    <h1 className="headerText">Hi, I'm William</h1>
                    <SocialMediaLinks/>
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

    
    function ResumeButton(){
        return(
            <button class="resumeButton"
            type= "button"
            onClick={ ()=> window.open('https://www.dropbox.com/s/5f83ziepa9qqe6g/William_Lee_Resume.pdf?dl=0', '_blank')}>
                RESUME
            </button>
        )
    }
    return(
        <NavigationBar />
        
        
    )
}
