// import group from "../assets/Group.png"
// import infinity from "../assets/infinity.svg"
// import checkheart from "../assets/checkheart.svg"
// import smile from "../assets/smile.svg"
// import award from "../assets/award.svg"
function WhyUs() {
    return (
        <div className='grid grid-cols-[30%,40%,30%] px-[70px] py-[80px] pb-0'>   
            <div className="flex-container "> 
         
            <div className ="grid grid-rows-3 gap-3 pb-[80px] " > 
            {/* <img className="h-[48px] w-[48px] ml-auto mt-auto object-[top-right] " alt="infinity" src={infinity} /> */}
         
                <h1 className="  text-3xl font-medium text-right">Lorem ipsum </h1>
                <h2 className="  text-1xl font-medium text-right">
                Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla porttitor duis hendrerit id. Lorem ipsum dolor sit amet 
                                </h2>
                 </div>
                 <div className ="grid grid-rows-3 gap-3 " > 
                 {/* <img className="h-[48px] w-[48px] ml-auto mt-auto object-[top-right] " alt="checkheart" src={checkheart} /> */}
                <h1 className="  text-3xl font-medium text-right">Lorem ipsum </h1>
                <h2 className="  text-1xl font-medium text-right">
                 Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla porttitor duis hendrerit id. Lorem ipsum dolor sit amet 
                </h2>
                </div>
             </div>  
            <div>  
                  <h1 className=" text-base font-medium text-center Atvik-Regular">Why Us</h1>
            <div className=" text-5xl   text-center Atvik-Regular " >Lorem ipsum dolor sit amet, consectetur</div>
            {/* <img className="h-[50vh] ml-auto mt-auto object-[center_bottom] " alt="group" src={group} /> */}
             </div>
            <div> <div className ="grid grid-rows-3 gap-3 pb-[80px] " > 
            {/* <img className="h-[48px] w-[48px] ml-auto mt-auto object-[top-left] " alt="infinity" src={smile} /> */}
         
                <h1 className="  text-3xl font-medium text-right">Lorem ipsum </h1>
                <h2 className="  text-1xl font-medium text-right">
                Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla porttitor duis hendrerit id. Lorem ipsum dolor sit amet 
                                </h2>
                 </div>
                 <div className ="grid grid-rows-3 gap-3 " > 
                 {/* <img className="h-[48px] w-[48px] ml-auto mt-auto object-[top-left] " alt="checkheart" src={award} /> */}
                <h1 className="  text-3xl font-medium text-right">Lorem ipsum </h1>
                <h2 className="  text-1xl font-medium text-right">
                 Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla porttitor duis hendrerit id. Lorem ipsum dolor sit amet 
                </h2>
                </div> </div>
         
        </div> 
    );
}

export default WhyUs;