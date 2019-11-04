import { LinkContainer } from 'react-router-bootstrap';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Routes from './Routes';
import { Auth } from 'aws-amplify';

import './App.css';

class App extends Component {

	state = {
		isAuthenticated: false,
		isAuthenticating: true,
		user: null
	}

	setUser = user => {
		this.setState({ user: user });
	}

	async componentDidMount() {
		try {
			if (await Auth.currentSession()) {
				this.userHasAuthenticated(true);
				
			}
			const user = await Auth.currentAuthenticatedUser();
			this.setUser(user);
			
		} catch (e) {
			if (e !== 'No current user') {
				alert(e);
			}
		}

		this.setState({ isAuthenticating: false });
	}

	userHasAuthenticated = authenticated => {
		this.setState({ isAuthenticated: authenticated });
	};

	handleLogout = async event => {
		await Auth.signOut();

		this.userHasAuthenticated(false);
		this.props.history.push('/login');
	};
	render() {
		const childProps = {
			isAuthenticated: this.state.isAuthenticated,
			userHasAuthenticated: this.userHasAuthenticated,
			user: this.state.user,
			setUser: this.setUser
		}
		return (
			<div className="nav-container">
				<div class="nav-unit" variant="top-sub" state="active">

					<nav class="bar-main">
					<a href="/" class="logo">
						<img src="/logo.png" alt = "HomePage" />
					</a>

					<h1>O<font color="#4dff88">l</font>y<font color="#e68a00">m</font>p<font color="#4da6ff">i</font>c <font color="#d966ff">2</font>0<font color="#ff4d4d">2</font>0</h1>

					</nav>
					<nav class="bar-secondary">
						
						<ul class="menu" variant="horizontal">
						<LinkContainer to="/swim">
							<NavItem>Swimming</NavItem>
						</LinkContainer>
						<LinkContainer to="/run100m">
							<NavItem>Run100m</NavItem>
						</LinkContainer>
						<LinkContainer to="/stream">
							<NavItem>Stream</NavItem>
						</LinkContainer>
						</ul>
						
						
						<Navbar fluid collapseOnSelect>
						
							<Navbar.Collapse>
								<Nav pullRight>
									{this.state.isAuthenticated ? (
										<NavItem onClick={this.handleLogout}>Logout</NavItem>
									) : (
										
										<Fragment>
											
											<LinkContainer to="/signup">
												<NavItem>Signup</NavItem>
											</LinkContainer>
											<LinkContainer to="/login">
												<NavItem>Login</NavItem>
											</LinkContainer>

										</Fragment>
									)}
									{this.state.isAuthenticated ? (
										<LinkContainer to="/changepassword">
											<NavItem>Change Password</NavItem>
										</LinkContainer>
									) : (
										
										<Fragment>

										</Fragment>
									)}
								</Nav>
							</Navbar.Collapse>
							
						</Navbar>
						
						
					</nav>
					
				</div>
				<Routes childProps={childProps} />
			</div>
			
		);
	}
}

export default withRouter(App);
