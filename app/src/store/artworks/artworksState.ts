import { Artwork } from "api/artic/artwork/types";

export interface ArtworksState {
  artworks: Artwork[];
  isFetchingArtworks: boolean;
  artworksRequestError: string;
}
