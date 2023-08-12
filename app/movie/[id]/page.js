import React from 'react'
import Movies from '@/mocks/movies.json'
import MovieContainer from '@/containers/movie'
import {notFound} from 'next/navigation'

const getMovie = async (movieId) => {
 try{
  const res = await fetch(`${process.env.BASE_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`)
  return res.json()
 }catch(error){
  throw new Error(error)
 }
}

async function MoviePage({params}) {
  const movieDetail = await getMovie(params.id)
  if(!movieDetail){
    notFound();
  }

  return (
    <MovieContainer movie={movieDetail}/>
  )
}

export default MoviePage