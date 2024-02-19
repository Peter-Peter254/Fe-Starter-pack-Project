import DashboardPageTitle from "../../components/DashboardPageTitle";
import PenaltiesTable from "../../components/Tables/PenaltiesTable";
import DefaultLayout from "../../layout/DefaultLayout";

export default function Penalties() {

    const submitPenalty = () => {

    }
    return (
        <DefaultLayout>
            <div>
                <DashboardPageTitle title="New Penalty" />
                <div className="bg-white shadow-md rounded-lg py-3 px-10">
                    {/*Create Penalty here*/}
                    <form className="py-10">
                        <div>
                            <label
                                htmlFor="name"
                                className="font-semibold inline-block min-w-[170px]">Name<span className="text-red">*</span></label>
                            <input
                                id="name"
                                placeholder="John Doe"
                                autoComplete="given-name"
                                className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4" />
                        </div>

                        <div className="mt-8">
                            <label
                                htmlFor="graceperiod" className="font-semibold inline-block min-w-[170px]">Grace Period (Days)<span className="text-red">*</span></label>
                            <input
                                id="graceperiod"
                                placeholder="Days"
                                className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4" />
                        </div>

                        <div className="mt-8">
                            <label
                                htmlFor="category"
                                className="font-semibold inline-block min-w-[170px]">Category<span className="text-red">*</span></label>
                            <select id="category"
                                className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4"
                                placeholder="Text Here">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>

                        <div className="mt-8">
                            <label
                                htmlFor="chargetype"
                                className="font-semibold inline-block min-w-[170px]">Charge Type</label>
                            <select id="chargetype"
                                className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4"
                                placeholder="Text Here">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>

                        <div className="mt-8">
                            <label
                                htmlFor="recoverymethod"
                                className="font-semibold inline-block min-w-[170px]">Recovery Method <span className="text-red">*</span></label>
                            <select id="recoverymethod"
                                className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4"
                                placeholder="Text Here">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>

                        <div className="mt-8">
                            <label htmlFor="value"
                                className="font-semibold inline-block min-w-[170px]">Value <span className="text-red">*</span></label>
                            <input
                                type="number"
                                id="value"
                                className="w-full sm:w-full md:w-2/5 lg:w-[420px] bg-inactive border-inactive text-gray-900 text-sm rounded-lg shadow py-3 pl-4"
                                placeholder="10" />
                        </div>

                        <div className="lg:ml-[170px] my-2">
                            <div className="flex">
                                <div>
                                    <input type="checkbox" className="mr-4" />
                                    <label className="mr-10 text-primary font-bold">Enable Free</label>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label className="mx-2 text-red font-bold">Disable Penalty</label>
                                </div>
                            </div>
                        </div>

                        <div className="lg:ml-[170px] md:ml-[170px] sm:ml-5 mt-10 flex">
                            <button
                                className="px-5 lg:px-15 text-center py-2 rounded bg-white border shadow">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                onClick={submitPenalty}
                                className="px-5 lg:px-15 bg-primary text-white mx-3 px-15 text-center py-2 rounded">
                                Save
                            </button>
                        </div>
                    </form>
                    <div className="mt-5">
                        <PenaltiesTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}