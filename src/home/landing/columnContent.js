import React, { useState } from 'react';
import './columnContent.css';
import tvWatch from './img/tv.png';
import video from './img/video.mp4';
import videoDevices from './img/devices.png';
import mobileBack from './img/mobile.jpg'

import Accordion from './accordion';

function Cards() {
    return (
        <div className="landing-cards">
            <div className="landing--watchContent">
                <div className="landing--watchContext--text">
                    <h1 id='watch-title'>Enjoy on your TV.</h1>
                    <p id='watch-content'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <div className="landing--watchContext--img">
                    <img src={tvWatch} alt="" />
                    <video loop={true} autoPlay={true}>
                        <source src={video} type="video/mp4"></source>
                    </video>
                </div>
            </div>
            <div className="landing--mobileWatch">
                <div className="landing--mobileWatch--media">
                    <img id='img-mobile' src={mobileBack} alt="" />
                    <div className="landing--mobileWatch--container">
                        <img id='icon-mobile' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png' alt="" />
                        <div className="textRow">
                            <p>Stranger Things</p>
                            <p>Downloading...</p>
                        </div>
                        <img id='gif-mobile' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif' alt="" />
                    </div>
                </div>
                <div className="landing--mobileWatch--text">
                    <h1 id='mobile-title'>Download your shows to watch offline.</h1>
                    <p id='mobile-content'>Save your favorites easily and always have something to watch.</p>
                </div>
            </div>
            <div className="landing--devices">
                <div className="landing--devices--text">
                    <h1 id='devices-title' >
                        Watch everywhere.
                    </h1>
                    <p id='devices-content'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                </div>
                <div className="landing--devices--media">
                    <img src={videoDevices} alt="" />
                </div>
            </div>
            <div className="landing--kidsContent">
                <div className="landing--kidsContent--media">
                    <img src='https://occ-0-2207-3933.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd' alt="" />
                </div>
                <div className="landing--kidsContent--text">
                    <h1 id='kids-title'>Create profiles for kids.</h1>
                    <p id='kids-content'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>
            <div className="landing--questions">
                <h1 id='questions-title'>
                    Frequently Asked Questions
                </h1>

                <div className="landing--questions--acordeon">
                    <Accordion />
                </div>
                <div className="landing--questions--bottom">
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='landing--questions-botom-content'>
                        <input className='questions--landing--inputEmail' type="email" placeholder='Enter your email' />
                        <button className='questions--landing--buttonGetstarted'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Cards;