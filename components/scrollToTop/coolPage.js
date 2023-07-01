import ScrollToTop from "react-scroll-to-top";
import { FaArrowAltCircleUp } from "react-icons/fa";
const CoolPage = () => {
  return (
    <div>
      <div />
      <ScrollToTop smooth component={<FaArrowAltCircleUp className="w-7 h-10 mx-auto text-black"/>}/>
    </div>
  );
};

export default CoolPage;