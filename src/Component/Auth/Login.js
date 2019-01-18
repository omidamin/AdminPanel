import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button, Input} from 'reactstrap';
import Layout from './children/AuthLayout'
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <Layout>
                    <div className="contentAuth">
                        <Input className='inputAuth' type='text' placeholder="username"/>
                        <Input className='inputAuth' type='password' placeholder="password"/>
                        <hr className='hr'/>
                        <Button className='ButtonAuth'> login </Button>
                        <Link to='/forget'>

                            <div className="forgetPass">
                                Did you forget your password?
                            </div>
                        </Link>

                    </div>

                </Layout>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        get: state.main
    };
};

const mapDispatchToProps = dispatch => {
    return {
        set: (data, type) => dispatch({type: type, data: data}),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
