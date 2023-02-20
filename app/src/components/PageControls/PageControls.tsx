import Button from "components/Button/Button";
import "./PageControls.scss";

type PageControlsProps = {
  className?: string;
  onNext: () => void;
  onPrevious: () => void;
  currentItemsPerPage: number;
  selectableItemsPerPage: number[];
  onItemsPerPageChanged: (itemsPerPage: number) => void;
};

const PageControls = ({
  className,
  onNext,
  onPrevious,
  currentItemsPerPage,
  selectableItemsPerPage,
  onItemsPerPageChanged,
}: PageControlsProps) => {
  return (
    <div className={`pageControls ${className ? className : ""}`}>
      <>
        <div className="pageControls-page">
          <Button onClick={onPrevious}>Previous</Button>
          <Button onClick={onNext}>Next</Button>
        </div>
        <span className="pageControls-perPageText">Per page:</span>
        <div className="pageControls-perPage">
          {selectableItemsPerPage.map((perPage) => {
            return (
              <Button
                onClick={() => onItemsPerPageChanged(perPage)}
                key={perPage}
                className={
                  currentItemsPerPage === perPage ? "pageControls-selected" : ""
                }
              >
                {perPage}
              </Button>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default PageControls;
