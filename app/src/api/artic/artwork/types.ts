import {
  APIModel,
  CollectionParams,
  Color,
  DateQualifierTitle,
  PublishingVerificationLevel,
  SuggestAutocompleteAll,
  Thumbnail,
} from "../types";

export type ArtworkField = keyof Artwork;

export interface CollectionParamsArtwork extends CollectionParams {
  fields?: ArtworkField[];
}

export interface Artwork {
  id: number;
  api_model: APIModel;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: string[];
  thumbnail: Thumbnail;
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank: number;
  date_start: number;
  date_end: number;
  date_display: string;
  date_qualifier_title: DateQualifierTitle;
  date_qualifier_id: number | null;
  artist_display: string;
  place_of_origin: string;
  dimensions: null | string;
  medium_display: string;
  inscriptions: null | string;
  credit_line: string;
  catalogue_display: null | string;
  publication_history: null | string;
  exhibition_history: null | string;
  provenance_text: null | string;
  publishing_verification_level: PublishingVerificationLevel;
  internal_department_id: number;
  fiscal_year: number | null;
  fiscal_year_deaccession: null;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice: null | string;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness: number;
  color: Color | null;
  latitude: number | null;
  longitude: number | null;
  latlon: null | string;
  is_on_view: boolean;
  on_loan_display: null | string;
  gallery_title: string;
  gallery_id: number;
  artwork_type_title: string;
  artwork_type_id: number;
  department_title: string;
  department_id: string;
  artist_id: number;
  artist_title: string;
  alt_artist_ids: string[];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  term_titles: string[];
  style_id: null | string;
  style_title: null | string;
  alt_style_ids: string[];
  style_ids: string[];
  style_titles: string[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id: null | string;
  alt_subject_ids: string[];
  subject_ids: string[];
  subject_titles: string[];
  material_id: null | string;
  alt_material_ids: string[];
  material_ids: string[];
  material_titles: string[];
  technique_id: null | string;
  alt_technique_ids: string[];
  technique_ids: string[];
  technique_titles: string[];
  theme_titles: string[];
  image_id: string;
  alt_image_ids: string[];
  document_ids: string[];
  sound_ids: string[];
  video_ids: string[];
  text_ids: string[];
  section_ids: number[];
  section_titles: string[];
  site_ids: string[];
  suggest_autocomplete_all: SuggestAutocompleteAll[];
  source_updated_at: Date;
  updated_at: Date;
  timestamp: Date;
  suggest_autocomplete_boosted?: string;
}
