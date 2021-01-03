import React from "react";
import "./Classes.css";
import { Card } from '@material-ui/core';
import ScrollEffects from "../scrollEffects/scrollEffects";
export default function Classes(){
   

    return (
        <div>
        
<ScrollEffects>
<article>

  <Card className="item">
    <p><h6>CS 1110</h6><br/>Introduction to Computing Using Python</p>
  </Card>
  
  <Card className="item">
    <p><h6>CS 2110</h6><br/>Object-Oriented Programming and Data Structures</p>
  </Card>
  
  <Card className="item">
    <p><h6>CS 3110</h6><br/>Data Structures and Functional Programming</p>
  </Card>
  
  <Card className="item">
    <p><h6>CS 3410</h6><br/>Computer System Organization and Programming</p>
  </Card>
  
  <Card className="item">
    <p><h6>KOREA 1101</h6><br/>Elementary Korean 1</p>
  </Card>
  
  <Card className="item">
    <p><h6>KOREA 1102</h6><br/>Elementary Korean 2</p>
  </Card>
  
  <Card className="item">
    <p><h6>BTRY 3080</h6><br/>Probability Models and Inference</p>
  </Card>
  
  <Card className="item">
    <p><h6>CS 4110</h6><br/>Operating Systems</p>
  </Card>

  <Card className="item">
    <p><h6>CS 4320</h6><br/>Introduction to Database Systems</p>
  </Card>

  <Card className="item">
    <p><h6>CS 4820</h6><br/>Introduction to Analysis of Algorithms</p>
  </Card>

  <Card className="item">
    <p><h6>AEM 4660</h6><br/>Business Simulation </p>
  </Card>
  
  <Card className="item">
    <p><h6>NCC 5500</h6><br/>Financial Accounting</p>
  </Card>
  
  
  
</article>
</ScrollEffects>
</div>
    )
}

