import classes from "./PageNumber.module.css";

interface PageNumberProps {
  item: number;
  currentPage: number;
  handleClick?: () => void;
  additionalPages: number[];
}

const PageNumber: React.FC<PageNumberProps> = ({
  item,
  currentPage,
  handleClick,
  additionalPages,
}) => {
  return (
    <span
      onClick={handleClick}
      className={
        currentPage === item || additionalPages.includes(item)
          ? classes.currentPage
          : classes.pageNumber
      }
    >
      {item}
    </span>
  );
};

export default PageNumber;
