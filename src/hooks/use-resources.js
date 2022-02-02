import { useContext } from "react/cjs/react.development";
import ResourcesContext from "../store/resources-context";

const useResources = () => {
    const resCtx = useContext(ResourcesContext);
    const canAffordHandler = price => {
        const userGold = parseInt(resCtx.gold);
        return userGold < parseInt(price) ? false : true;
    }

    return {
        canAfford: canAffordHandler
    }
};

export default useResources;