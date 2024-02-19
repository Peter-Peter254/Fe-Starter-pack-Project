import { GraduatedDataScales } from "../../data/GraduatedScales";

export default function GraduatedScaleTable() {
    return (
        <div className="relative overflow-x-auto mt-5 rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500  dark:text-gray-400">
                <thead className="text-xs bg-inactive rounded-lg ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Lower Limit
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Upper Limit
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Charge Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Percentage
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white shadow-xl pb-5">
                    {GraduatedDataScales.map((data, index) => (
                        <tr key={index}>
                            <td className="px-6 py-1  border-b border-dotted">{data.lowerLimit}</td>
                            <td className="px-6 py-1 border-b border-dotted">{data.upperLimit}</td>
                            <td className="px-6 py-1 border-b border-dotted">{data.chargeType}</td>
                            <td className="px-6 py-1 border-b border-dotted">{data.value}</td>
                            <td className="px-6 py-1 border-b border-dotted">
                                <button className="text-danger font-bold">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

