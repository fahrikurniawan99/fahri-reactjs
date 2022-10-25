import React from "react";

class Search extends React.Component {
  state = {
    keyword: "",
  };

  handleOnChange = (event) => {
    const value = event.target.value;
    const { getNews } = this.props;

    if (value === "") {
      const URL_TRENDING_NEWS =
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=630ae0f6a29f463393f7762eca548831";
      getNews(URL_TRENDING_NEWS);
    }
    
    this.setState({
      keyword: value,
    });
  };

  handleSearchNews = (url) => {
    const { getNews } = this.props;
    getNews(url);
  };

  handleOnSubmit = (event) => {
    if (this.state.keyword) {
      const url = `https://newsapi.org/v2/everything?q=${this.state.keyword}&from=2022-10-25&sortBy=popularity&apiKey=630ae0f6a29f463393f7762eca548831`;
      this.handleSearchNews(url);
    } else {
      alert("Kamu belum memasukan keyword !");
    }
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div className='d-flex gap-3'>
          <input
            type='text'
            name='keyword'
            value={this.state.keyword}
            className='form-control'
            placeholder='Cari berita'
            onChange={this.handleOnChange}
          />
          <button type='submit' className='btn btn-outline-primary'>
            Search
          </button>
        </div>
      </form>
    );
  }
}
export default Search;
