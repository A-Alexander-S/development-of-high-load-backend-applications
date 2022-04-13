import './news.module.scss';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface NewsProps { }
export interface PeaceOfNews {
  id: number,
  title: string,
  description: string,
  createdAt: number
}

export function News(props: NewsProps) {

  const [news, setNews] = useState([] as PeaceOfNews[]);
  const sortNews = (news: PeaceOfNews[]) => {
    return news.sort((a, b) => a.createdAt - b.createdAt)
  }

  useEffect(() => {

    // //С кэшированием
    // if (localStorage.getItem("news") != null) {

    //   let newsLocalStorage = localStorage.getItem("news")!
    //   // let newsLocalStorage: string = (localStorage.getItem("news"))? localStorage.getItem("news"): ""
    //   setNews(JSON.parse(newsLocalStorage));

    // } else {

    //   fetch('http://localhost:3333/api/news')
    //     .then(response => response.json())
    //     .then(news => {
    //       const sortedNews = sortNews(news);

    //       setNews(sortedNews);

    //       localStorage.setItem("news", JSON.stringify(sortedNews));
    //     })
    // }

    //Без кэширования
    fetch('http://localhost:3333/api/news')
      .then(response => response.json())
      .then(news => {
        // console.log(news)
        const sortedNews = sortNews(news);

        setNews(sortedNews);
      })

  }, []);

  return (

    <div>
      <h1>Последние новости</h1>
      <ul>
        {news.map(peaceOfNews => {
          return <li key={peaceOfNews.id}>
            <h2>{peaceOfNews.title}</h2>
            <p>{peaceOfNews.description}</p>
            <hr />
          </li>
        })}
      </ul>
    </div>
  );
}

export default News;
