import React, { Component } from 'react';
import logo from '../../../public/images/logo.svg';
import contentJson from './content.json';
import Aboutpage from '../About-page/AboutPage'
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import './Home-page.scss';


class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            preview: "home",
            drawerFlag: false,
        }
    }

    handleswitch(preview) {
        this.setState({ preview })
    }

    handleToggle = () => {
        this.setState({ drawerFlag: !this.state.drawerFlag });
    };


    render() {
        return (
            <div className="home-page-mainContainer scroll">
                <div className="header" style={{ boxShadow: this.state.drawerFlag ? 'none' : '0px -1px 5px #9a9a9a' }}>
                    <div className="hamburger-in-tab" onClick={this.handleToggle}>
                        {this.state.drawerFlag ? <svg className="pointer" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M0 0L24 0 24 24 0 24z" transform="translate(-1856 -141) translate(1208 129) translate(648 12)" />
                                            <path fill="black" fill-rule="nonzero" d="M4.222 2.808l16.97 16.97-1.414 1.414-16.97-16.97 1.414-1.414zm-1.414 16.97l16.97-16.97 1.414 1.414-16.97 16.97-1.414-1.414z" transform="translate(-1856 -141) translate(1208 129) translate(648 12)" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg> :
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none" fill-rule="evenodd">
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M0 0L24 0 24 24 0 24z" transform="translate(-20 -23) translate(20 23)" />
                                                <path fill="#051F33" fill-rule="nonzero" d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" transform="translate(-20 -23) translate(20 23)" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        }
                    </div>
                    <div className="headerinsidecontent">
                        <img className="img-in-tab" src={logo} />
                        <div className="headertext">
                            <span className="home navitemhov" style={{ borderBottom: this.state.preview === "home" && "2px solid #1089f5", color: this.state.preview === "home" ? '#1089f5' : 'black' , padding: '11px 0px'}} onClick={() => this.handleswitch("home")}>Home</span>
                            <span className="about navitemhov " style={{ borderBottom: this.state.preview === "about" && "2px solid #1089f5", color: this.state.preview === "about" ? '#1089f5' : 'black' , padding: '11px 0px' }} onClick={() => this.handleswitch("about")}>About</span>
                            <button className="loginbtn">Login</button>
                        </div>
                    </div>
                </div>
                { this.state.preview === "home" &&
                    <div className="homepagediv">
                        <div className="bannerimg">
                            <div className="bannertextmaindiv">
                                <div className="bannertext"> Enterprise AI <span className="bannerlight" >solution to power the </span>next <br className="removebr" />wave <span className="bannerlight">of</span> intelligent automation </div>
                                <div className="bannerdummytext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</div>
                            </div>
                        </div>
                        <div className="content">
                            <span className="mainheading">What Customer Use Us For </span> <br></br>
                            <span className="secondheading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</span>
                            <div className="cardcontent">
                                {
                                    contentJson.map((c, i) => {
                                        return (
                                            <div className="withimage" key={i}>
                                                <img className="cardimg" src={"./images/" + c.image} />
                                                <span className="dummyheadertext">LOREM IPSUM IS DUMMY</span>
                                                <br />
                                                <span className="jsondummytext">{c.dummytext}</span>
                                            </div>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                }
                { this.state.preview === "about" &&
                    <Aboutpage />
                }
                <Drawer
                    // classes={{
                    //     paper: classes.drawerPaper,
                    // }}
                    anchor="top"
                    open={this.state.drawerFlag}
                    onClose={() => {
                        this.setState({ drawerFlag: false });
                    }}
                >
                    <div className="maindarwerdiv">
                        <div className="darwerlist">
                            <div className="pointer" style={{ marginBottom: '12px', padding: '5px 0px', borderBottom: "2px solid #d4d4d4", color: this.state.preview === "home" ? '#1089f5' : 'black' }} onClick={() => this.handleswitch("home")}>Home</div>
                            <div className="pointer" style={{ padding: '5px 0px', borderBottom: "2px solid #d4d4d4", color: this.state.preview === "about" ? '#1089f5' : 'black' }} onClick={() => this.handleswitch("about")}>About</div>
                        </div>
                    </div>
                </Drawer>
            </div >
        )
    }
}

export default HomePage;