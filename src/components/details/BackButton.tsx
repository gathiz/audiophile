import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const nav = useNavigate();
    return (
        <button onClick={() => nav(-1)} className="text-hero-black font-bold hover:text-orange focus:text-orange h-12">
            Go Back
        </button>
    );
}

export default BackButton;