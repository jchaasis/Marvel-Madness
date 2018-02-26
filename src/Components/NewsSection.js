import React, { Component } from 'react';

import NewsStory from './NewsStory.js';

class NewsSection extends Component {
  constructor(props){
    super(props)

    this.state = {
      articles: [],
    }
  }

  componentWillMount(){
  //send a request to the news api to find all english articles related to Marvel
  fetch(`https://newsapi.org/v2/everything?q=Marvel&language=en&apiKey=629ea07b63e54ee296b6cbfab902ecf8`)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    this.setState({
      articles: response.articles,
    })
  })
}


  render(){
    console.log(this.state.articles)
    let articles = this.state.articles.map((article, index) => <NewsStory key={index} story={article} />)

    return(
    <div>
      <h3> Marvel in the News </h3>
      <ul>
        {articles}
      </ul>
    </div>
    );
  }
}

export default NewsSection;
