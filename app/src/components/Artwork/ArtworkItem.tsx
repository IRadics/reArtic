import { Artwork } from "api/artic/artwork/types";
import getImage from "api/artic/getImage";
import ButtonFavourite from "components/ButtonFavourite/ButtonFavourite";
import Card from "components/Card/Card";
import { IndexedCollectionItem } from "store/store";
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
          <img src={getImage(item.image_id, "sm")} alt={item.title} />
        </div>
        <div className="artworkItem-info">
          <h2 className=" artworkItem-title">{item.title}</h2>
          <span className="t3 artworkItem-title">{item.artist_title}</span>
          <br />
          <span className="t4 artworkItem-title">
            {item.classification_title}
            {item.material_titles.length
              ? ", " + item.material_titles.join(", ")
              : ""}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ArtworkItem;
