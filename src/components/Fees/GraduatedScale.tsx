import GraduatedScaleTable from "../Tables/GraduatedScaleTable";

interface GraduatedScaleprops {
    onNext: () => void;
    onPrevious: () => void;
}
const GraduatedScale: React.FC<GraduatedScaleprops> = ({ onNext, onPrevious }) => {
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
                    <label htmlFor="lowerlimit"
                        className="font-semibold inline-block min-w-[170px]">Lower Limit</label>
                    <input
                        type="numner"
                        id="lowerlimit"
                        className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4"
                        placeholder="120" />
                </div>

                <div className="mt-8">
                    <label
                        htmlFor="upperlimit" className="font-semibold inline-block min-w-[170px]">Upper Limit</label>
                    <input
                        id="upperlimit"
                        className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4" />
                </div>

                <div className="mt-8">
                    <label
                        htmlFor="recoverymethod"
                        className="font-semibold inline-block min-w-[170px]">Charge Type</label>
                    <select id="recoverymethod"
                        className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4"
                        placeholder="Text Here">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                <div className="mt-8">
                    <label
                        htmlFor="value"
                        className="font-semibold inline-block min-w-[170px]">Value</label>
                    <input
                        id="upperlimit"
                        className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4"
                         />
                </div>

                <div className="lg:ml-[170px] mt-3 flex">
                    <button
                        className="px-5 text-center py-2 rounded bg-white border shadow">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-5 bg-primary text-white mx-3 px-15 text-center py-2 rounded">
                        Add
                    </button>
                </div>
            </form>
            <div className="w-full ">
                <GraduatedScaleTable />
                <div className="mt-5 flex lg:justify-end">
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
export default GraduatedScale;