import React, { Component } from 'react';

//import Components
import PageButton from './PageButton.js'

class Pagination extends Component {
  constructor(props){
    super(props)

  }

  //create a method that will add a Page Button to the pagination bar for the total number of pages that are required

  addButtons(pages){
    let counter = 0
    let pageNums = [];
    //compare the pages total with the counter.
    //push a single number to the page nums array until the
    while(counter < pages){
      counter = counter + 1;

      pageNums.push(counter)
    }

  return pageNums.map((page)=> <PageButton key={page} number={page}/>)
  }



  render(){


    return(
      <div>

        {this.addButtons(this.props.pages)}

      </div>
    )
  }
}

export default Pagination;
