import { useState } from "react";
import React from "react";
import {FaYoutube , FaFacebook , FaInstagram , FaGoogle, FaChevronLeft} from "react-icons/fa"

export default function Menu() {
    const [open,setOpen] = useState(false)
    const [fb,setFb] = useState(false)
    const [insta,setInsta] = useState(false)
    const [yt, setYT] = useState(false)
    const [goog,setGoog] = useState(false)
    function changeDrawer() {
        setOpen(!open)
    }
    function facebook() {
        setFb(!fb)
    }
    function instagram() {
        setInsta(!insta)
    }
    function youtube() {
        setYT(!yt)
    }
    function google() {
        setGoog(!goog)
    }
    return(
        <div>
            
            <button type="submit" onClick={changeDrawer}>Click</button>
            {open && (
                <ul>
                    <li onClick={facebook}>
                    <FaFacebook style={{fontSize:"20px"}}/> Facebook  
                        {fb && (
                            <ul>
                                <a href="https://www.facebook.com/" target="blank">Click to go to Facebook</a>
                                <br />
                                <a href="https://en.wikipedia.org/wiki/Facebook" target="blank">Information about Facebook</a>
                            </ul>
                        )}
                    </li>
                    <li onClick={instagram}>
                        <FaInstagram style={{fontSize:"20px"}}/>Instagram
                        {insta && (
                            <ul>
                                <a href="http://www.instagram.com" target="blank" >Click to go to Instagram</a>
                                <br />
                                <a href="https://en.wikipedia.org/wiki/Instagram" target="blank">Information about Instagram</a>
                            </ul>
                        )}
                    </li>
                    <li onClick={youtube}>
                        <FaYoutube style={{fontSize:"20px"}}/>YouTube
                        {yt && (
                            <ul>
                                <a href="http://www.youtube.com" target="blank">Click to go to YouTube</a>
                                <br />
                                <a href="https://en.wikipedia.org/wiki/YouTube" target="blank">Information about YouTube</a>
                            </ul>
                        )}
                    </li>
                    <li onClick={google}>
                         <FaGoogle style={{fontSize:"20px"}}/>Google
                        {goog && (
                            <ul>
                                <a href="http://google.com" target="blank">Click to go to Google</a>
                                <br />
                                <a href="https://en.wikipedia.org/wiki/Google" target="blank">Information about Google</a>
                            </ul>
                        )}
                    </li>
                </ul>
            )}
        </div>
    )
}