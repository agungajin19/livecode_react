import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'unistore/react'
import {actions} from '../store'


import Header from '../components/header'

class Home extends React.Component{
    render(){       
        return(
            <div>
                <Header/>
                <div className='container row pl-5'>
                    <div className='col-md-3 border '>
                        <img  src={require('../images/romance.jpg')} style={{width:'100%'}}/>
                        <Link type="button" class="btn btn-info" onClick={()=>this.props.handleCategory('romance')} to="/romance">Romance</Link>
                    </div> 
                    <div className="col-md-3 border">
                        <img   src={require('../images/action.jpg')} style={{width:'100%'}}/> 
                        <Link type="button" class="btn btn-info" onClick={()=>this.props.handleCategory('action')} to="/action">Action</Link>  
                    </div>
                    <div className='col-md-3 border'>
                        <img  src={require('../images/fiction.jpg')} style={{width:'100%'}}/>
                        <Link type="button" class="btn btn-info" onClick={()=>this.props.handleCategory('fiction')} to="/fiction">Fiction</Link>
                    </div>
                    <div className="col-md-3 border">
                        <img  src={require('../images/comedy.jpg')} style={{width:'100%'}}/>   
                        <Link type="button" class="btn btn-info" onClick={()=>this.props.handleCategory('comedy')} to="/comedy">Comedy</Link>
                    </div>
                </div>
            </div>

        )
    }
}
export default connect(' category',
    actions
)(withRouter(Home))