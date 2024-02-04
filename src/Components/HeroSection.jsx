
import vector from "../assets/vector.svg"
import dude from "../assets/image 1.png"
import scrolldown from "../assets/Scroll Down.svg"
function HeroSection() {
    return (
        <div className="hero-section bg-gradient-to-r from-[#FFFFFF00] to-[#F5753B0D] flex flex-col">
            <div id="Hero" className=" grid grid-cols-[70%,1fr] flex-1 relative">
            <div className="flex flex-col justify-center items-left px-[70px]">
                <h1 className="text-7xl font-medium text-left text-[#000]">Start Training Today </h1>
                <h1 className="text-7xl font-medium text-left text-[#000]"> with a <span className="pinkcolor">Lifestyle Change</span> </h1>  
                <p className="text-2xl text-left font-normal text-[#000] mt-5 mb-5">Lorem ipsum dolor sit amet consectetur. Eget ut. Lorem ipsum dolor sit amet consectetur </p>
                <div className="flex gap-8">
                <button className="pink px-8 py-4 rounded-lg text-base text-white">Lorem ipsum</button>
                <button className=" border-2 border-[#c94277] px-8 py-4 rounded-lg text-base pinkcolor">Lorem ipsum</button>
                </div>
            </div>
            <div className="flex align-bottom justify-center relative">
                <img className="absolute z-[-1]  lg:h-[400px] md:h-[400px] 2xl:h-[607px] bottom-0 right-0" alt="Vector" src={vector} />
                <img className="h-[70vh] ml-auto mt-auto" alt="dude" src={dude} />
            </div>
            <img className="absolute bottom-[32px] left-[70px]" alt="scrolldown" src={scrolldown} />
            </div>
        </div>
    )
}

export default HeroSection