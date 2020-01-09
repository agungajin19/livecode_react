import React from 'react'
import Axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import {actions, store} from '../store'

import Header from '../components/header'
import ContentCategory from '../components/conten-category'

const url ='https://api-todofancy.herokuapp.com/api/movies'



class Category extends React.Component{
    getMovieList = ()=>{
        Axios
            .get(`${url}`)
            .then(function(response){
                store.setState({listMovies: response.data.movies, isLoading: false})
            })
            .catch(function(error){
                store.setState({isLoading: false})
            })
    }

    render(){
        const{listMovies, isLoading} = this.props
        console.log('ini lategori',this.props.category)
        console.warn('abcd',this.props.listMovies)
        const filterMovies = listMovies.filter(item => {
            
            if (item.Category === this.props.category){
                return item
            }
            return false
        })
        const kumpulanMovies = filterMovies.map((item) => {
            return <ContentCategory
                        title = {item.Title}
                        year = {item.Year}
                        image = {item.Poster}
                        synopsis = {item.Synopsis}
                    />
        })
        console.log('tes', kumpulanMovies)
        return(
            <div>
                <Header/>
                <div>
                    {isLoading ? <div style={{textAlign : 'center'}}>Loading ...</div> : kumpulanMovies}
                </div>

            </div>

        )
    }
}
export default connect('listMovies, isLoading, category',
    actions
)(withRouter(Category))