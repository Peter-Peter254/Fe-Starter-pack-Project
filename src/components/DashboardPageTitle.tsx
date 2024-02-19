import { FaArrowLeft } from "react-icons/fa";

interface titlename {
    title: string;
}

export default function DashboardPageTitle(props: titlename) {

    const { title } = props;
    return (
        <div className='flex items-center'>
            <FaArrowLeft className='inline-block text-black' />
            <h1 className='text-black font-bold text-xl ml-2'>{title}</h1>
        </div>
    )
}