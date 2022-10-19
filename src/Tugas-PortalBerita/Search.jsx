import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class Search extends Component {
  state = {
    keyword: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.keyword) {
      this.props.searchNews(this.state.keyword);
    }
  };

  handleOnChange = (e) => {
    if (e.target.value.length === 0) {
      this.props.getNews();
    } else {
      this.setState({
        keyword: [e.target.value],
      });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className='d-flex gap-3'>
          <Form.Control
            placeholder='Cari berita di sini ...'
            onChange={this.handleOnChange}
            value={this.state.value}
          />
          <Button type='submit' variant='outline-primary text-nowrap'>
            Cari Berita
          </Button>
        </div>
      </Form>
    );
  }
}
