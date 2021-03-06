import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks } from "../actions";

class BooksIndex extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBooks() {
    return _.map(this.props.books, book => {
      return (
        <li className="list-group-item" key={book.id}>
          <Link to={`/books/${book.id}`}>
            <h3>Title: {book.title}</h3>
            <h5>By: {book.author}</h5>
            <h5>published: {book.publicationDate}</h5>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/books/new">
            Add a Book
          </Link>
        </div>
        <h3>Books:</h3>
        <ul className="list-group">
          {this.renderBooks()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(mapStateToProps, { fetchBooks })(BooksIndex);
