import React, { useState } from "react";

const SearchNews = ({ handleGet, getTrendingNews }) => {
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    const value = event.target.value;
    setKeyword(value);
    if (value === "") {
      getTrendingNews();
    }
  };

  const searchNews = async (query) => {
    const url = `https://newsapi.org/v2/everything?q=${query}&from=2022-10-25&sortBy=popularity&apiKey=630ae0f6a29f463393f7762eca548831`;
    handleGet(url);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (keyword) {
      searchNews(keyword);
    } else {
      alert("Keyword masih kosong!");
    }
  };
  return (
    <div className='d-flex gap-3 my-4 w-100'>
      <form {...{ onSubmit }}>
        <input
          value={keyword}
          type='text'
          className='form-control'
          {...{ onChange }}
        />
        <button type='submit' className='btn btn-outline-primary'>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchNews;
