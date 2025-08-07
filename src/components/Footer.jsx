import React from 'react';
function Footer() {
  return (
    <div className='mt-auto'>
    <footer className="w-screen bg-gray-300 text-gray-700 py-10 px-5 shadow-inner border-t mt-90">
      <div className="w-full mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 text-sm">
        
        <div>
          <h4 className="font-semibold text-lg mb-3 text-gray-900 tracking-wide">About Keeper</h4>
          <p className="text-gray-600 text-[14.5px]">
            Keeper is a simple and intuitive note-taking app designed to help you
            organize your thoughts, tasks, and ideas all in one place.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2 flex flex-col text-center text-gray-900 ml-4 tracking-wide">Quick Links</h4>
          <ul className="flex flex-col space-y-1 items-center">
            <li><a href="#" style={{textDecoration: "none"}} className="text-gray-600 hover:text-gray-900 text-[18px] transition-all duration-200 ease-in-out">Home</a></li>
            <li><a href="#" style={{textDecoration: "none"}} className="text-gray-600 hover:text-gray-900 text-[18px] transition-all duration-200 ease-in-out">About</a></li>
            <li><a href="#" style={{textDecoration: "none"}} className="text-gray-600 hover:text-gray-900 text-[18px] transition-all duration-200 ease-in-out">Notes</a></li>
            <li><a href="#" style={{textDecoration: "none"}} className="text-gray-600 hover:text-gray-900 text-[18px] transition-all duration-200 ease-in-out">Contact</a></li>
          </ul>
        </div>

        <div className='grid grid-cols-1'>
          <h4 className="font-semibold text-lg mb-3 text-gray-900 tracking-wide mr-7">Contact & Info</h4>
          <div className='flex flex-col items-start mx-auto mb-3'>
              <p className=" text-gray-600 mb-2">Email: support@keeperapp.dev</p>
              <p className=" text-gray-600 mb-2">Phone: +91 9193040112</p>
               <p className="text-gray-600 mb-2">Address: 2nd Floor, Block C in IIITN</p>
              <p className=" text-gray-600 mb-2">Made with ❤️ using React</p>
        </div>
        </div>
      </div>

      <div className="border-t border-gray-200  pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Keeper App. All rights reserved.
      </div>
    </footer>
    </div>
  );
}

export default Footer; 