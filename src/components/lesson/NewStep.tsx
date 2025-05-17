import useStore from "../../store/store";
import { getWidth } from "../../utils/width";

const NewStep = () => {
    const { totalPages } = useStore();
    
    let width = getWidth(totalPages);

    return (
        <>
                 <progress className={`h-1 ${width}`} value={0} max={100} />
              &nbsp;
              </>
    )
}

export default NewStep;