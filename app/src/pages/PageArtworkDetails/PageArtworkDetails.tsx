import getImage from "api/artic/getImage";
import Card from "components/Card/Card";
import LoadingAnimation from "components/LoadingAnimation/LoadingAnimation";
import useArtworksQuery from "hooks/articQueries/useArtworksQuery";
import { useParams } from "react-router-dom";

import "./PageArtworkDetails.scss";

const PageArtworkDetails = () => {
  const { id } = useParams();

  const { collection, error, isLoading } = useArtworksQuery({
    params: {
      ids: [id ? parseInt(id) : -1],
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

  if (isLoading) return <LoadingAnimation />;
  if (!isLoading && collection.length === 0)
    return (
      <h2 className="pageArtworkDetails-pageInfo">
        The page couldn't be found. It may have been deleted or did't exist at
        all
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
        </Card>
      </div>
    );
  return null;
};

export default PageArtworkDetails;
