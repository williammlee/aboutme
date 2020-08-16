import React from "react";
import "./About.css";
import { Card, makeStyles } from '@material-ui/core';
import "../../images/professional.jpg"
import ScrollEffects from "../scrollEffects/scrollEffects";

export default function About(){
    const classes = useStyles();

    const aboutText =   <p>
                        Hello! I’m William, an aspiring software engineer.
                        <br/>
                        <br/>
                        I enjoy learning new technology and being able to use them to attack and analyze problems 
                        in the world that humans on their own would not be able to do without the help of programs. 
                        My goal is to build efficient products that improve the quality of lives of future generations.
                        <br/>
                        <br/>
                        I  am currently a junior at Cornell University (insert hyperlink), 
                        pursuing a Bachelors of Arts in Computer Science and a Minor in Business. 
                        </p>
    return (
        <div class="container">
            <ScrollEffects>
                <Card raised className={classes.root}>
                    {aboutText}
                </Card>
            </ScrollEffects>
            
            <ScrollEffects>
                <div class="imageContainer">
                    <img src= {require("../../images/professional.jpg")} width="225" height="350" alt= "" class="professional" />
                </div>
            </ScrollEffects>
        </div>
        
    )
                
}

const useStyles = makeStyles({
    root: {
        flex: 1,
        width: 500,
        backgroundColor: "#f4f4f4",
    }
})
