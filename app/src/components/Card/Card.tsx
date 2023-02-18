import "./Card.scss";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <>
      <div className={`card ${className ? className : ""}`}>
        <div className="card-content">{children}</div>
      </div>
    </>
  );
};

export default Card;
