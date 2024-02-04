import star from '../assets/star-01.svg';
import TestimonialImg from '../assets/testimonials.svg';
import quotes from '../assets/Quotes.svg';
import VideoImg from '../assets/Demo_Video.svg';
function AboutUsTestimonial(){
    return(
        <div>
        <div className="about-us-testimonial px-[70px] py-[80px] align-middle grid grid-cols-[30%,70%] border-[1px] border-[#D4D4D4]">
            <div className="flex flex-col">
                <div className="flex gap-3 w-1/2">
                    <img className="" alt="star svg" src={star} />
                    <p className="text-5xl font-medium text-left text-[#000]">4.9</p>
                </div>
                <div className='w-1/2'>
                    <img className="w-[100%] h-[100%]" alt="testimonial" src={TestimonialImg} />
                </div>
            </div>
            <div className='flex align-top'>
                <img className="w-[32px] align-top mb-auto" alt="quotes" src={quotes} />
                <p className=' text-[28px] font-medium'>The comprehensive range of workout options caters to every fitness preference, from high-intensity training to yoga and strength conditioning. The cutting-edge equipment and impeccably clean facilities create an inviting environment that motivates and energises.</p>
            </div>
        </div>
        <div className='grid grid-cols-[40%,60%] px-[70px] py-[80px]'>
            <div className='flex flex-col'>
                <p className=' text-4xl font-medium text-left'>Lorem ipsum dolor sit amet, consectetur </p>
                <p className=' text-xl leading-8 font-medium text-left mt-5'>Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla porttitor duis hendrerit id.  </p>
                <div className='flex flex-row gap-7 mt-8'>
                    <div className=' bg-gradient-to-r from-[#C94277] to-[#F4743B] rounded-xl p-[3px]'>
                        <div className=' bg-white hehe px-5 py-2'>   
                            <p className=' text-4xl font-medium text-center'>2,900 </p>
                            <p className=' text-base leading-8 font-medium text-center text-[#626262]'>people joined </p>
                        </div>
                    </div>
                    <div className=' bg-gradient-to-r from-[#C94277] to-[#F4743B] rounded-xl p-[3px]'>
                        <div className=' bg-white hehe px-5 py-2'>   
                            <p className=' text-4xl font-medium text-center'>2,900 </p>
                            <p className=' text-base leading-8 font-medium text-center text-[#626262]'>people joined </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-auto'>
                <img className=" h-[100%]" alt="Video" src={VideoImg} />
            </div>
        </div>
        </div>
    );
}

export default AboutUsTestimonial;