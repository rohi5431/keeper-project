import React from 'react';
// npm install @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
  <div className='mt-10 sm:mt-16 md:mt-20 lg:mt-24'>
  <footer className="w-full bg-[#485460] text-[#eeeeee] py-6 px-2 sm:px-4 md:px-8 lg:px-16 shadow-inner border-t mt-10">
  <div className="w-full mx-auto px-2 sm:px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 text-sm">
        
  <div className="mb-6 sm:mb-0">
          <h4 className="font-semibold text-lg mb-3 text-white tracking-wide cursor-pointer transition-colors duration-200 hover:text-yellow-400">About Keeper</h4>
          <div className="mt-2">
            <p className="text-white text-[14.5px]">
              Keeper is a simple and intuitive note-taking app designed to help you
              organize your thoughts, tasks, and ideas all in one place.
            </p>
          </div>
        </div>

  <div className="mb-6 sm:mb-0">
          <h4 className="font-semibold text-lg mb-2 flex flex-col text-center text-white ml-4 tracking-wide cursor-pointer transition-colors duration-200 hover:text-green-400">Quick Links</h4>
          <ul className="flex flex-col space-y-1 items-center">
            <li><a href="#" tyle={{ textDecoration: 'none' }} className="text-white text-[18px] transition-colors duration-200 cursor-pointer hover:text-yellow-400 !no-underline hover:no-underline">Home</a></li>
            <li><a href="#" tyle={{ textDecoration: 'none' }} className="text-white text-[18px] transition-colors duration-200 cursor-pointer hover:text-yellow-400 !no-underline hover:no-underline">About</a></li>
            <li><a href="#" tyle={{ textDecoration: 'none' }} className="text-white text-[18px] transition-colors duration-200 cursor-pointer hover:text-yellow-400 !no-underline hover:no-underline">Notes</a></li>
            <li><a href="#" tyle={{ textDecoration: 'none' }} className="text-white text-[18px] transition-colors duration-200 cursor-pointer hover:text-yellow-400 !no-underline hover:no-underline">Contact</a></li>
          </ul>
        </div>

  <div className='grid grid-cols-1 mb-6 sm:mb-0'>
          <h4 className="font-semibold text-lg mb-3 text-white tracking-wide mr-7 cursor-pointer transition-colors duration-200 hover:text-green-400">Contact & Info</h4>
      <div className='flex flex-col items-start mx-auto mb-3'>
              <p className="text-white mb-2 cursor-pointer transition-colors duration-200 hover:text-yellow-400">Email: support@keeperapp.dev</p>
              <p className="text-white mb-2 cursor-pointer transition-colors duration-200 hover:text-yellow-400">Phone: +91 9193040112</p>
              <p className="text-white mb-2 cursor-pointer transition-colors duration-200 hover:text-yellow-400">Address: 2nd Floor, Block C in IIITN</p>
              <p className="text-white mb-2 cursor-pointer transition-colors duration-200 hover:text-yellow-400">Made with ❤️ using React</p>
        </div>
        </div>
      </div>

  <div className="flex flex-col items-center mt-6 sm:mt-8">
  <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-2xl mt-2 mb-4">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent transition duration-300 hover:shadow-[0_0_30px_#1877f3] hover:bg-[#1877f3] hover:text-white transform hover:scale-125 !no-underline">
            <i className="fab fa-facebook text-[#1877f3]"></i>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent transition duration-300 hover:shadow-[0_0_30px_#E4405F] hover:bg-[#E4405F] hover:text-white transform hover:scale-125 !no-underline">
            <i className="fab fa-instagram text-[#E4405F]"></i>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent transition duration-300 hover:shadow-[0_0_30px_#25D366] hover:bg-[#25D366] hover:text-white transform hover:scale-125 !no-underline">
            <i className="fab fa-whatsapp text-[#25D366]"></i>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent transition duration-300 hover:shadow-[0_0_30px_#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transform hover:scale-125 !no-underline">
            <i className="fab fa-twitter text-[#1DA1F2]"></i>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent transition duration-300 hover:shadow-[0_0_30px_#FF0050] hover:bg-[#FF0050] hover:text-white transform hover:scale-125 !no-underline">
            <i className="fab fa-tiktok text-[#FF0050]"></i>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent transition duration-300 hover:shadow-[0_0_30px_#FF0000] hover:bg-[#FF0000] hover:text-white transform hover:scale-125 !no-underline">
            <i className="fab fa-youtube text-[#FF0000]"></i>
          </a>
        </div>
  <div className="border-t text-white pt-2 sm:pt-4 text-center text-xs w-full mt-4 sm:mt-6">
          &copy; {new Date().getFullYear()} Keeper App. All rights reserved.
        </div>
      </div>

    </footer>
    </div>
  );
}

export default Footer; 