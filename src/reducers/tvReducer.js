
const defaultState = {
 movie:'',
 movieArray: ''
}



export default function (state = defaultState, action) {
  switch (action.type) {

  case "handle":
    return Object.assign({}, state, {movie: action.data})
    
  case 'submit':
   return Object.assign({}, state, {movieArray: state.movieArray.concat(action.data)})

  default:
    return defaultState

  }

  return state;

}


// const Reducer = (state = defaultState, action) => {
//  switch(action.type){
//   case 'handle':
//    return Object.assign({}, state, {movie: action.data})

//   case 'submit':
//    return Object.assign({}, state, {movieArray: state.movieArray.concat(action.data)})

//   default:
//     return defaultState
//  }

// }


// export default Reducer