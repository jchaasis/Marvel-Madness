import React, { Component } from 'react';


class NewsStory extends Component {

  render(){

    return(
      <li className="article">
        <a href={this.props.story.url} className="articleLink">
        <h4> {this.props.story.title} </h4>
        </a>
        <img src={this.props.story.urlToImage} alt ="" height="50" className="articleImage"/>
        <p> {this.props.story.description} </p>

      </li>
    );
  }
}

export default NewsStory;
