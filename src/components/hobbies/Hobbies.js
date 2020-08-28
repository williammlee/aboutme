import React from "react"
import "./Hobbies.css"
import { Card, makeStyles } from '@material-ui/core';


export default function Hobbies(){

    const classes = useStyles();

    const hobbiesText = <p className="hobbies">
                        I enjoy exploring and traveling to new places with my friends. I always keep my Canon DSLR in my bag and would take pictures whenever I see something eye-catching. I love editing pictures using Adobe Lightroom and seeing the pictures transform from its original state to match how I perceive the world. 
                        <br/>
                        <br/>
                        Check out some of my photos below!

                        </p>

    return(
        <div>
        <div>
            <Card raised className={classes.root}>
                    {hobbiesText}
            </Card>
        </div>

        <div class="gallery">
    <div class="gallery__strip__wrapper">
        <div class="gallery__strip one">
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/one.jpg")} alt="" class="one"/></div>
                
            </div>
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/two.jpg")} alt="" class="one"/></div>
                
            </div>
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/three.jpg")} alt="" class="one"/></div>
                
            </div>
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/four.jpg")} alt="" class="one"/></div>
            </div>
        </div>
    </div>
    <div class="gallery__strip__wrapper">
        <div class="gallery__strip two">
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/five.jpg")} alt="" class="one"/></div>
                
            </div>
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/six.jpg")} alt="" class="one"/></div>
               
            </div>
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/seven.jpg")} alt="" class="one"/></div>
                
            </div>
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/eight.jpg")} alt="" class="one"/></div>
               
            </div>
        </div>
    </div>
    <div class="gallery__strip__wrapper">
        <div class="gallery__strip three">
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/nine.jpg")} alt="" class="one"/></div>
               
            </div>
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/ten.jpg")} alt="" class="one"/></div>
               
            </div>
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/eleven.jpg")} alt="" class="one"/></div>
                
            </div>
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/twelve.jpg")} alt="" class="one"/></div>
                
            </div>
        </div>
    </div>
    <div class="gallery__strip__wrapper">
        <div class="gallery__strip four">
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/thirteen.jpg")} alt="" class="one"/></div>
               
            </div>
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/fourteen.jpg")} alt="" class="one"/></div>
                
            </div>
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/fifteen.jpg")} alt="" class="one"/></div>
                
            </div>
            <div class="photo">
                <div class="photo__image"><img src={require("../../images/sixteen.jpg")} alt="" class="one"/></div>
         
            </div>
        </div>
    </div>
</div>
</div>
    )
}

const useStyles = makeStyles({
    root: {
        flex: 1,
        width: "100%",
        backgroundColor: "#f4f4f4",
        marginBottom: 50,
       
    },
})
