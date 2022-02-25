import React from 'react'
import { GiDove } from "react-icons/gi";
import { ImTwitter, ImFacebook, ImWhatsapp } from "react-icons/im";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import AudioLink from '../assets/audio_1.mp3';

const Main = () => {

  return (
    <div className='container'>
    <div className='card'>
        <div className='head'>
            <div className='header'>
            <div className='dove'><GiDove /></div>
            <div className='title'>The SOUL Winners</div>
            </div>
            <div className='media-icons'>
                <div className="social"><a href="https://web.facebook.com/dsoulwinners"><ImFacebook /></a></div>
                <div className="social"><a href="https://www.youtube.com/channel/UCC8rsiKPmRINhEdz4FRYRkw"><BsYoutube /></a></div>
                <div className="social"><a href="https://www.instagram.com/thesoulwinners/"><BsInstagram /></a></div>
                <div className="social"><a href="https://mobile.twitter.com/_thesoulwinners"><ImTwitter /></a></div>
                <div className="social"><a href="https://chat.whatsapp.com/DNGOnLvPmkNG6mFfof1Y7B"><ImWhatsapp /></a></div>
            </div>
        </div>
        <div className='back-style'>
            <div className="dash dash-typewriter">
                <h1><b>A FRIEND IN JESUS CHRIST</b></h1>
            </div>
            <div className="shop shop-typewriter">
                <h1><b>Online Evangelical Crusade. BE THERE!</b></h1>
            </div>
            <div className="good good-typewriter">
                <h1><b>Holds 26th February 2022, 6pm to 8pm WAT.</b></h1>
            </div>
            <button><a href='https://fb.me/e/1eO5r1AHN'>INVITE LINK</a></button>
        </div>
    </div>
    <audio src={ AudioLink } controls autoPlay />
    <div className="yright">&copy; Copyright The SOUL Winners 2022. <br /> All Rights Reserved. Designed and Developed by <a href="https://www.linkedin.com/in/michael-abaniwo/">codeDr</a></div>
    </div>
  )
}

export default Main