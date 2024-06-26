import { Spinner } from "@nextui-org/react";


const SpinnerWithLabel = ({label}) => {
  return (
    <div className="h-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
      <Spinner label={label} color="warning" size="lg" />
    </div>
  );
}

export default SpinnerWithLabel;
