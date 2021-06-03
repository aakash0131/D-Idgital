import React, { Component } from 'react';
import './about-page.scss'

class Aboutpage extends Component {
    render() {
        return (
            <div className="aboutmaindiv">
                <div className="abouttext">
                    <div className="abouttextheading"> Enterprise AI <span className="aboutlight" >solution to power the </span>next <br className="removebr" />wave <span className="aboutlight">of</span> intelligent automation </div>
                    <div className="aboutdummytext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</div>
                </div>
            </div>
        )
    }
}

export default Aboutpage;