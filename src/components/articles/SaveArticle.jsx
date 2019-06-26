import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SaveArticle extends Component {
  static propTypes = {
    onSaveArticle: PropTypes.func.isRequired
  };

  state = {
    title: '',
    content: ''
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (value) => {
    const { onSaveArticle } = this.props;
    value.preventDefault();
    onSaveArticle(this.state);
    this.setState({
      title: '',
      content: ''
    });
  };

  render = () => {
    const { title, content } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={title} placeholder="title" name="title" onChange={this.handleChange} />
          <input value={content} placeholder="content" name="content" onChange={this.handleChange} />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
