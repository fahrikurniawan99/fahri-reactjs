import axios from "axios";
import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Search from "./Search";

class PortalBerita extends React.Component {
  state = {
    news: [],
    totalResults: "",
    isLoading: false,
  };

  getNews = async (url) => {
    try {
      this.setState({ isLoading: true });

      const { data } = await axios(url);
      const news = data.articles;
      const totalResults = data.totalResults;

      if (totalResults > 0) {
        this.setState({
          news,
          totalResults,
        });
      } else {
        this.setState({
          news: [],
          totalResults,
        });
      }
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    const URL_TRENDING_NEWS = `https://newsapi.org/v2/top-headlines?country=id&apiKey=630ae0f6a29f463393f7762eca548831`;
    this.getNews(URL_TRENDING_NEWS);
  }

  render() {
    const { news, isLoading, totalResults } = this.state;
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <div className='container mt-5'>
          <Search getNews={this.getNews} />
          <p className='mt-3 text-secondary'>Total results {totalResults}</p>
          <article>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto g-4 '>
              {isLoading === false ? (
                <>
                  {news &&
                    news.map((news) => {
                      const date = new Date(
                        news.publishedAt
                      ).toLocaleDateString();
                      const key = Math.random();
                      return (
                        <div className='col' key={key}>
                          <Card
                            title={news.title}
                            content={news.content}
                            date={date}
                            image={news.urlToImage}
                            source={news.source.name}
                          />
                        </div>
                      );
                    })}
                </>
              ) : (
                <div className='w-100 text-center'>
                  <div className='spinner-border text-warning' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    );
  }
}
export default PortalBerita;
