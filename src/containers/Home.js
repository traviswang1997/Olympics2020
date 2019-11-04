import React, { Component } from 'react';
import { PageHeader, ListGroup } from 'react-bootstrap';
import { API } from 'aws-amplify';
import './Home.css';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			testApiCall: []
		};
	}

	async componentDidMount() {
		if (!this.props.isAuthenticated) {
			return;
		}

		try {
			const testApiCall = await this.testApiCall();
			this.setState({ testApiCall });
		} catch (e) {
			alert(e);
		}

		this.setState({ isLoading: false });
	}

	testApiCall() {
		return API.get('testApiCall', '/hello');
	}

	renderTestAPI(testApiCall) {
		console.log(testApiCall);
		return testApiCall.message;
	}

	renderLander() {
		return (
			<div style={{position: 'fixed', zindex: '-99', width: '100%', height: '100%'}}>
					<iframe title = 'backVideo' frameborder="0" height="100%" width="100%"
						src="https://youtube.com/embed/ENMhrEVa4XQ?autoplay=1&controls=0&showinfo=0&autohide=1">
					</iframe>
 			</div>

			
		);
	}

	renderTest() {
		return (
			<div className="test">
				<PageHeader>Test API call</PageHeader>
				<ListGroup>{!this.state.isLoading && this.renderTestAPI(this.state.testApiCall)}</ListGroup>
			</div>
		);
	}

	render() {
		return <div className="Home">{this.props.isAuthenticated ? this.renderTest() : this.renderLander()}</div>;
	}
}
