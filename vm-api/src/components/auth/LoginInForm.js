import React, { Component } from "react";

export default class LoginInForm extends Component {
    render() {
        return (
            <div className="container">
                <div className="row Absolute-Center is-Responsive">
                    <div className="col-sm-12 col-md-10 col-md-offset-1">
                        <form>
                            <h3 className="text-center">Calls</h3>
                            <h3 className="text-center">WelcomBack</h3>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" />
                            </div>

                            {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Forgot your password?</label>
                    </div>
                </div> */}

                            <button type="submit" className="btn btn-primary textCenter">Sign In</button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}