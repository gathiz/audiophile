import { formatCurrency } from "../../../util"

interface SummaryItemProps {
    title: string;
    amount: number;
}
const SummaryItem: React.FC<SummaryItemProps> = ({ title, amount }) => {
    return (
        <div className="flex items-center justify-between my-2">
            <p className="text-sm uppercase">{title}</p>
            <p className="text-sm uppercase">{formatCurrency(amount)}</p>
        </div>
    );
}

export default SummaryItem;