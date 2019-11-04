import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import axios from "axios";
import { Button } from 'react-bootstrap';
const config = require('../config.js');


export default class Run100m extends Component {

    state = {

        found: false
    }

    handleSub = async (id, channel) => {
        // add call to AWS API Gateway add product endpoint here
        try {
          const params = {
                "id": id,
                "channel": "sub_" +channel 
          };
          await axios.post(`${config.default.apiGateway.invokeUrl}/user`, params);
        }catch (err) {
          console.log(`An error has occurred: ${err}`);
        }
    }

    handleUnSub = async (id, channel) => {
        // add call to AWS API Gateway add product endpoint here
        try {
            const params = {
                "id": id,
                "channel": "unsub_" + channel
           };
           
            await axios.post(`${config.default.apiGateway.invokeUrl}/user`, params);
          }catch (err) {
            console.log(`Unable to delete product: ${err}`);
        }
    }

    fetch = async (id) => {
        // add call to AWS API Gateway to fetch products here
        // then set them in state
        try {
          const res = await axios.get(`${config.default.apiGateway.invokeUrl}/user`);
          if(res==null){
              this.state.found=true
          }
        } catch (err) {
          console.log(`An error has occurred: ${err}`);
        }
    }

	render() {
		return (

			<div aligh="center">
                <video id="home_video" controls playsinline autoplay muted loop preload="auto" data-setup="{}">
                    <source src="https://d1pbg5tu7fsx3c.cloudfront.net/UniSA.mp4" type="video/mp4" />
                </video>

                {this.props.isAuthenticated ? (
                    <div aligh="center">
                        <Button variant="light" onClick={this.handleSub(this.props.user.username, this.props.location.pathname)}>
                            Subscribe
                        </Button>
                        <Button variant="light" onClick={this.handleUnSub(this.props.user.username, this.props.location.pathname)}>
                            Un-Subscribe
                        </Button>
                    </div>
                ) : (
                    <video id="home_video" controls playsinline autoplay muted loop preload="auto" data-setup="{}">
                        <source src="https://d1pbg5tu7fsx3c.cloudfront.net/UniSA.mp4" type="video/mp4" />
                    </video>
                )}
                
            </div>
            
		);
	}
}
