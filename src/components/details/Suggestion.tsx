import { Other } from "../../types";
import SuggestionCard from "./SuggestiontCard";
import React from "react";

interface SuggestionProps {
    others: Other[];
}

const Suggestion: React.FC<SuggestionProps> = ({ others }) => {
    return (
        <div className="flex flex-col items-center w-full justify-between mt-8 py-8">
            <h1 className="text-2xl md:text-4xl font-bold uppercase mt-4">You may also like</h1>
            <div className="flex flex-col items-center md:flex-row px-8 w-full">
            {others.map((other,index) => (
                <SuggestionCard key={index} item={other}/>
            ))}
            </div>
        
        </div>
    );
}

export default Suggestion;