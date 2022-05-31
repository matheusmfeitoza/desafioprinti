import axios from "axios";
const marvelApi = "http://gateway.marvel.com/v1/public/characters?limit=10";

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
