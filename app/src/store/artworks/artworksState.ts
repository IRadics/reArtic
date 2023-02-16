import { QueryArtworkParams } from "api/artic/artwork/queryArtwork";
import { Artwork } from "api/artic/artwork/types";
import { IndexedCollectionItem } from "store/store";

export interface ArtworksState {
  artworks: IndexedCollectionItem<Artwork>[];
  isFetchingArtworks: boolean;
  artworksRequestError: string;
  queryArtworkParams: QueryArtworkParams;
}
