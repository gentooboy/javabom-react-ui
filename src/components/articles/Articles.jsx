import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import SaveArticle from './SaveArticle';
import ArticleResource from './ArticleResource';

export default class Articles extends Component {
  state = {
    articles: []
  };

  componentDidMount = () => {
    this.handleGetArticles();
  };

  handleGetArticles = () => {
    ArticleResource.getArticles()
      .then((articles) => {
        this.setState({
          articles: articles.data
        });
      });
  };

  handleSaveArticle = (article) => {
    ArticleResource.saveArticle(article)
      .then((newArticle) => {
        const { articles } = this.state;
        this.setState({
          articles: [...articles, newArticle.data]
        });
      });
  };

  handleUpdateArticle = (update) => {
    ArticleResource.updateArticle(update)
      .then((updated) => {
        const { articles } = this.state;
        this.setState({
          articles: articles.map(
            article => (
              article.id === update.id ? { ...article, ...updated.data } : article)
          )
        });
      });
  };

  handleDeleteArticle = (articleId) => {
    const { articles } = this.state;
    ArticleResource.deleteArticle(articleId)
      .then(() => this.setState({
        articles: articles.filter(article => article.id !== articleId)
      }));
  };

  renderArticles = () => {
    const { articles } = this.state;
    return (
      <div>
        <SaveArticle onSaveArticle={this.handleSaveArticle} />
        <table border="1">
          <tbody>
            <tr align="center">
              <td width="50">Id</td>
              <td width="300">Title</td>
              <td width="300">Content</td>
            </tr>
            {
              articles.map(article => (
                <ArticleItem
                  key={article.id}
                  article={article}
                  onUpdateArticle={this.handleUpdateArticle}
                  onDeleteArticle={this.handleDeleteArticle}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    );
  };

  render = () => (
    <div>
      {this.renderArticles()}
    </div>
  );
}
