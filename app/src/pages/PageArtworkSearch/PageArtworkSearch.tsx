import ArtworkList from "components/Artwork/ArtworkList";
import LoadingAnimation from "components/LoadingAnimation/LoadingAnimation";
import PageControls from "components/PageControls/PageControls";
import useArtworksQuery from "hooks/articQueries/useArtworksQuery";
import "./PageArtworkSearch.scss";

import { useSearchParams } from "react-router-dom";

const PageArtworkSearch = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const perPage = parseInt(searchParams.get("perPage") || "25");

  const handlePageControls = (newPage?: number, newPerPage?: number) => {
    setSearchParams({
      q: query,
      page: newPage?.toString() || page.toString(),
      perPage: newPerPage?.toString() || perPage.toString(),
    });
  };

  const { collection, error, isLoading } = useArtworksQuery({
    params: {
      page: page,
      limit: perPage,
      fields: ["id", "title", "image_id"],
    },
    searchParams: {
      q: query,
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
        <h2 className="pageArtworkSearch-pageInfo">
          There has been an error fetching your request
        </h2>
      );
    if (collection.length === 0)
      return <h2 className="pageArtworkSearch-pageInfo">No results</h2>;
    return (
      <>
        <h1 className="pageArtworkSearch-pageInfo">Results for "{query}"</h1>
        <ArtworkList collection={collection} />
      </>
    );
  };

  return (
    <div className="pageArtworkSearch">
      {pageControls}
      <div className="pageArtworkSearch-content">{content()}</div>
      {!isLoading && collection.length > 0 && pageControls}
    </div>
  );
};

export default PageArtworkSearch;
