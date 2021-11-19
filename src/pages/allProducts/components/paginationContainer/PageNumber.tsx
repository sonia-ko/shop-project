import classes from "./PageNumber.module.css";

interface PageNumberProps {
  item: number;
  currentPage: number;
  handleClick?: () => void;
}

const PageNumber: React.FC<PageNumberProps> = ({
  item,
  currentPage,
  handleClick,
}) => {
  return (
    <span
      onClick={handleClick}
      className={
        currentPage === item ? classes.currentPage : classes.pageNumber
      }
    >
      {item}
    </span>
  );
};

export default PageNumber;
