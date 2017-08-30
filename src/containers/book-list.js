import React, {Component} from 'react';
import {connect} from 'react-redux';

// renders the view of component that has list of books.
// BookList wil be a container that holds
class BookList extends Component {

  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render(){
    return(
      <ul className="List-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// #bridge:
// mapStateToProps is part of react-redux library
// this function takes application state as argument
// the return object will show up as props inside of bookList component
// BookList will be parent component and it's children can access this state
function mapStateToProps(state){
  return {
    books: state.books
  };

}


export default connect(mapStateToProps)(BookList);
