import {
   AlertTriangle,
   ArrowRight,
   BookOpen,
   Camera,
   CheckCircle,
   Download,
   FileText,
   Home,
   MapPin,
   Shield,
   Users,
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function LandPropertyPage() {
   return (
      <div className="min-h-screen bg-white">
         {/* Header */}
         <Header />

         {/* Hero Section */}
         <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 fade-in">
            <div
               className="absolute inset-0 bg-cover bg-center opacity-10"
               style={{
                  backgroundImage:
                     "url('https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
               }}></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-6">
                     <Home className="h-12 w-12 text-green-600" />
                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Caring for Our Land & Property
                     </h1>
                  </div>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                     This section offers guidance for Barbudans and Antiguans on
                     protecting land rights, preserving family land records, and
                     accessing legal templates to help manage property concerns.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <a
                        href="#guides"
                        className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 scale-on-hover">
                        View Protection Guides
                     </a>
                     <a
                        href="#templates"
                        className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-all scale-on-hover">
                        Download Templates
                     </a>
                  </div>
               </div>
            </div>
         </section>

         {/* Barbuda Council Governance */}
         <section className="py-16 bg-white slide-in-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                     <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Land Governance Under the Barbuda Council
                     </h2>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-8 mb-8 card-hover">
                     <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        The Barbuda Council serves as the primary governing body
                        for land matters on Barbuda, with unique authority to
                        manage and protect communal land rights that have been
                        held by Barbudan families for generations.
                     </p>

                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-6 card-hover">
                           <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-green-600" />
                              Council Authority
                           </h3>
                           <p className="text-gray-600">
                              The Council has exclusive jurisdiction over land
                              allocation, leases, and dispute resolution on
                              Barbuda.
                           </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 card-hover">
                           <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Users className="h-5 w-5 text-blue-600" />
                              Community Rights
                           </h3>
                           <p className="text-gray-600">
                              All Barbudans have inherent rights to land use
                              based on family heritage and community membership.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Main Sections */}
         <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid lg:grid-cols-3 gap-8">
                  {/* Guides for Barbudans */}
                  <div
                     id="guides"
                     className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col card-hover stagger-item">
                     <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                        <BookOpen className="h-8 w-8 mb-3" />
                        <h3 className="text-xl font-bold mb-2">
                           Guides for Barbudans: Protecting Land Rights
                        </h3>
                        <p className="text-green-100">
                           Practical toolkit for handling disputes and
                           safeguarding property
                        </p>
                     </div>

                     <div className="p-6 flex-1 flex flex-col">
                        <div className="space-y-4 mb-6 flex-1">
                           <div className="flex items-start gap-3">
                              <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                              <div>
                                 <h4 className="font-semibold text-gray-900">
                                    What to do if land is disputed
                                 </h4>
                                 <p className="text-gray-600 text-sm">
                                    Step-by-step process for addressing
                                    conflicts
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start gap-3">
                              <FileText className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                              <div>
                                 <h4 className="font-semibold text-gray-900">
                                    Understanding leases and council
                                    requirements
                                 </h4>
                                 <p className="text-gray-600 text-sm">
                                    Navigate official processes with confidence
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start gap-3">
                              <Shield className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                              <div>
                                 <h4 className="font-semibold text-gray-900">
                                    Knowing Council processes
                                 </h4>
                                 <p className="text-gray-600 text-sm">
                                    Understanding your rights and procedures
                                 </p>
                              </div>
                           </div>
                        </div>

                        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 scale-on-hover">
                           Access Full Guide <ArrowRight className="h-4 w-4" />
                        </button>
                     </div>
                  </div>

                  {/* Family Land History */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col card-hover stagger-item">
                     <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                        <Camera className="h-8 w-8 mb-3" />
                        <h3 className="text-xl font-bold mb-2">
                           Family Land History & Registry
                        </h3>
                        <p className="text-blue-100">
                           Preserve your family's land stories for future
                           generations
                        </p>
                     </div>

                     <div className="p-6 flex-1 flex flex-col">
                        <div className="space-y-4 mb-6 flex-1">
                           <div className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                              <div>
                                 <h4 className="font-semibold text-gray-900">
                                    Record land use and boundaries
                                 </h4>
                                 <p className="text-gray-600 text-sm">
                                    Document your family's historical land use
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start gap-3">
                              <FileText className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                              <div>
                                 <h4 className="font-semibold text-gray-900">
                                    Preserve important documents
                                 </h4>
                                 <p className="text-gray-600 text-sm">
                                    Safely store deeds, agreements, and records
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start gap-3">
                              <Camera className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                              <div>
                                 <h4 className="font-semibold text-gray-900">
                                    Photo documentation
                                 </h4>
                                 <p className="text-gray-600 text-sm">
                                    Visual records of land and structures
                                 </p>
                              </div>
                           </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 scale-on-hover">
                           Start Recording <ArrowRight className="h-4 w-4" />
                        </button>
                     </div>
                  </div>

                  {/* Legal Templates */}
                  <div
                     id="templates"
                     className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col card-hover stagger-item">
                     <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                        <Download className="h-8 w-8 mb-3" />
                        <h3 className="text-xl font-bold mb-2">
                           Sample Letters & Legal Templates
                        </h3>
                        <p className="text-purple-100">
                           Downloadable notices, affidavits, and communication
                           examples
                        </p>
                     </div>

                     <div className="p-6 flex-1 flex flex-col">
                        <div className="space-y-3 mb-6 flex-1">
                           <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover-lift">
                              <div className="flex items-center gap-3">
                                 <FileText className="h-4 w-4 text-gray-600" />
                                 <span className="text-sm font-medium text-gray-600">
                                    Land Dispute Notice
                                 </span>
                              </div>
                              <Download className="h-4 w-4 text-purple-600 cursor-pointer hover:text-purple-700" />
                           </div>

                           <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover-lift">
                              <div className="flex items-center gap-3">
                                 <FileText className="h-4 w-4 text-gray-600" />
                                 <span className="text-sm font-medium text-gray-600">
                                    Council Communication Template
                                 </span>
                              </div>
                              <Download className="h-4 w-4 text-purple-600 cursor-pointer hover:text-purple-700" />
                           </div>

                           <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover-lift">
                              <div className="flex items-center gap-3">
                                 <FileText className="h-4 w-4 text-gray-600" />
                                 <span className="text-sm font-medium text-gray-600">
                                    Property Affidavit Form
                                 </span>
                              </div>
                              <Download className="h-4 w-4 text-purple-600 cursor-pointer hover:text-purple-700" />
                           </div>

                           <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover-lift">
                              <div className="flex items-center gap-3">
                                 <FileText className="h-4 w-4 text-gray-600" />
                                 <span className="text-sm font-medium text-gray-600">
                                    Lease Agreement Template
                                 </span>
                              </div>
                              <Download className="h-4 w-4 text-purple-600 cursor-pointer hover:text-purple-700" />
                           </div>
                        </div>

                        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 scale-on-hover">
                           View All Templates <ArrowRight className="h-4 w-4" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Why This Matters */}
         <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                     Why Protecting Land Rights Matters
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                     <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Users className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                           For Future Generations
                        </h3>
                        <p className="text-gray-600">
                           Preserving land rights ensures your children and
                           grandchildren have a secure foundation.
                        </p>
                     </div>

                     <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Shield className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                           Cultural Heritage
                        </h3>
                        <p className="text-gray-600">
                           Land connects us to our ancestors and maintains our
                           cultural identity as Barbudans.
                        </p>
                     </div>

                     <div className="text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Home className="h-8 w-8 text-orange-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                           Economic Security
                        </h3>
                        <p className="text-gray-600">
                           Secure land rights provide the foundation for
                           economic stability and growth.
                        </p>
                     </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-8">
                     <p className="text-lg text-gray-700 leading-relaxed">
                        "Land is not just property—it's our heritage, our
                        security, and our future. By understanding and
                        protecting our rights, we ensure that the unique
                        character and community of Barbuda continues for
                        generations to come."
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Call to Action */}
         <section className="py-16 bg-green-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h2 className="text-3xl font-bold text-white mb-4">
                  Need Help with Land or Property Issues?
               </h2>
               <p className="text-green-100 text-lg mb-8">
                  Our team is here to provide guidance and support for all your
                  land-related concerns.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                     href="/contact"
                     className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                     Contact Our Team
                  </Link>
                  <Link
                     href="/get-help"
                     className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                     Schedule Consultation
                  </Link>
               </div>
            </div>
         </section>

         {/* Footer */}
         <Footer />
      </div>
   );
}
