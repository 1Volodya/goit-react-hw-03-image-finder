

// {https://pixabay.com/api/?q=cat&page=1&key=40635917-db33a317d93be5827193fa0c0&image_type=photo&orientation=horizontal&per_page=12}

import axios from 'axios';

export const requestImagesByQuery = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=40635917-db33a317d93be5827193fa0c0&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};