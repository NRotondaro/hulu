import requests from '../utils/requests';

export async function fetchTrending(genre) {
  const reponse = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`,
  ).then((res) => res.json());
  return reponse;
}
