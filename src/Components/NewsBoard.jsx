import React, { useEffect } from 'react'
import { useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = () => {


  const[articles, setArticles] = useState([]);

  useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=3b60aebbebb54d82b91693d0c5acc8b9`
    fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles))
  },[])

  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge text-dark bg-danger mt-3 fs-4'>News</span></h2>

      {articles.map((news, index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}

    </div>
  )
}

export default NewsBoard
