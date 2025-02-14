// import React from "react";
// import referImg from "../../assets/refer.png";
// import { Button } from "@mui/material";
// import { MdPersonAddAlt1 } from "react-icons/md";
// import { PiClipboardTextFill } from "react-icons/pi";
// import { GiWallet } from "react-icons/gi";
// import Referral from "../../pages/Referral";

// function Refer() {
//   const [openModal, setOpenModal] = React.useState(false);
//   return (
//     <>
//       <Referral openModal={openModal} setOpenModal={setOpenModal} />
//       <div className='bg-[#EEF5FF] flex flex-col justify-center items-center py-8'>
//         <h1 className='font-[600] text-[24px] md:text-[30px] leading-[32px] md:leading-[43px] text-[#1A202C] mb-6'>
//           How Do I <span className='text-[#1a73e8]'>Refer</span>?
//         </h1>
//         <div className='relative mb-6'>
//           <div className='flex justify-center gap-6'>
//             <div className='flex flex-col justify-center items-center'>
//               <MdPersonAddAlt1 className='w-[60px] h-[60px] text-[#1A73E8] text-center' />
//               <p className='font-[400] text-[14px] md:text-[16px] md:leading-[22px] text-center mt-2'>
//                 Submit referrals easily via our website’s referral section.
//               </p>
//             </div>
//             <div className='flex flex-col justify-center items-center'>
//               <PiClipboardTextFill className='w-[60px] h-[60px] text-[#1A73E8] text-center' />
//               <p className='font-[400] text-[14px] md:text-[16px] md:leading-[22px] text-center mt-2'>
//                 Earn rewards once your referral joins an Accredian program.
//               </p>
//             </div>
//             <div className='flex flex-col justify-center items-center'>
//               <GiWallet className='w-[60px] h-[60px] text-[#1A73E8] text-center' />
//               <p className='font-[400] text-[14px] md:text-[16px] md:leading-[22px] text-center mt-2'>
//                 Both parties receive a bonus 30 days after program enrollment.
//               </p>
//             </div>
//           </div>
//           {/* <img src={referImg} alt='refer' className='w-full mt-6' /> */}
//         </div>
//         <Button
//           variant='contained'
//           className='font-[600] text-[20px] leading-[24px] px-6 py-2 mt-4'
//           type='button'
//           onClick={() => setOpenModal(true)}
//         >
//           Refer Now
//         </Button>
//       </div>
//     </>
//   );
// }

// export default Refer;

import { MdPersonAddAlt1 } from "react-icons/md";
import { PiClipboardTextFill } from "react-icons/pi";
import { GiWallet } from "react-icons/gi";
export default function Refer() {
  // Inline CheckIcon component
  const CheckIcon = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );

  return (
    <section className="bg-[#EEF5FF] py-8 md:py-18">
      <div className="container m-14 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl text-[#1A202C]">
              How the Refer & <span className=" text-[#1A73E8]">Earn Program Works </span>
            </h2>
            <p className="mt-4 text-gray-600">
              Our Refer & Earn program is designed to be simple and straightforward. Here's how it works:
            </p>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex items-start gap-4">
              <MdPersonAddAlt1 className='w-[10px] h-[10px] sm:w-[20px] sm:h-[20px] md:w-[30px] md:h-[30px] text-[#1A73E8] text-center' />
                <div>
                  <h4 className="font-semibold">Share Your Referral Link</h4>
                  <p>Submit referrals easily via our website’s referral section.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
              <PiClipboardTextFill className='w-[10px] h-[10px] sm:w-[20px] sm:h-[20px] md:w-[30px] md:h-[30px] text-[#1A73E8] text-center' />
                <div>
                  <h4 className="font-semibold">Your Friend Signs Up</h4>
                  <p> Earn rewards once your referral joins an Accredian program.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
              <GiWallet className='w-[10px] h-[10px] sm:w-[20px] sm:h-[20px] md:w-[30px] md:h-[30px] text-[#1A73E8] text-center' />
                <div>
                  <h4 className="font-semibold">Earn Rewards</h4>
                  <p>Both parties receive a bonus 30 days after program enrollment.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="src\assets\illus.svg"
              alt="Refer & Earn Illustration"
              className="w-full max-w-[500px] h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
