import createStore from "unistore"

const initialState ={
    email : '',
    username : '',
    status_login : false,
    avatar : '',
    listMovies : [ {
        "Title": "True Romance",
        "Year": "1993",
        "Category": "romance",
        "Synopsis": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Murphy's Romance",
        "Year": "1985",
        "Category": "romance",
        "Synopsis": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BM2IxMWIwNzQtNzhhMy00MjNiLTllYjktN2VlYjc1MjNhNmVmXkEyXkFqcGdeQXVyNzY5MTE3OTQ@._V1_SX300.jpg"
    },
    {
        "Title": "Shuddh Desi Romance",
        "Year": "2013",
        "Category": "romance",
        "Synopsis": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Poster": "https://ia.media-imdb.com/images/M/MV5BMTU0NjI2MTI0Ml5BMl5BanBnXkFtZTcwNjI4MzY5OQ@@._V1_SX300.jpg"
    },
    {
        "Title": "A Civil Action",
        "Year": "1998",
        "Category": "action",
        "Synopsis": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "Missing in Action",
        "Year": "1984",
        "Category": "action",
        "Synopsis": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGRkY2M1YWMtYmZiMy00NDMzLTg0OTctYWNmNzllMGNlYmMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "Action Jackson",
        "Year": "1988",
        "Category": "action",
        "Synopsis": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWFhNmI3OWQtOTU5Zi00ODA3LWExNjctMTllZWE2ZGE3ZTA1XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
    },
    {
        "Title": "Real Fiction",
        "Year": "2000",
        "Category": "fiction",
        "Synopsis": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMTM2Njc1NDleQTJeQWpwZ15BbWU3MDUzNDA0MzE@._V1_SX300.jpg"
    },
    {
        "Title": "Beyond Belief: Fact or Fiction",
        "Year": "1997–2002",
        "Category": "fiction",
        "Synopsis": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGY2MmQ5OWUtM2MwYS00MzJiLWI0MmUtZGM3YmMxMWNjYTM1XkEyXkFqcGdeQXVyMDAyMTY3Nw@@._V1_SX300.jpg"
    },
    {
        "Title": "Samurai Fiction",
        "Year": "1998",
        "Category": "fiction",
        "Synopsis": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5MjU2MTg4NF5BMl5BanBnXkFtZTcwMjc1NzAwMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "The King of Comedy",
        "Year": "1982",
        "Category": "comedy",
        "Synopsis": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    },
    {
        "Title": "A Midsummer Night's Sex Comedy",
        "Year": "1982",
        "Category": "comedy",
        "Synopsis": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTMxMTM0MTk3Nl5BMl5BanBnXkFtZTcwOTEyODI1NA@@._V1_SX300.jpg"
    },
    {
        "Title": "The Bugs Bunny/Looney Tunes Comedy Hour",
        "Year": "1985–1986",
        "Category": "comedy",
        "Synopsis": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1NDQ0NzUyMV5BMl5BanBnXkFtZTYwMzczODk4._V1._CR14,96,240,314_SY132_CR6,0,89,132_AL_.jpg_V1_SX300.jpg"
    }],
    isLoading : '',
    category : ''
}
export const store = createStore(initialState)

export const actions = store => ({
    handleCategory : async (state,e) =>{
        const keyword = e
        await store.setState({category: keyword})
    }   
})


