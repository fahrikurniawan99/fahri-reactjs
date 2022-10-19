import React, { Component } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import CardNews from "./CardNews";
import Navigation from "./Navigation";
import Search from "./Search";
import axios from "axios";

export default class PortalBerita extends Component {
  state = {
    news: "",
    isLoading: false,
    errorMessage: "",
  };

  getTrendingNews = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      if (this.state.errorMessage) {
        this.setState({
          errorMessage: "",
        });
      }
      const { data } = await axios(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=630ae0f6a29f463393f7762eca548831"
      );
      this.setState({
        isLoading: false,
        news: data.articles,
      });
    } catch (err) {
      console.log(err);
    }
  };

  getSearchNews = async (keyword) => {
    try {
      this.setState({
        isLoading: true,
        news: "",
      });
      const { data } = await axios(
        `https://newsapi.org/v2/everything?q=${keyword}&from=2022-10-17&sortBy=popularity&apiKey=630ae0f6a29f463393f7762eca548831`
      );
      if (data.articles.length !== 0) {
        this.setState({
          isLoading: false,
          news: data.articles,
        });
      } else {
        this.setState({
          isLoading: false,
          errorMessage: "Hasil tidak di temukan",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getTrendingNews();
  }
  render() {
    return (
      <div>
        <Navigation />
        <div className='container my-5'>
          <Search
            searchNews={this.getSearchNews}
            getNews={this.getTrendingNews}
          />
          <div className='mt-4'>
            {this.state.isLoading ? (
              <div className='text-center'>
                <Spinner animation='grow' variant='success' />
              </div>
            ) : (
              <>
                {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
                <Row lg={3} md={2} xs={1} className='g-3'>
                  {this.state.news &&
                    this.state.news.map((news) => {
                      const {urlToImage, title, description, source, publishedAt} = news
                      const time = new Date(publishedAt).toLocaleDateString();
                      return (
                        <Col key={Math.random()}>
                          <CardNews
                            img={urlToImage}
                            title={title}
                            desc={description}
                            name={source.name}
                            time={time}
                          />
                        </Col>
                      );
                    })}
                </Row>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
