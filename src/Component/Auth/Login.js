import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button,Input } from 'reactstrap';
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
                        <hr className='hr' />
                        <Button className='ButtonAuth'> login </Button>
                        <div className="forgetPass">
                            Did you forget your password?
                        </div>
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
