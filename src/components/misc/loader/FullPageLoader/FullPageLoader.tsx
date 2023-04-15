import "./FullPageLoader.css";
import { ClimbingBoxLoader } from "react-spinners";

export const FullPageLoader = ({ title }: { title?: string }) => {
  return (
    <div className="FullPageLoader">
      <ClimbingBoxLoader
        color="#36d7b7"
        loading={true}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h1>{title}</h1>
    </div>
  );
};
