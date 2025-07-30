import { Mail, MapPin, Phone, Shield } from "lucide-react";

export default function Footer() {
   return (
      <footer className="bg-gray-900 text-white py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
               <div className="col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                     <Shield className="h-8 w-8 text-blue-400" />
                     <span className="text-xl font-bold">ABCLU</span>
                  </div>
                  <p className="text-gray-300 mb-6">
                     Protecting the rights and interests of Antigua and Barbuda
                     communities through advocacy, education, and direct
                     support.
                  </p>
                  <div className="space-y-2">
                     <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-blue-400" />
                        <span className="text-gray-300">+1 (268) 123-4567</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-blue-400" />
                        <span className="text-gray-300">info@abclu.org</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-blue-400" />
                        <span className="text-gray-300">
                           St. John's, Antigua and Barbuda
                        </span>
                     </div>
                  </div>
               </div>

               <div>
                  <h4 className="font-semibold mb-4">Services</h4>
                  <ul className="space-y-2 text-gray-300">
                     <li>
                        <a
                           href="#"
                           className="hover:text-white transition-colors">
                           Land Rights
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="hover:text-white transition-colors">
                           Civil Rights
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="hover:text-white transition-colors">
                           Business Support
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="hover:text-white transition-colors">
                           Legal Aid
                        </a>
                     </li>
                  </ul>
               </div>

               <div>
                  <h4 className="font-semibold mb-4">Resources</h4>
                  <ul className="space-y-2 text-gray-300">
                     <li>
                        <a
                           href="#"
                           className="hover:text-white transition-colors">
                           Know Your Rights
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="hover:text-white transition-colors">
                           Community Updates
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="hover:text-white transition-colors">
                           Legal Forms
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="hover:text-white transition-colors">
                           Contact Us
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
               <p className="text-gray-400">
                  © 2025 Antigua and Barbuda Civil Liberties Union. All rights
                  reserved.
               </p>
            </div>
         </div>
      </footer>
   );
}
