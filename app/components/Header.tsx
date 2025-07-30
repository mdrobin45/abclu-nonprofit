import { Menu, Shield } from "lucide-react";
import Link from "next/link";

export default function Header() {
   return (
      <nav className="bg-white shadow-sm border-b border-blue-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
               <div className="flex items-center space-x-3">
                  <Link
                     href="/"
                     className="flex items-center space-x-3 hover-lift transition-all duration-300">
                     <Shield className="h-8 w-8 text-blue-600" />
                     <span className="text-xl font-bold text-gray-900">
                        ABCLU
                     </span>
                  </Link>
               </div>
               <div className="hidden md:flex items-center space-x-8">
                  <Link
                     href="/"
                     className="text-gray-700 focus:ring-0 hover:text-blue-600 transition-all duration-300 hover-lift link-underline">
                     Home
                  </Link>
                  <Link
                     href="/land-property"
                     className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover-lift link-underline">
                     Land & Property
                  </Link>
                  <Link
                     href="/civic-rights"
                     className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover-lift link-underline">
                     Civic Rights
                  </Link>
                  <Link
                     href="/supporting-communities"
                     className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover-lift link-underline">
                     Supporting Communities
                  </Link>
                  <Link
                     href="/get-involved"
                     className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover-lift link-underline">
                     Get Involved
                  </Link>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 scale-on-hover">
                     Get Help
                  </button>
               </div>
               <Menu className="h-6 w-6 text-gray-700 md:hidden hover-lift transition-all duration-300" />
            </div>
         </div>
      </nav>
   );
}
