import { Spinner } from "@nextui-org/spinner";
import styles from './styles/styles.LoaderScreen.module.css';
import XylexLogo from "@/app/packages/ui/Logos/Xylex.jsx";

const LoaderScreen = () => {

  return (
    <div className="PageWrapper bg-primary">
      <div className={styles.LoadingContainer}>
        <XylexLogo />
        <div className="my-4 w-[50px] h-[50px]"></div>

        <Spinner label="Loading..." color="warning" size="lg" />
        <div className="relative flex w-10 h-10"></div>
      </div>
    </div>
  );
}


export default LoaderScreen;
 