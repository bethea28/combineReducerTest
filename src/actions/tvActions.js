

// export const handleMovieChange = (text) => {
//  return {
//   type: 'handle' , data: text
//  }
// }

export function handleMovieChange(text) {
  return {
    type: 'handle',
    data: text
  };
}


export const submitMovie = (text) => {
 return {
  type: 'submit' , data: "text"
 }
}