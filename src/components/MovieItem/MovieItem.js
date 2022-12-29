import React, { Component } from 'react';
import './MovieItem.css';
import {connect} from "react-redux"
import {addToMovie} from "../../redux/actions/action";

class MovieItem extends Component{
  
  ifIdInFavorites = (imdbID) => {
    const active = this.props.listMovies.find((item) => {
      return item.imdbID === imdbID;
    });
    if (active) {
      return true;
    }
  };

    render(){
        const {Title,Poster,Year,imdbID,addMovie}=this.props
        return(
            <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
              <h3 className="movie-item__title">
                {Title}&nbsp;({Year})
              </h3>
              <button
                type="button"
                className="movie-item__add-button"
                onClick={() => {
                  addMovie(imdbID);
                }}
               disabled={this.ifIdInFavorites(imdbID)}
          >
            {this.ifIdInFavorites(imdbID) ? "Added" : "Add to List"}
              </button>
            </div>
          </article>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    listMovies : state.listMovies
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addMovie: (id) => dispatch(addToMovie(id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);