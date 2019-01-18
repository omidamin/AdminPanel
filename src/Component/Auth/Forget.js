import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button, Input} from 'reactstrap';
import message from 'antd/lib/message'

import Layout from './children/AuthLayout'

class Forget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:''
        }
    }


    ResetPass(){
        let emailExist=0
        if (0){
            
        }else {
            if (emailExist){
                this.props.history.push('/resetPass')
            }else {
                message.warning("this email address dosn't exist")

            } 
        }
        
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
                            Enter the email address associated with your account, and we’ll email you a link to reset
                            your password
                        </p>
                        <br/>
                        <Input className='inputAuth' type='text' placeholder="Email Address"/>
                        <Button onChange={(email)=>{
                            {/*console.log(1);*/}
                            {/*this.setState({})*/}
                        }} onClick={this.ResetPass.bind(this)} className='ButtonAuth'> Resset Password </Button>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Forget));
