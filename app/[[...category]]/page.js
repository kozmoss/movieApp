import HomeContainer from '@/containers/home'
import React from 'react'
import Movies from '@/mocks/movies.json'
import {getSingleCategory,getCategories,getPopulerMovies,getTopRated} from '../../services/movie'


async function HomePage({params}) {
    let selectedCategory;
   
    const topRatedPromise = getTopRated()
    const PopularPromise = getPopulerMovies()
    const categoriesPromise = getCategories()
    const [{results :topRated },{results :populerMovies},{genres:categories}] = await Promise.all([topRatedPromise,PopularPromise,categoriesPromise])

   

    if(params.category?.length > 0 ){
      const {results} = await getSingleCategory()
      selectedCategory = results
    }

  return ( <HomeContainer 
    topRated={topRated}
    categories={categories}
    populerMovies={populerMovies}
    selectedCategory={{
    id:params.category?.[0] ?? '',
    movies: selectedCategory ? selectedCategory.slice(0,7) : [] 
  }}/>
  )
}

export default HomePage