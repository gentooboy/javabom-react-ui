import API from '../../utils/API';

export default class ArticleResource {
  static path = '/articles';

  static getArticles = async () => API.get(this.path)
    .then((response) => {
      if (response && response.status === 200) {
        return response.data;
      }
      return [];
    })
    .catch((error) => {
      console.log(error);
      return [];
    });

  static saveArticle = async (article) => {
    const data = {
      data: {
        type: 'articles',
        attributes: {
          title: article.title,
          content: article.content
        }
      }
    };

    return API.post(this.path, data)
      .then(response => response.data)
      .catch(err => console.log(err));
  };

  static updateArticle = async (article) => {
    const data = {
      data: {
        type: 'articles',
        attributes: {
          title: article.attributes.title,
          content: article.attributes.content
        }
      }
    };

    return API.put(`${this.path}/${article.id}`, data)
      .then(response => response.data)
      .catch(error => console.log(error));
  };

  static deleteArticle = async articleId => API.delete(`${this.path}/${articleId}`)
    .catch(err => console.log(err));
}
