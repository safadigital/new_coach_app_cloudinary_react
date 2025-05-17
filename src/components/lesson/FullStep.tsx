import useStore from "../../store/store";
import { getWidth } from "../../utils/width";

const FullStep = () => {

    const { totalPages } = useStore();

     let width = getWidth(totalPages);

   

    return (
        <>
                <progress className={`h-1 ${width}`} value={100} max={100} />
 &nbsp;
              </>
    )
}

export default FullStep;