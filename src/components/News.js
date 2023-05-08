import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export default function News(props){

  const [articles, setArticles] = useState({
    articles: [],
    loading: false,
    page: 1,
    totalArticles: 0,
    category:"general"
  });

  // eslint-disable-next-line
  const [status, setStatus] = useState("");

  const getNews = async()=>{
    props.setProgress(40);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(
      { articles: parsedData.articles, 
        page: articles.page+1,
        totalArticles: parsedData.totalResults,
        loading: false,
        category: props.category
    })

    if(articles.articles){
    setStatus(parsedData.status)
    props.setProgress(100);
    } else{
      setStatus("not ok")
    }
  }

  useEffect(()=>{
    getNews()
    // eslint-disable-next-line
  },[]
  );

  const fetchMoreData = async()=>{
    props.setProgress(40);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${articles.page+1}&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(
      {
        articles: articles.articles.concat(parsedData.articles), 
        page: articles.page+1,
        loading: false,
        category: props.category
      }
    )
    if(articles){
      props.setProgress(100);
      } 
    setStatus(parsedData.status)

  }
     
    return (
      <>  
        <h3 className='text-center text-dark'><strong>NewsFeed - Today's Top Headlines</strong></h3>
        <p className='text-center'/>
        {/* {articles.loading && <Spinner/>}</p> */}
        <InfiniteScroll
          dataLength={articles.articles.length}
          next={fetchMoreData}
          hasMore={articles.articles.length !== articles.totalArticles}
          loader={articles.page+1 < Math.ceil(articles.totalArticles/10)? <Spinner/> : ""}
        >
      <div className="container">
      <div className='row'>
        { articles.articles.map((element)=>{
          return <div className="col-md-4 my-4 shadow-lg" key={element.url} >
          <span className="badge badge-success">Source &rarr; {element.source.name!=null ? element.source.name.slice(0,20): "Unknown"}</span>
          <Newsitems key={props.category} title={element.title!=null ? element.title.slice(0, 40): ""} desc={element.description!=null ? element.description.slice(0, 90): ""} img={element.urlToImage!=null? element.urlToImage : "https://fastly.picsum.photos/id/52/200/300.jpg?hmac=inayaUU4kX3byMsd5J9f69GP4-Tt78mJ9lD21t34Cks"} url={element.url} author={element.author} publishedAt={element.publishedAt} />
          </div>
        })}
      </div>
      </div>
        </InfiniteScroll>
      </>
      
    ) 
  }


News.defaulProps = {
  country: 'in',
  pageSize: 8,
}

  News.prototype = {
    country: PropTypes.string,
    pageSize: PropTypes.number,

  }



