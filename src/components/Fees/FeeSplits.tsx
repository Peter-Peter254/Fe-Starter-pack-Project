import FeeScaleTable from "../Tables/FeeScaleTable";

interface FeeSplitsProps {
    onNext: () => void;
    onPrevious: () => void;
}
const FeeSplits: React.FC<FeeSplitsProps> = ({ onNext, onPrevious }) => {
    const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onNext();
    };
    const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onPrevious();
    }
    return (
        <div className="py-8">
            <form>
                <div>
                    <label
                        htmlFor="chargetype"
                        className="font-semibold inline-block min-w-[170px]">Charge Type</label>
                    <select id="chargetype"
                        className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4"
                        placeholder="Text Here">
                        <option value="cash">Cash</option>
                        <option value="intrest">Intrest</option>
                    </select>

                </div>

                <div className="mt-8">
                    <label
                        htmlFor="name" className="font-semibold inline-block min-w-[170px]">Name</label>
                    <input
                        id="upperlimit"
                        placeholder="John Doe"
                        className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4" />
                </div>

                <div className="mt-8">
                    <label htmlFor="percentage"
                        className="font-semibold inline-block min-w-[170px]">Percentage</label>
                    <input
                        type="numner"
                        id="percentage"
                        className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4"
                        placeholder="10" />
                </div>

                <div className="lg:ml-[170px] mt-3 flex">
                    <button
                        className="px-5 text-center py-2 rounded bg-white border shadow">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-primary text-white mx-3 px-5 text-center py-2 rounded">
                        Add
                    </button>
                </div>
            </form>
            <div className="w-full ">
                <FeeScaleTable />
                <div className="mt-5 flex justify-end">
                    <button
                        onClick={handlePrevious}
                        className="px-5 text-center py-2 rounded bg-white border shadow"
                    >
                        Cancel
                    </button>
                    <button
                        className="px-5 py-2 rounded text-white border shadow mx-3 bg-primary text-center"
                        onClick={handleNextClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
export default FeeSplits;