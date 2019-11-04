import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class Stream extends Component {
	render() {
		
		return (
			
			<div align="center">
                <video id="home_video" controls playsinline autoplay muted loop preload="auto" data-setup="{}">
                    <source src="https://d1pbg5tu7fsx3c.cloudfront.net/UniSA.mp4" type="video/mp4" />
                </video>
            </div>
		);
	}
}
