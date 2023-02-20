import getImage from "api/artic/getImage";
import ButtonFavouriteWithText from "components/ButtonFavourite/ButtonFavouriteWithText";
import Card from "components/Card/Card";
import LoadingAnimation from "components/LoadingAnimation/LoadingAnimation";
import useArtworksQuery from "hooks/articQueries/useArtworksQuery";
import useFavourite from "hooks/articQueries/useFavourite";
import { useParams } from "react-router-dom";

import "./PageArtworkDetails.scss";

const PageArtworkDetails = () => {
  const { id } = useParams();

  const idNumber = parseInt(id || "-1");

  const { collection, error, isLoading } = useArtworksQuery({
    params: {
      ids: [idNumber],
      fields: [
        "id",
        "title",
        "artist_title",
        "artist_display",
        "department_title",
        "image_id",
        "alt_image_ids",
        "classification_title",
        "material_titles",
      ],
    },
  });

  const { isFavourite, toggleFavourite } = useFavourite("artworks", idNumber);

  if (isLoading) return <LoadingAnimation />;
  if (!isLoading && collection.length === 0)
    return (
      <h2 className="pageArtworkDetails-pageInfo">
        The page couldn't be found. It may have been deleted or did't exist at
        all
      </h2>
    );
  if (error)
    return (
      <h2 className="pageArtworkSearch-pageInfo">
        There has been an error fetching your request
      </h2>
    );
  const artwork = collection[0];

  if (collection.length > 0)
    return (
      <div className="pageArtworkDetails">
        <Card>
          <div className="pageArtworkDetails-image">
            <img src={getImage(artwork.image_id, "md")} alt="" />
          </div>
          <h1>{artwork.title}</h1>
          <h2>{artwork.artist_title}</h2>
          <hr />
          <table className="pageArtworkDetails-info">
            <tbody>
              <tr>
                <td>Classification:</td>
                <td>{artwork.classification_title}</td>
              </tr>
              <tr>
                <td>Materials:</td>
                <td>{artwork.material_titles.join(", ")}</td>
              </tr>
              <tr>
                <td>Artist info:</td>
                <td>{artwork.artist_display}</td>
              </tr>
              <tr>
                <td>Department:</td>
                <td>{artwork.department_title}</td>
              </tr>
            </tbody>
          </table>
          <ButtonFavouriteWithText
            enabled={isFavourite}
            onClick={() => toggleFavourite()}
          />
        </Card>
      </div>
    );
  return null;
};

export default PageArtworkDetails;
