import { PrimaryButton, SecondaryButton, TransparentButton } from "../components/buttons-component";
import Image from "next/image";
import { H1, H2 } from "../components/headings.component";
import { Pg1, Pg3 } from "../components/paragraphs.component";
import { Cap1 } from "../components/captions.component";
import Input from "../components/input.component";

export default function Home() {
  return (
    <div>
      <div className="bg-[#091D26] text-[#EDE6DF] h-[100%]">
        <div className="max-w-[1240px] mx-auto flex justify-between">
          <div className="flex flex-col gap-[20px] max-w-[560px] pt-[20px] pb-[110px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[20px]">
                <span className="h-[158px] w-[5px] bg-[#ede6df]" />
                <H1>Elevate <br/> Your Online <br/> Presence</H1>
              </div>
              <Pg3>Specializing in innovative web design, we&apos;re dedicated to helping small businesses stand out online. Our mission is to create captivating brands that drive growth and success in the digital landscape.</Pg3>
            </div>
            <div>
              <PrimaryButton>Book an Appointment</PrimaryButton>
            </div>
            <div className="bg-[#ede6df] rounded-[5px] px-[20px] py-[15px] text-[#091d26] flex flex-col gap-[10px] max-w-[500px]">
              <div>
                <Pg1>Join our Newsletter</Pg1>
                <Pg3>Stay up to date in fast-changing digital landscape</Pg3>
              </div>
              <form className="flex items-center gap-[10px]">
                <Input placeholder="Email" />
                <SecondaryButton>Subscribe</SecondaryButton>
              </form>
            </div>
          </div>
          <div>
            <Image src="/hero.png" width={550} height={589} alt="webdesign" />
          </div>
        </div>
      </div>
      <div className="bg-white text-[#091D26] pt-[100px]">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          <div>
            <Image src="/Image.png" width={565} height={396} alt="placeholder" />
          </div>
          <div className="w-[50%]">
            <div className="w-[160px] bg-[#091D26] h-[3px] mb-[10px]"/>
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <H2>Our Story</H2>
              <Pg3>We envision becoming the trusted ally of local businesses, offering cost-effective digital marketing and website solutions. Through expert website building, tailored digital marketing strategies, and personalized service, we empower businesses to excel online, connecting them with their target audience and fostering sustainable growth.</Pg3>
            </div>
            <SecondaryButton>See More</SecondaryButton>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[1240px] mx-auto py-[100px] flex flex-col gap-[40px] items-center">
          <div>
            <Cap1>What we offer</Cap1>
          </div>
          <div className="grid grid-cols-3 gap-[30px]">
            <div className="bg-[#091d26] text-[#ede6df] rounded-[10px] flex flex-col  gap-[20px] cursor-pointer px-[38px] py-[35px] items-center">
              <Image src="/design.svg" width={115} height={115} alt="design" />
              <div className="items-start gap-[5px] flex flex-col">
                <Pg1>Innovative Design</Pg1>
                <Pg3>Our team of skilled designers is dedicated to crafting innovative, cutting-edge designs that not only captivate but also elevate your brand.</Pg3>
              </div>
            </div>
            <div className="bg-[#091d26] text-[#ede6df] rounded-[10px] flex flex-col  gap-[20px] cursor-pointer px-[38px] py-[35px] items-center">
              <Image src="/seo.svg" width={115} height={115} alt="design" />
              <div className="items-start gap-[5px] flex flex-col">
                <Pg1>Innovative Design</Pg1>
                <Pg3>Our team of skilled designers is dedicated to crafting innovative, cutting-edge designs that not only captivate but also elevate your brand.</Pg3>
              </div>
            </div>
            <div className="bg-[#091d26] text-[#ede6df] rounded-[10px] flex flex-col  gap-[20px] cursor-pointer px-[38px] py-[35px] items-center">
              <Image src="/review.svg" width={115} height={115} alt="design" />
              <div className="items-start gap-[5px] flex flex-col">
                <Pg1>Innovative Design</Pg1>
                <Pg3>Our team of skilled designers is dedicated to crafting innovative, cutting-edge designs that not only captivate but also elevate your brand.</Pg3>
              </div>
            </div>
          </div>
          <div>
            <TransparentButton>More About Services</TransparentButton>
          </div>
        </div>
      </div>
    </div>
  );
}
