import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login';

class Login extends Component{
    response = (response) => {
        console.log(response);
    };
    render(){
        return(
            <GoogleLogin
                clientId={"28156626236-51o89v29pruu7n4k1iq88p20cktkj150.apps.googleusercontent.com"}
                buttonText={'Login'}
                onSuccess={this.response}
                onFailure={this.response}
            />
        )
    }
}

export default Login;