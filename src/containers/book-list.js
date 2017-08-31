import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


// renders the view of component that has list of books.
// BookList wil be a container that holds
class BookList extends Component {

  renderList(){
    return this.props.books.map((book) => {
      return (
        <li 
        onClick={() => this.props.selectBook(book)}
        key={book.title}
        className="list-group-item">
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

// anything returned from this function will end up as props
// to the BookList container.
function mapDispatchToProps(dispatch){
  // when selectBooks is called, the result is to be passed on
  // to all the reducers. Binds this action to the dispatch object.
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

// connect bridges the state object to props of the component
// this state object is subjected to component only.
// whenever the state changes the component is re-rendered

// mapDispatchToProps: promtes BookList from a component to a container
// it needs to know about this new dispatch method, selectBook and make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
