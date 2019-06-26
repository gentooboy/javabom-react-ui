import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UpdateArticle from './UpdateArticle';

export default class ArticleItem extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    onUpdateArticle: PropTypes.func.isRequired,
    onDeleteArticle: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  handleDeleteArticle = () => {
    const { onDeleteArticle } = this.props;
    const { article } = this.props;
    onDeleteArticle(article.id);
  };

  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  handleUpdateArticle = (article) => {
    const { onUpdateArticle } = this.props;
    this.handleToggleEdit();
    onUpdateArticle(article);
  };

  renderEditArticle = article => (
    <UpdateArticle
      article={article}
      onUpdateArticle={this.handleUpdateArticle}
      onCancelUpdate={this.handleToggleEdit}
    />
  );

  renderViewArticle = article => (
    <tr>
      <td>{article.id}</td>
      <td>{article.attributes.title}</td>
      <td>{article.attributes.content}</td>
      <td>
        <button type="button" onClick={this.handleToggleEdit}>edit</button>
      </td>
      <td>
        <button type="button" onClick={this.handleDeleteArticle}>delete</button>
      </td>
    </tr>
  );

  render = () => {
    const { editing } = this.state;
    const { article } = this.props;
    return editing ? this.renderEditArticle(article) : this.renderViewArticle(article);
  };
}
