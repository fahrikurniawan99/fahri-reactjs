import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import SearchNews from "./SearchNews";

const TugasHooks = () => {
  const [news, setNews] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async (url) => {
    try {
      setIsLoading(true);
      const { data } = await axios(url);
      const { articles, totalResults } = data;
      setNews({
        articles,
        totalResults,
      });
      setIsLoading(false);
      console.log(data);
    } catch (error) {}
  }, []);

  const getTrendingNews = useCallback(async () => {
    get(
      "https://newsapi.org/v2/top-headlines?country=id&apiKey=630ae0f6a29f463393f7762eca548831"
    );
  }, [get]);

  useEffect(() => {
    getTrendingNews();
  }, [getTrendingNews]);

  return (
    <div className='container'>
      <SearchNews
        handleGet={(url) => get(url)}
        getTrendingNews={() => getTrendingNews()}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {news.totalResults > 0 ? (
            <p>{news.totalResults} Berita Di temukan</p>
          ) : (
            <p>Tidak ada hasil ...</p>
          )}
          <div className='row row-cols-2'>
            {news.articles?.map((article) => {
              const { title, content, urlToImage, source, publishedAt } =
                article;
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
        </>
      )}
    </div>
  );
};

export default TugasHooks;
