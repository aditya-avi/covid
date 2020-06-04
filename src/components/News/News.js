import React, { Component } from 'react'
import axios from 'axios'
import style from './News.module.css'
const url="http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=6fd8606b3a4042cbb434b1e9d117fc65"

class News extends Component {
    constructor(props){
        super(props)
        this.state={
            article:[]
        }
    }
    async componentDidMount() {
        const fetchdata = await axios.get(url)
        this.setState({
            article:fetchdata.data.articles
        })
        console.log(this.state.article)   
    }
    render() {
        return (
            <div className={style.row}>
                <h1>Get Latest News Update Of India </h1>
            {this.state.article.map((item,index) =>{
                return(
                        <div className={style.column} key={index}>
                            <div className={style.card}>
                            <img className={style.image} src={item.urlToImage} alt="Denim Jeans" />
                            <p>{item.title}</p>
                            <button><a href={item.url}>Click To Read</a></button>
                        </div>
                    </div>
                )
            })}
            </div>
        )
    }
}
 export default News