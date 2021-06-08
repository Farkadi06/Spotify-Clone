import React from 'react'
import './Footer.css'
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import LoopOutlinedIcon from '@material-ui/icons/LoopOutlined';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayOutlinedIcon from '@material-ui/icons/PlaylistPlayOutlined';
import VolumeDownOutlinedIcon from '@material-ui/icons/VolumeDownOutlined';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img 
                    className="footer__albumLogo"
                    src="https://api.time.com/wp-content/uploads/2017/04/damn-kendrick-lamar.jpg" 
                    alt="" />
                <div className="footer__songInfo">
                    <h4>HUMBLE.</h4>
                    <p>Kendrick Lamar - DAMN.</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleOutlinedIcon className="footer__green"/>
                <SkipPreviousOutlinedIcon className="footer__icon"/>
                <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer_icon" />
                <SkipNextOutlinedIcon className="footer__icon"/>
                <ShuffleOutlinedIcon className="footer__green"/>
             </div>
            <div className="footer__right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayOutlinedIcon />
                </Grid>
                <Grid item>
                    <VolumeDownOutlinedIcon />
                </Grid>
                <Grid item xs>
                    <Slider aria-labelledby="continuous-slider" />
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Footer
