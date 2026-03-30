import { useState } from "react"
export default function Footer() {
    const [date, setDate] = useState('')
    return (
        <footer>
            <h1 className="text-3xl text-center mt-28 text-white font-bold">Contact <span className="!text-[#1fff00]">Me</span></h1>
            <div className="text-white flex justify-center mt-16 text-4xl gap-6">
                <a href="https://github.com/bekicoder">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/bereket-girma-8037163bb/">
                    <i className="fab fa-linkedin"></i>
                </a>
                {/*<a>
                    <i className="fab fa-facebook"></i>
                </a>*/}
                <a href="https://www.upwork.com/freelancers/~016615759a077a2827">
                    <i className="fab fa-upwork"></i>
                </a>

            </div>
            <div className="w-full text-center text-white mt-28 mb-7 !font-normal flex flex-col gap-10">
                <h1>DEVELOPED BY ❤️ BEREKET GIRMA</h1>
                <h1> &copy; All Rights Reserved. 2025</h1>
            </div>
        </footer >
    )
}
