import { Artwork } from "api/artic/artwork/types";
import getImage from "api/artic/getImage";
import Button from "components/Button/Button";
import ButtonFavourite from "components/ButtonFavourite/ButtonFavourite";
import Card from "components/Card/Card";
import { useNavigate } from "react-router-dom";
import { IndexedCollectionItem } from "store/store";
import shortenText from "utils/shortenText";
import "./ArtworkItem.scss";

interface ArtworkItemProps {
  item: IndexedCollectionItem<Artwork>;
  className?: string;
}

const ArtworkItem = ({ item, className }: ArtworkItemProps) => {
  const navigate = useNavigate();
  const openDetails = (id: number) => {
    navigate(`/artwork/${id}`);
  };
  return (
    <Card>
      <ButtonFavourite
        enabled={true}
        className="artworkItem-fav"
      ></ButtonFavourite>
      <div className={`artworkItem ${className ? className : ""}`}>
        <div className="artworkItem-thumbnail">
          <img
            src={getImage(item.image_id, "sm")}
            alt=""
            onClick={() => openDetails(item.id)}
          />
        </div>
        <div className="artworkItem-info">
          <h4 className="t4 artworkItem-title" title={item.title}>
            {shortenText(item.title, 60)}
          </h4>
        </div>
        <Button
          className="artworkItem-detailsButton"
          onClick={() => openDetails(item.id)}
        >
          Details
        </Button>
      </div>
    </Card>
  );
};

export default ArtworkItem;
