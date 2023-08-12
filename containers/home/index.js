import React from 'react'
import FeaturedMovie from '@/components/featured-movie'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'

function HomeContainer({topRated =[],
  populerMovies=[],
  selectedCategory,
  categories=[]
}) {
  return (
    <div>
      <FeaturedMovie movie={topRated?.[0]}/>
      <Categories categories={categories.slice(0,5)}/>
      {selectedCategory.movies.length > 0 && (
        <MoviesSection title={categories.find((genre) => `${genre.id}` === selectedCategory.id).name} movies={selectedCategory.movies}/>
      )}
      <MoviesSection title={'Populer Films'} movies={topRated.slice(1,7)}/>
      <MoviesSection title={'Your Favorites'} movies={populerMovies.slice(7,13)}/>
    </div>
  )
}

export default HomeContainer