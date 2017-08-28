import React, {Component} from 'react';

// renders the view of component that has list of books. 
export default class BookList extends Component {

  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key=(book.title) className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render(){
    return{
      <ul className="List-group col-sm-4">
        {this.renderList()}
      </ul>
    }
  }
}
