import { Artwork } from "api/artic/artwork/types";
import getImage from "api/artic/getImage";
import ButtonFavourite from "components/ButtonFavourite/ButtonFavourite";
import Card from "components/Card/Card";
import { IndexedCollectionItem } from "store/store";
import shortenText from "utils/shortenText";
import "./ArtworkItem.scss";

interface ArtworkItemProps {
  item: IndexedCollectionItem<Artwork>;
  className?: string;
}

const ArtworkItem = ({ item, className }: ArtworkItemProps) => {
  return (
    <Card>
      <ButtonFavourite
        enabled={true}
        className="artworkItem-fav"
      ></ButtonFavourite>
      <div className={`artworkItem ${className ? className : ""}`}>
        <div className="artworkItem-thumbnail">
          <img src={getImage(item.image_id, "sm")} alt="" />
        </div>
        <div className="artworkItem-info">
          <h4 className="t4 artworkItem-title" title={item.title}>
            {shortenText(item.title, 75)}
          </h4>
          <span className="t5 artworkItem-classification">
            {item.classification_title}
          </span>
          <span className="t4 artworkItem-artist">{item.artist_title}</span>
        </div>
      </div>
    </Card>
  );
};

export default ArtworkItem;
