import React from 'react'

class ContentCategory extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='row border'>
                    <div className='col-md-4 col-sm-12'>
                        <img src={this.props.image} style={{width:'100%'}}/>
                    </div>
                    <div className='col-md-8 col-sm 12'>
                        <h4>{this.props.title}</h4>
                        <h5>{this.props.year}</h5>
                        <a>{this.props.synopsis}</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContentCategory