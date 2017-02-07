import React from 'react';
import $ from 'jquery';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {handleMovieChange, submitMovie} from '../../../actions/tvActions';
import store from '../../../store/configureStore';

      // {console.log(props.children)}
      // {props ?  store.getState.movie : <h1> loading </h1>}
      // {store.getState().movieArray}

const Tv = (props) => {
  console.log( props.submitMovie)
  return (
    <div>
    {store.getState().movie}
      <form onSubmit = {props.submitMovie}>
        <input onChange = {props.handleMovieChange} type = 'text' placeholder = 'Movie'/>
        <input type = 'submit' placeholder = 'Movie'/>
      </form>
      {props.movie}
      {props.movieArray}

    </div>

  )


};


const mapStateToProps = state => {
  console.log(store)
  return {
    movie: state.movie,
    movieArray: state.movieArray
  };
};

const dispatchToProps = dispatch => {
  return {
    handleMovieChange: (event) => { 
      const text = event.target.value;
      console.log(text)
      dispatch(handleMovieChange(text));
    },

    submitMovie: (event) =>{
      event.preventDefault()
      dispatch(submitMovie())
    }
  }

};

export default connect (
  mapStateToProps,
  dispatchToProps

) (Tv);
