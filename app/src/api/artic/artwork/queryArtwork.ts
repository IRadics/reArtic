import axios, { AxiosResponse } from "axios";
import { Artic_response, SearchParams } from "../types";
import { CollectionParamsArtwork } from "./types";

export interface QueryArtworkParams {
  params?: CollectionParamsArtwork;
  searchParams?: SearchParams;
}

const queryArtwork = async ({ params, searchParams }: QueryArtworkParams) => {
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
