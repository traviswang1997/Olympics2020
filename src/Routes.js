import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';

import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Stream from './containers/Stream';
import ForgotPassword from './containers/ForgotPassword';
import ForgotPasswordVerification from './containers/ForgotPasswordVerification';
import ChangePassword from './containers/ChangePassword';
import ChangePasswordConfirm from './containers/ChangePasswordConfirm';
import Welcome from './containers/Welcome';
import Swim from './containers/Swim';
import Run100m from './containers/Run100m';

export default ({ childProps }) => (
	<Switch>
		<AppliedRoute path="/" exact component={Home} props={childProps} />
		<AppliedRoute path="/login" exact component={Login} props={childProps} />
		<AppliedRoute path="/signup" exact component={Signup} props={childProps} />
		<AppliedRoute path="/stream" exact component={Stream} props={childProps} />
		<AppliedRoute path="/forgotpassword" exact component={ForgotPassword} props={childProps} />
		<AppliedRoute path="/forgotpasswordverification" exact component={ForgotPasswordVerification} props={childProps} />
		<AppliedRoute path="/changepassword" exact component={ChangePassword} props={childProps} />
		<AppliedRoute path="/changepasswordconfirmation" exact component={ChangePasswordConfirm} props={childProps} />
		<AppliedRoute path="/welcome" exact component={Welcome} props={childProps} />
		<AppliedRoute path="/swim" exact component={Swim} props={childProps} />
		<AppliedRoute path="/run100m" exact component={Run100m} props={childProps} />
		{/* Finally, catch all unmatched routes */}
		<Route component={NotFound} />
	</Switch>
);
