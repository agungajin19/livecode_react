import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import {actions} from '../store'

class Profile extends React.Component{
    render(){
        const statusLogin = this.props.status_login
        const username = this.props.username
        const email = this.props.email
        const avatar = this.props.avatar
        console.log('ini email', email)

        if (statusLogin === false){
            return(
                <Redirect to={{pathname:"/signin"}}/>
                
            )
        }
        else{           
            return(
                <div className = 'text-center'>
 
                    <div className="card" style={{width: "50%"}}>
                        <div className="card-body row">
                            <div className='col-md-4 col-sm-12'>
                                <img  src={avatar} style={{width:'100%'}}/>
                            </div>
                            <div className='col-md-8 col-md-12'>

                                <h5 className="card-title">Nama : {username}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Email : {email}</h6>
                            </div>
                            
                        </div>
                        <Link to="/">Back to Home</Link>
                    </div>
                </div>
            )
        }
    }
}
export default connect('username, status_login, email, avatar',
    actions
)(withRouter(Profile))
