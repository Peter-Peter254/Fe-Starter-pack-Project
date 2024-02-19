import FeeScaleTable from "../Tables/FeeScaleTable";
import GraduatedScaleTable from "../Tables/GraduatedScaleTable";
interface ConfirmationProps {
    onPrevious: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ onPrevious }) => {
    const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onPrevious();
    }
    return (
        <div className="py-10">
            <h2 className="text-xl font-bold text-black">Fees Information</h2>
            <GraduatedScaleTable />
            <h2 className="text-xl font-bold mt-3 text-black">Graduated Scales</h2>
            <GraduatedScaleTable />
            <h2 className="text-xl font-bold mt-3 text-black">Fee Splits</h2>
            <FeeScaleTable />
            {/*Cancel and Submit Confirmation btn*/}
            <div className="mt-10 flex justify-end">
                <button
                    onClick={handleNextClick}
                    className="px-5 text-center py-2 rounded bg-white border shadow"
                >
                    Cancel
                </button>
                <button
                    className="px-5 py-2 rounded text-white border shadow mx-3 bg-primary text-center"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}
export default Confirmation;