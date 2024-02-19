interface FeeInformationProps {
    onNext: () => void;
}

const FeeInformation: React.FC<FeeInformationProps> = ({ onNext }) => {
    const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onNext();
    };
    return (
        <div className="py-8">
            <form>
                <div>
                    <label htmlFor="name" className="font-semibold inline-block min-w-[170px]">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4" placeholder="John" />
                </div>

                <div className="mt-8">
                    <label htmlFor="category" className="font-semibold inline-block min-w-[170px]">Category</label>
                    <select id="category"
                        className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                <div className="mt-8">
                    <label htmlFor="recoverymethod" className="font-semibold inline-block min-w-[170px]">Recovery Method</label>
                    <select id="recoverymethod"
                        className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                <div className="mt-8">
                    <label htmlFor="recoveryaccount"
                        className="font-semibold min-w-44 inline-block min-w-[170px]">Recovery Account</label>
                    <select id="recoveryaccount"
                        className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                <div className="lg:ml-[170px] my-2">
                    <input type="checkbox" />
                    <label className="mx-2 text-primary font-bold">Enable Free</label>
                </div>

                <div className="lg:ml-[170px] mt-3">
                    <button
                        className="px-6 py-2 rounded bg-white border shadow mr-2">Cancel</button>
                    <button type="submit"
                        onClick={handleNextClick}
                        className="bg-primary text-white lg:mx-10 sm:mx-4 mt-3 px-6 py-2 rounded">Next</button>
                </div>
            </form>
        </div>
    )
}

export default FeeInformation;
