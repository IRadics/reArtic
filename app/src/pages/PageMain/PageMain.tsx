import ArtworkList from "components/Artwork/ArtworkList";
import useArtworksQuery from "hooks/articQueries/useArtworksQuery";

const PageMain = () => {
  const { collection } = useArtworksQuery({
    params: {
      limit: 25,
      page: 1,
      fields: ["title", "image_id", "id", "classification_title"],
    },
  });

  return <ArtworkList collection={collection}></ArtworkList>;
};

export default PageMain;
