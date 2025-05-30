import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
              <span className="text-sm">Terms & Privacy</span>
            </span>
            <span className="ml-6 text-gray-400 hover:text-gray-500 cursor-pointer">
              <span className="text-sm">Help Center</span>
            </span>
            <span className="ml-6 text-gray-400 hover:text-gray-500 cursor-pointer">
              <span className="text-sm">Contact Us</span>
            </span>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-sm text-gray-400">
              &copy; {currentYear} TradeBikes Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
