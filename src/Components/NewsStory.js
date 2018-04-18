import React, { Component } from 'react';


class NewsStory extends Component {

  render(){

    let description = <p> {this.props.story.description} </p>;

    let styles = {
      'backgroundImage': `url(${this.props.story.urlToImage})`,
    }

    return(
      <li style={styles} className="article">
        <a href={this.props.story.url} className="articleLink">
        <h4 className="articleTitle"> {this.props.story.title} </h4>
        </a>
      </li>
    );
  }
}

export default NewsStory;
