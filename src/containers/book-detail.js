import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render(){

    if(!this.props.book){
      return(
        <div>
        <h4>Select a book to get started !! </h4>
        </div>
      )
    }
    return(
      <div>
        <h5> Details for:</h5>
        <div>
        <p>
        <b>{this.props.book.title}</b>
        </p>
        <p>
        Pages: {this.props.book.pages}
        </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  };
}

export default connect (mapStateToProps)(BookDetail)
