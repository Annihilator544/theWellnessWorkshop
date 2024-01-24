import dude from "../assets/course_01.svg"
import link from "../assets/link.svg"

function Course() {
  return (
    <div className=" px-[70px] py-[80px] bg-gradient-to-r from-[##F6C0A905] to-[##EB9ABA05] grid grid-cols-2">
        <img className="w-[100%] h-[100%]" alt="dude" src={dude} />
        <div className="flex flex-col justify-center">
            <p className=" text-base font-bold text-left mb-5">C O U R S E  1</p>
            <p className=" text-5xl font-medium text-left mb-3">Lorem ipsum dolor sit amet, consectetur</p>
            <p className=" text-base text-[#626262] font-normal text-left mb-7">September 2023</p>
            <p className=" text-[20px] text-[#626262] font-normal text-left mb-7">Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla porttitor duis hendrerit id. Sed quisque aliquam neque egestas quis sed tempus pellentesque feugiat.</p>
            <div className="flex gap-2 align-middle">
                <p className=" flex text-[20px] pinkcolor font-normal text-left justify-center align-middle">Get in Touch</p>
                <img className="w-[32px] h-[32px]  align-middle " alt="link" src={link} />
            </div>
        </div>
    </div>
  );
}

export default Course;