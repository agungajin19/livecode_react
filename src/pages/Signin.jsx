import React from 'react'
import Header from '../components/header'
import SigninSection from '../components/signin'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import {actions, store} from '../store'
import {Redirect, Link} from 'react-router-dom'

class Signin extends React.Component{
    // handleMasukan = (e) =>{
    //     const self = this
    //     store.setState({[e.target.name] : e.target.value})
    // }
    handleLogin = () =>{
        const self = this
        axios
            .post('https://api-todofancy.herokuapp.com/api/auth')
            .then(function(response){
                console.log(response.data)
                if (response.data.status === 'oke'){
                    store.setState({
                        username : response.data.user_data.username, 
                        email : response.data.user_data.email,
                        avatar : response.data.user_data.avatar,
                        status_login : true,
                    })
                    self.props.history.push("/profile")
                }
            })
            .catch(function(error){
            })
    }
    
    render(){
        return(
            <div>
                {/* <Header category = {e => this.handleCategory(e)}
                {...this.props}/> */}
                <SigninSection
                // masukan={e=>this.handleMasukan(e)}
                login = {this.handleLogin}
                />
                <div>
                <Link to="/">Back to Home</Link>
                </div>
            </div>
        )
    }
}
export default connect(
    actions
)(withRouter(Signin))