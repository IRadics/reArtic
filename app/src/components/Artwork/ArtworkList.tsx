import { Artwork } from "api/artic/artwork/types";
import { IndexedCollectionItem } from "store/store";
import ArtworkItem from "./ArtworkItem";
import "./ArtworkList.scss";

type ArtworkListProps = {
  className?: string;
  collection: IndexedCollectionItem<Artwork>[];
};

const ArtworkList = ({ className, collection }: ArtworkListProps) => {
  return (
    <div className={`artworkList ${className ? className : ""}`}>
      {collection.map((aw) => (
        <ArtworkItem item={aw} key={aw.id} />
      ))}
    </div>
  );
};

export default ArtworkList;
