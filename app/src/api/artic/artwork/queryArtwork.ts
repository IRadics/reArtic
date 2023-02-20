import axios, { AxiosError, AxiosResponse } from "axios";
import { pickBy } from "lodash";
import log from "utils/log";
import { Artic_response, SearchParams } from "../types";
import { CollectionParamsArtwork } from "./types";

export interface QueryArtworkParams {
  params?: CollectionParamsArtwork;
  searchParams?: SearchParams;
}

const queryArtwork = async ({ params, searchParams }: QueryArtworkParams) => {
  const paramsCleaned = pickBy(params, (v) => v !== undefined);
  const searchParamsCleaned = pickBy(searchParams, (v) => v !== undefined);

  const searchParamsPassed = Object.keys(searchParamsCleaned).length > 0;

  return axios
    .get(
      `https://api.artic.edu/api/v1/artworks${
        searchParamsPassed ? "/search" : ""
      }`,
      { params: { ...paramsCleaned, ...searchParamsCleaned } }
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
