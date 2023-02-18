/*
 * Generated from response with https://app.quicktype.io/
 */

import { Artwork } from "./artwork/types";

export type Artic_data = Artwork;

export interface Artic_response {
  pagination?: Pagination;
  data: Artic_data[];
  info: Info;
  config: Config;
}

export interface Config {
  iiif_url: string;
  website_url: string;
}

export type APIModel = "artworks";

export interface Color {
  h: number;
  l: number;
  s: number;
  percentage: number;
  population: number;
}

export enum DateQualifierTitle {
  Empty = "",
  Made = "Made",
}

export enum PublishingVerificationLevel {
  WebBasic = "Web Basic",
  WebCataloged = "Web Cataloged",
}

export interface SuggestAutocompleteAll {
  input: string[];
  contexts: Contexts;
  weight?: number;
}

export interface Contexts {
  groupings: Grouping[];
}

export enum Grouping {
  Accession = "accession",
  Title = "title",
}

export interface Thumbnail {
  lqip: null | string;
  width: number;
  height: number;
  alt_text: string;
}

export interface Info {
  license_text: string;
  license_links: string[];
  version: string;
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface CollectionParams {
  ids?: number[];
  page?: number;
  limit?: number;
  fields?: string[];
}

export interface SearchParams {
  /**
   * Search Query
   */
  q?: string;
  /**
   * For complex queries, you can pass Elasticsearch domain syntax queries here
   */
  query?: object;
  /**
   * Used in conjunction with query
   */
  sort?: string;
  /**
   * Starting point of results. Pagination via Elasticsearch conventions
   */
  from?: number;
  /**
   * Number of results to return. Pagination via Elasticsearch conventions
   */
  size?: number;
  /**
   * A comma-separated list of 'count' aggregation facets to include in the results.
   */
  facets?: string;
}
