import axios from "axios";
const marvelApi = "http://gateway.marvel.com/v1/public/characters";

export const getHeroes = async ({ apikey, hash, ts, page = 0 }) => {
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
