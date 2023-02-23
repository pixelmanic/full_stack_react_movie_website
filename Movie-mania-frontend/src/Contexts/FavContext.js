import React, { createContext, useReducer } from 'react';

export const FavContext = createContext();

const initialState = {
  movies: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-movie':
      const movieToAdd = action.payload;
      const movieExists = state.movies.some(movie => movie._id === movieToAdd._id);
      if (!movieExists) {
        return { ...state, movies: [...state.movies, movieToAdd] };
      }
      return state;
    default:
      return state;
  }
};

export const FavouritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, 'movie')
  return (
    <FavContext.Provider value={{ state, dispatch }}>
      {children}
    </FavContext.Provider>
  );
};
