import { PenaltyData } from "../../data/PenaltiesData";

export default function PenaltiesTable() {
    return (
        <>
            <div>
                {PenaltyData.map((penalty) => (
                    <div key={penalty.id}>
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 border-t mt-5">
                            <div>
                                <h2>Name</h2>
                                <p className="text-black font-bold">{penalty.Name}</p>
                            </div>
                            <div>
                                <h2>Grace Period</h2>
                                <p className="text-black font-bold">{penalty.GracePeriod}</p>
                            </div>
                            <div>
                                <h2>Category</h2>
                                <p className="text-black font-bold">{penalty.Category}</p>
                            </div>
                            <div>
                                <h2>Name</h2>
                                <p className="text-black font-bold">{penalty.Name}</p>
                            </div>
                            <div>
                                <h2>Charge Type</h2>
                                <p className="text-black font-bold">{penalty.ChargeType}</p>
                            </div>
                            <div>
                                <h2>Recovery Method</h2>
                                <p className="text-black font-bold">{penalty.Recoverymethod}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}