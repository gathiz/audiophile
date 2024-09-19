import FeatureYx1 from "./FeatureYx1";
import FeatureZx7 from "./FeatureZx7";
import FeatureZx9 from "./FeatureZx9";

const Feature = () => {
    return (
        <div className="flex flex-col w-full items-center justify-between mt-16 pt-16 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <FeatureZx9/>
            <FeatureZx7/>
            <FeatureYx1/>
        </div>
    );
};

export default Feature;