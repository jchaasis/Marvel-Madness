import React, { Component } from 'react';


class NewsStory extends Component {
  constructor(props){
    super(props)

    this.state = ({
      hovered: false,
    })
  }

  handleEnter(ev){
    this.setState({
      hovered: true,
    })
  }

  handleExit(ev){
    this.setState({
      hovered: false,
    })
  }

  render(){

    let description = this.state.hovered === true ? <p className="articleDesc"> {this.props.story.description} </p> : null;


    let styles = {
      'backgroundImage': `url(${this.props.story.urlToImage})`,
    }

    return(
      <li style={styles} className="article" onMouseEnter={()=>this.handleEnter()} onMouseLeave={()=>this.handleExit()}>
        <a href={this.props.story.url} className="articleLink">
        <h4 className="articleTitle"> {this.props.story.title} </h4>
        {description}
        </a>
      </li>
    );
  }
}

export default NewsStory;
