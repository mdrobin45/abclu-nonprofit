import { Menu, Shield } from "lucide-react";

export default function Header() {
   return (
      <nav className="bg-white shadow-sm border-b border-blue-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
               <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <span className="text-xl font-bold text-gray-900">ABCLU</span>
               </div>
               <div className="hidden md:flex items-center space-x-8">
                  <a
                     href="#about"
                     className="text-gray-700 hover:text-blue-600 transition-colors">
                     About
                  </a>
                  <a
                     href="#services"
                     className="text-gray-700 hover:text-blue-600 transition-colors">
                     Services
                  </a>
                  <a
                     href="#resources"
                     className="text-gray-700 hover:text-blue-600 transition-colors">
                     Resources
                  </a>
                  <a
                     href="#contact"
                     className="text-gray-700 hover:text-blue-600 transition-colors">
                     Contact
                  </a>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                     Get Help
                  </button>
               </div>
               <Menu className="h-6 w-6 text-gray-700 md:hidden" />
            </div>
         </div>
      </nav>
   );
}
