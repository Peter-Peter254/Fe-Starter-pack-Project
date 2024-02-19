import { useState } from 'react';
import Confirmation from '../../components/Fees/Confirmation';
import FeeSplits from '../../components/Fees/FeeSplits';
import GraduatedScale from '../../components/Fees/GraduatedScale';
import FeeInformation from '../../components/Fees/Information';
import DefaultLayout from '../../layout/DefaultLayout';
import DashboardPageTitle from '../../components/DashboardPageTitle';


export default function CreditAdministration() {
    const [activeSection, setActiveSection] = useState(0);
    const [activeButton, setActiveButton] = useState(0);
    const [completedSections, setCompletedSections] = useState<number[]>([]);

    const handleNext = () => {
        setActiveSection(activeSection + 1);
        setActiveButton(activeButton + 1);
        setCompletedSections([...completedSections, activeSection]);
    };

    const handlePrevious = () => {
        setActiveSection(activeSection - 1);
        setActiveButton(activeButton - 1);
        setCompletedSections(completedSections.slice(0, -1));
    };

    return (
        <DefaultLayout>
            <div>
                <DashboardPageTitle title='New Fee' />
                <div className='bg-white shadow py-3 px-10 rounded-lg'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 pt-8 gap-2'>
                        <button
                            className={`focus:outline-none ${activeButton === 0 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded-lg bg-inactive mr-3`}
                            onClick={() => { setActiveSection(0); setActiveButton(0); }}
                            disabled={completedSections.includes(0)}
                        >
                            Fees Information
                        </button>
                        <button
                            className={`focus:outline-none ${activeButton === 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded-lg bg-inactive mr-3`}
                            onClick={() => { setActiveSection(1); setActiveButton(1); }}
                            disabled={!completedSections.includes(0) || completedSections.includes(1)}
                        >
                            Graduated Scale
                        </button>
                        <button
                            className={`focus:outline-none ${activeButton === 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded-lg bg-inactive mr-3`}
                            onClick={() => { setActiveSection(2); setActiveButton(2); }}
                            disabled={!completedSections.includes(1) || completedSections.includes(2)}
                        >
                            Fee Splits
                        </button>
                        <button
                            className={`focus:outline-none ${activeButton === 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded-lg bg-inactive mr-3`}
                            onClick={() => { setActiveSection(3); setActiveButton(3); }}
                            disabled={!completedSections.includes(2) || completedSections.includes(3)}
                        >
                            Confirmation
                        </button>
                    </div>
                    {activeSection === 0 && <FeeInformation onNext={handleNext} />}
                    {activeSection === 1 && <GraduatedScale onNext={handleNext} onPrevious={handleNext} />}
                    {activeSection === 2 && <FeeSplits onNext={handleNext} onPrevious={handlePrevious} />}
                    {activeSection === 3 && <Confirmation onPrevious={handlePrevious} />}
                </div>
            </div>
        </DefaultLayout>
    );
};
