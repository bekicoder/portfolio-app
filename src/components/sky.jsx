export default function Sky() {
    return (
        <div className="h-screen w-screen fixed top-0 -z-10">
            <ul className="w-full h-full relative">
                <li className="w-0.5 h-0.5 bg-white rounded-full absolute left-40 top-20"></li>
                <li className="w-0.5 h-0.5 bg-white rounded-full absolute left-80 top-10"></li>
                <li className="w-0.5 h-0.5 bg-white rounded-full absolute left-60 top-80"></li>
                <li className="w-0.5 h-0.5 bg-white rounded-full absolute left-40 top-20"></li>
                <li className="w-0.5 h-0.5 bg-white rounded-full absolute left-[30%] top-[70%]"></li>
                <li className="bg-white rounded-full absolute left-[70%] top-[50%] star1 shadow-[10px_10px_70px_white]"></li>
                <li className="w-0.5 h-0.5 bg-white rounded-full absolute left-[40%] top-[95%]"></li>
                <li className="w-0.5 h-0.5 bg-white rounded-full absolute left-[90%] top-[60%]"></li>
                <li className="star1 bg-white rounded-full absolute left-[80%] top-[95%]"></li>
                <li className="star1 bg-white rounded-full absolute left-[30%] top-[70%]"></li>
                <li className="w-0.5 h-0.5 bg-white rounded-full absolute left-[20%] top-[50%]"></li>
                <li className="w-0.5 h-0.5 bg-white rounded-full absolute left-[40%] top-[20%]"></li>
                <li className="w-0.5 h-0.5 bg-white rounded-full absolute left-[10%] top-[90%]"></li>
                <li className="w-1 h-1 bg-white rounded-full absolute left-[80%] top-[70%]"></li>
                <li className="star1 bg-white rounded-full absolute left-[10%] top-[10%]"></li>
            </ul>
        </div>
    )
}
