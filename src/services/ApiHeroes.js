import axios from "axios";
const marvelApi = "https://gateway.marvel.com/v1/public/characters?limit=10";

export const getHeroes = async ({ apikey, hash, ts, page = 1 }) => {
  const { data } = await axios.get(marvelApi, {
    params: {
      apikey,
      hash,
      ts,
      offset: page,
    },
  });

  return data;
};

export const getHeroComics = async ({ apikey, hash, ts }, heroId) => {
  const marvelApiHeroComics = `http://gateway.marvel.com/v1/public/characters/${heroId}/comics`;
  const { data } = await axios.get(marvelApiHeroComics, {
    params: {
      apikey,
      hash,
      ts,
    },
  });
  return data;
};
