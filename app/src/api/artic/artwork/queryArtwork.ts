import axios, { AxiosResponse } from "axios";
import { Artic_response, SearchParams } from "../types";
import { CollectionParamsArtwork } from "./types";

const queryArtwork = async (
  params?: CollectionParamsArtwork,
  searchParams?: SearchParams
) => {
  return axios
    .get(
      `https://api.artic.edu/api/v1/artworks${searchParams ? "/search" : ""}`,
      { params: { ...params, ...searchParams } }
    )
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((response: AxiosResponse<Artic_response>) => {
      return response.data;
    });
};

export default queryArtwork;
