import axios, { AxiosError, AxiosResponse } from "axios";
import log from "utils/log";
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
    .catch((error: AxiosError) => {
      if (error.response) {
        log(error.response.data, "error");
        throw error.response.data;
      } else if (error.request) {
        log(error.request, "error");
        throw error.request;
      } else {
        log(error.message, "error");
        throw error.message;
      }
    })
    .then((response: AxiosResponse<Artic_response>) => {
      return response.data;
    });
};

export default queryArtwork;
