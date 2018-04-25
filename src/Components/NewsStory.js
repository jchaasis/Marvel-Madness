import React, { Component } from 'react';


class NewsStory extends Component {
  constructor(props){
    super(props)

    this.state = ({
      hovered: 0,
    })
  }

  handleEnter(ev){
    this.setState({
      hovered: 1,
    })
  }

  handleExit(ev){
    this.setState({
      hovered: 0,
    })
  }

  render(){

    let description = this.state.hovered === true ? <p className="articleDesc"> {this.props.story.description} </p> : null;

    let visibility = {
      'opacity': this.state.hovered,
    }

    let styles = {

      'backgroundImage': `url(${this.props.story.urlToImage})`,

    }

    return(
      <li style={styles} className="article" onMouseEnter={()=>this.handleEnter()} onMouseLeave={()=>this.handleExit()}>
        <a href={this.props.story.url} className="articleLink">
        <h2 className="articleTitle"> {this.props.story.title} </h2>
        <p style={visibility} className="articleDesc"> {this.props.story.description} </p>
        </a>
      </li>
    );
  }
}

export default NewsStory;
