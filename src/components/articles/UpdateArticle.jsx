import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UpdateArticle extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    onUpdateArticle: PropTypes.func.isRequired,
    onCancelUpdate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      article: props.article
    };
  }

  handleUpdateArticle = () => {
    const { onUpdateArticle } = this.props;
    const { article } = this.state;
    onUpdateArticle(article);
  };

  handleCancelUpdate = () => {
    const { onCancelUpdate } = this.props;
    const { article } = this.state;
    onCancelUpdate(article.id);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      article: {
        ...prevState.article,
        attributes: {
          ...prevState.article.attributes,
          [name]: value
        }
      }
    }));
  };

  render = () => {
    const { article } = this.state;
    return (
      <tr>
        <td>{article.id}</td>
        <td>
          <input
            value={article.attributes.title}
            placeholder="title"
            name="title"
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            value={article.attributes.content}
            placeholder="content"
            name="content"
            onChange={this.handleChange}
          />
        </td>
        <td>
          <button type="button" onClick={this.handleUpdateArticle}>save</button>
        </td>
        <td>
          <button type="button" onClick={this.handleCancelUpdate}>cancel</button>
        </td>
      </tr>
    );
  };
}
