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
                        This is the first box on the page
                        .aaaaaaaaaaaaaaaaaaaaaaaaaaaa asdfasdfasdfasd asdfasdfasdfasd
                        asdfasdfasdfsdfasdfasdasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
                        </p>
                    </div>
                </ScrollEffects>
                
                <ScrollEffects>
                    <div class="expandable-box">

                        <h2>SpotiDiscover</h2>

                        <h3>Independent Project</h3>
                        <h4>May 2020 - Present</h4>
                        <p>
                        This is the first box on the page
                        .aaaaaaaaaaaaaaaaaaaaaaaaaaaa asdfasdfasdfasd asdfasdfasdfasd
                        asdfasdfasdfsdfasdfasdasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
                        </p>
                    </div>
                </ScrollEffects>
                
                <ScrollEffects>
                    <div class="expandable-box">

                        <h2>POCAML</h2>

                        <h3>Coursework</h3>
                        <h4>May 2020 - Present</h4>
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
                        <h4>May 2020 - Present</h4>
                        <p>
                        This is the first box on the page
                        .aaaaaaaaaaaaaaaaaaaaaaaaaaaa asdfasdfasdfasd asdfasdfasdfasd
                        asdfasdfasdfsdfasdfasdasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
                        </p>
                    </div>
                </ScrollEffects>
                
            </div>
            
        </div>
    )
}