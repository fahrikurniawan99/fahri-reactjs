import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const TugasHooks = () => {
  const [news, setNews] = useState("");

  const getTrendingNews = async () => {
    try {
      const { data } = await axios(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=630ae0f6a29f463393f7762eca548831"
      );
      const { articles, totalResults } = data;
      setNews({
        articles,
        totalResults,
      });
      console.log("Trending News", data);
    } catch (error) {}
  };

  useEffect(() => {
    getTrendingNews();
  }, []);
  return (
    <div className='row row-cols-2 g-4'>
      {news.articles?.map((article) => {
        const { title, content, urlToImage, source, publishedAt } = article;
        const date = new Date(publishedAt).toLocaleDateString();
        return (
          <div className='col' key={Math.random()}>
            <Card
              title={title}
              content={content}
              image={urlToImage}
              source={source.name}
              date={date}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TugasHooks;
