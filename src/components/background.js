import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
import React, { useState } from 'react';
import './slider.css'

function Background(props) {
    // const [sliderStatus, setSliderSTatus] = useState(true)  
    return(
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
    )
}

export default Background;
