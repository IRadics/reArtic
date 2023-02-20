import ArtworkList from "components/Artwork/ArtworkList";
import LoadingAnimation from "components/LoadingAnimation/LoadingAnimation";
import PageControls from "components/PageControls/PageControls";
import useArtworksQuery from "hooks/articQueries/useArtworksQuery";
import "./PageArtworks.scss";

import { useSearchParams } from "react-router-dom";
import { getFavourites } from "api/artic/favourite";
import { SearchBar } from "components/SearchBar/SearchBar";

const PageArtworks = ({
  favouritesMode = false,
}: {
  favouritesMode?: boolean;
}) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const perPage = parseInt(searchParams.get("perPage") || "25");

  let ids = favouritesMode ? getFavourites("artworks") : undefined;
  //if there are no favourites, passing 1 which have no record TODO: find a better solution
  if (favouritesMode && ids?.length === 0) ids = [1];

  const handlePageControls = (
    newPage?: number,
    newPerPage?: number,
    query?: string
  ) => {
    setSearchParams({
      q: query || "",
      page: newPage?.toString() || page.toString(),
      perPage: newPerPage?.toString() || perPage.toString(),
    });
  };

  const { collection, error, isLoading } = useArtworksQuery({
    params: {
      ids: ids,
      page: page,
      limit: perPage,
      fields: ["id", "title", "image_id"],
    },
    searchParams: {
      q: query ? query : undefined,
    },
  });

  const pageControls = (
    <PageControls
      currentItemsPerPage={perPage}
      selectableItemsPerPage={[25, 50, 100]}
      onNext={() => handlePageControls(page + 1)}
      onPrevious={() => handlePageControls(Math.max(page - 1, 1))}
      onItemsPerPageChanged={(perPage) => handlePageControls(page, perPage)}
    />
  );

  const content = () => {
    if (isLoading) return <LoadingAnimation />;
    if (error)
      return (
        <h2 className="pageArtworks-pageInfo">
          There has been an error fetching your request
        </h2>
      );
    if (collection.length === 0)
      return <h2 className="pageArtworks-pageInfo">No results</h2>;

    let infoText = "Artworks";
    if (favouritesMode) infoText = "Favourite artworks";
    if (query) infoText = `Results for "${query}"`;

    return (
      <>
        <h1 className="pageArtworks-pageInfo">{infoText}</h1>
        <ArtworkList collection={collection} />
      </>
    );
  };

  return (
    <div className="pageArtworks">
      {!favouritesMode && (
        <SearchBar
          className="pageArtworks-searchBar"
          onSubmit={(searchTerm) =>
            handlePageControls(page, perPage, searchTerm)
          }
        ></SearchBar>
      )}
      {pageControls}
      <div className="pageArtworks-content">{content()}</div>
      {!isLoading && collection.length > 0 && pageControls}
    </div>
  );
};

export default PageArtworks;
