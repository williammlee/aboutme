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
                        <h4>May 2020 - Present</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </ScrollEffects>
                
                <ScrollEffects>
                    <div class="expandable-box">

                        <h2>SpotiDiscover</h2>

                        <h3>Independent Project</h3>
                        <h4>May 2020 - Present</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </ScrollEffects>
                
                <ScrollEffects>
                    <div class="expandable-box">

                        <h2>POCAML</h2>

                        <h3>Coursework</h3>
                        <h4>October 2019 – December 2019</h4>
                        <p>
                        This is the first box on the page
                        .aaaaaaaaaaaaaaaaaaaaaaaaaaaa asdfasdfasdfasd asdfasdfasdfasd
                        asdfasdfasdfsdfasdfasdasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
                        </p>
                    </div>
                </ScrollEffects>

                <ScrollEffects>
                    <div class="expandable-box">

                        <h2>PDF Reader</h2>

                        <h3>Independent Project</h3>
                        <h4>June 2019 – August 2019</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </ScrollEffects>
                
            </div>
            
        </div>
    )
}