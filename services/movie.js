export const getTopRated = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`);
    return res.json();
  }catch (error) {
    throw new Error(error);
  }
};

export const getPopulerMovies = async () => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`);
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const getCategories = async () => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};



export const getSingleCategory = async (genreId) => {
try{
    const res = await fetch(
        `${process.env.BASE_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
      );
      return res.json();

}catch(error){
throw new Error(error)
}
};
