import React from "react";
import referHeroImg from "../../assets/referHero.png";
import illus from "../../assets/illus.svg"; // Import the new illustration image
import { Button } from "@mui/material";
import "./Refer.css";
import ReferBenefits from "../benefits/ReferBenefits";
import FAQs from "../../pages/FAQs";
import Support from "../../pages/Support";
import Referral from "../../pages/Referral";

function ReferHero() {
  const [selectedBtn, setSelectedBtn] = React.useState("refer");
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      <Referral openModal={openModal} setOpenModal={setOpenModal} />
      <div className='bg-[#EEF5FF] flex flex-col justify-center items-center py-6 mb-6 max-w-10xl mx-auto'>
        <div className='flex justify-center mb-5 '>
          <div className='flex gap-10 justify-center px-10 bg-[#eef5ff] rounded-full py-1'>
            <button type='button' onClick={() => setSelectedBtn("refer")}>
              {selectedBtn === "refer" ? (
                <span className='bg-[#1a8be8] text-white py-2 px-6 rounded-full cursor-pointer'>
                  Refer
                </span>

              ) : (
                "Refer"
              )}
            </button>
            <button type='button' onClick={() => setSelectedBtn("benefits")}>
              {selectedBtn === "benefits" ? (
                <span className='bg-[#1a8be8] text-white py-2 px-6 rounded-full cursor-pointer'>
                  <span className='bg-[#1a8be8] text-white py-2 px-6 rounded-full cursor-pointer'>
                    Benefits
                  </span>
                </span>
              ) : (
                "Benefits"
              )}
            </button>
            <button type='button' onClick={() => setSelectedBtn("faqs")}>
              {selectedBtn === "faqs" ? (
                <span className='bg-[#1a8be8] text-white py-2 px-6 rounded-full cursor-pointer'>
                  FAQs
                </span>
              ) : (
                "FAQs"
              )}
            </button>
            <button type='button' onClick={() => setSelectedBtn("support")}>
              {selectedBtn === "support" ? (
                <span className='bg-[#1a8be8] text-white py-2 px-6 rounded-full cursor-pointer'>
                  Support
                </span>
              ) : (
                "Support"
              )}
            </button>
          </div>
        </div>
        {selectedBtn === "refer" && (
          <div className='grid grid-cols-5 bg-[#eef5ff] rounded-lg px-5 relative'>
            <div className='col-span-2'>
              <div className='flex flex-col gap-5 justify-center h-full'>
                <h1 className='text-[#1A202C] leading-[30px] text-[30px] font-[500] sm:leading-[40px] sm:text-[40px] sm:font-[600] md:leading-[65px] md:text-[65px] md:font-[700]'>
                  Let’s Learn
                  <br />& Earn
                </h1>
                <h3 className='text-[#1A202C] leading-[30px] text-[20px] font-[300] sm:leading-[40px] sm:text-[24px] sm:font-[400] md:leading-[55px] md:text-[30px] md:font-[400]'>
                  Get a chance to win <br />
                  up-to
                  <span className='text-[#1A73E8] leading-[30px] text-[25px] font-[500] sm:leading-[40px] sm:text-[30px] sm:font-[600] md:leading-[55px] md:text-[40px] md:font-[700]'>
                    <br />Rs. 15,000
                  </span>
                </h3>
                <div>
                  <Button
                    variant='contained'
                    className='font-[400] text-[20px] leading-[24px] px-5 py-1'
                    type='button'
                    onClick={() => setOpenModal(true)}
                  >
                    Refer Now
                  </Button>
                </div>
              </div>
            </div>
            <div className='col-span-3 relative'>
              <img src={illus} alt='refer-hero' className='z-40' />
              {/* <img
                src={illus}
                alt='illustration'
                className='hidden md:block absolute top-8 left-48 h-14 w-14 rotate-180' // Adjust this if you want to position the new image differently
              /> */}
            </div>
          </div>
        )}
        {selectedBtn === "benefits" && <ReferBenefits />}
        {selectedBtn === "faqs" && <FAQs />}
        {selectedBtn === "support" && <Support />}
      </div>
    </>
  );
}

export default ReferHero;
