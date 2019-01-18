import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import message from 'antd/lib/message'
import Layout from './children/AuthLayout'

class RessetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    ResetPass(){
        console.log(1);
        message.warning('check your email address')
    }

    render() {


        return (
            <div>
                <Layout>
                    <div className="contentAuth">

                        <h5>
                            Reset Password
                        </h5>
                        <br/>

                        <p>
                            Thank you. A reset password link has been sent to [insert user’s email]. Please check your junk/spam folder.
                        </p>
                        <br/>
                        <Button onClick={this.ResetPass.bind(this)} className='ButtonAuth'> ok </Button>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RessetPassword));
