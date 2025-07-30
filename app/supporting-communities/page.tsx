import {
   AlertTriangle,
   ArrowRight,
   Building2,
   Calendar,
   CheckCircle,
   FileText,
   Globe,
   Handshake,
   Heart,
   Mail,
   MapPin,
   Phone,
   Shield,
   Star,
   Store,
   Truck,
   Users,
   Wrench,
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function SupportingCommunitiesPage() {
   return (
      <div className="min-h-screen bg-white">
         {/* Header */}
         <Header />

         {/* Hero Section */}
         <section className="relative bg-gradient-to-br from-green-50 to-orange-50 py-20">
            <div
               className="absolute inset-0 bg-cover bg-center opacity-10"
               style={{
                  backgroundImage:
                     "url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
               }}></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-6">
                     <Heart className="h-12 w-12 text-green-600" />
                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Strengthening Local Families & Businesses
                     </h1>
                  </div>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                     Strong communities depend on trust, local enterprise, and
                     understanding the issues that affect us all. Here you'll
                     find vetted local businesses and updates on legal matters
                     that impact daily life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <a
                        href="#directory"
                        className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105">
                        Local Services Directory
                     </a>
                     <a
                        href="#updates"
                        className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-all">
                        Legal Updates
                     </a>
                  </div>
               </div>
            </div>
         </section>

         {/* Community Importance */}
         <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                     <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Building Stronger Communities Together
                     </h2>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-8 mb-8">
                     <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        When we support local businesses and stay informed about
                        legal matters, we create a stronger foundation for our
                        families and communities. Trust, transparency, and local
                        knowledge are the cornerstones of sustainable
                        development.
                     </p>

                     <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-6">
                           <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Handshake className="h-5 w-5 text-green-600" />
                              Trust & Reliability
                           </h3>
                           <p className="text-gray-600">
                              Vetted local businesses you can count on for
                              quality service and fair pricing.
                           </p>
                        </div>

                        <div className="bg-white rounded-lg p-6">
                           <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Shield className="h-5 w-5 text-blue-600" />
                              Legal Awareness
                           </h3>
                           <p className="text-gray-600">
                              Stay informed about laws and policies that affect
                              your daily life and business.
                           </p>
                        </div>

                        <div className="bg-white rounded-lg p-6">
                           <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Heart className="h-5 w-5 text-red-600" />
                              Community Growth
                           </h3>
                           <p className="text-gray-600">
                              Supporting local enterprise strengthens our
                              economy and preserves our culture.
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
               <div className="grid lg:grid-cols-2 gap-8">
                  {/* Directory of Trusted Local Services */}
                  <div
                     id="directory"
                     className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                     <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                        <Store className="h-8 w-8 mb-3" />
                        <h3 className="text-xl font-bold mb-2">
                           Directory of Trusted Local Services
                        </h3>
                        <p className="text-green-100">
                           A growing list of businesses vetted by our
                           organization
                        </p>
                     </div>

                     <div className="p-6 flex-1 flex flex-col">
                        <div className="space-y-6 mb-6 flex-1">
                           {/* Construction & Contractors */}
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                 <Building2 className="h-5 w-5 text-blue-600" />
                                 Construction & Contractors
                              </h4>
                              <div className="space-y-3">
                                 <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-start justify-between">
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             Barbuda Construction Co.
                                          </h5>
                                          <p className="text-sm text-gray-600">
                                             General contracting, repairs,
                                             renovations
                                          </p>
                                          <div className="flex items-center gap-2 mt-2">
                                             <MapPin className="h-3 w-3 text-gray-500" />
                                             <span className="text-xs text-gray-500">
                                                Codrington, Barbuda
                                             </span>
                                          </div>
                                       </div>
                                       <div className="flex items-center gap-1">
                                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                          <span className="text-sm font-medium">
                                             4.8
                                          </span>
                                       </div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-3">
                                       <Phone className="h-3 w-3 text-gray-500" />
                                       <span className="text-sm text-gray-600">
                                          (268) 460-1234
                                       </span>
                                    </div>
                                 </div>

                                 <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-start justify-between">
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             Island Roofing Solutions
                                          </h5>
                                          <p className="text-sm text-gray-600">
                                             Roofing, gutters, storm protection
                                          </p>
                                          <div className="flex items-center gap-2 mt-2">
                                             <MapPin className="h-3 w-3 text-gray-500" />
                                             <span className="text-xs text-gray-500">
                                                St. John's, Antigua
                                             </span>
                                          </div>
                                       </div>
                                       <div className="flex items-center gap-1">
                                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                          <span className="text-sm font-medium">
                                             4.6
                                          </span>
                                       </div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-3">
                                       <Phone className="h-3 w-3 text-gray-500" />
                                       <span className="text-sm text-gray-600">
                                          (268) 462-5678
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Suppliers & Materials */}
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                 <Truck className="h-5 w-5 text-orange-600" />
                                 Suppliers & Materials
                              </h4>
                              <div className="space-y-3">
                                 <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-start justify-between">
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             Caribbean Building Supplies
                                          </h5>
                                          <p className="text-sm text-gray-600">
                                             Lumber, cement, hardware, tools
                                          </p>
                                          <div className="flex items-center gap-2 mt-2">
                                             <MapPin className="h-3 w-3 text-gray-500" />
                                             <span className="text-xs text-gray-500">
                                                St. John's, Antigua
                                             </span>
                                          </div>
                                       </div>
                                       <div className="flex items-center gap-1">
                                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                          <span className="text-sm font-medium">
                                             4.7
                                          </span>
                                       </div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-3">
                                       <Phone className="h-3 w-3 text-gray-500" />
                                       <span className="text-sm text-gray-600">
                                          (268) 462-8901
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Professional Services */}
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                 <Wrench className="h-5 w-5 text-purple-600" />
                                 Professional Services
                              </h4>
                              <div className="space-y-3">
                                 <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-start justify-between">
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             Barbuda Legal Services
                                          </h5>
                                          <p className="text-sm text-gray-600">
                                             Legal consultation, document
                                             preparation
                                          </p>
                                          <div className="flex items-center gap-2 mt-2">
                                             <MapPin className="h-3 w-3 text-gray-500" />
                                             <span className="text-xs text-gray-500">
                                                Codrington, Barbuda
                                             </span>
                                          </div>
                                       </div>
                                       <div className="flex items-center gap-1">
                                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                          <span className="text-sm font-medium">
                                             4.9
                                          </span>
                                       </div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-3">
                                       <Phone className="h-3 w-3 text-gray-500" />
                                       <span className="text-sm text-gray-600">
                                          (268) 460-2345
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="bg-green-50 rounded-lg p-4">
                              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                 <CheckCircle className="h-4 w-4 text-green-600" />
                                 Vetting Process
                              </h5>
                              <div className="text-sm text-gray-600 space-y-1">
                                 <p>
                                    • Verified business registration and
                                    licenses
                                 </p>
                                 <p>• Community feedback and references</p>
                                 <p>• Quality of work and customer service</p>
                                 <p>• Fair pricing and transparency</p>
                              </div>
                           </div>
                        </div>

                        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                           Add Your Business <ArrowRight className="h-4 w-4" />
                        </button>
                     </div>
                  </div>

                  {/* Legal and Policy Updates */}
                  <div
                     id="updates"
                     className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                     <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                        <FileText className="h-8 w-8 mb-3" />
                        <h3 className="text-xl font-bold mb-2">
                           Legal and Policy Updates
                        </h3>
                        <p className="text-blue-100">
                           Simple explanations of current legal matters that
                           affect residents
                        </p>
                     </div>

                     <div className="p-6 flex-1 flex flex-col">
                        <div className="space-y-6 mb-6 flex-1">
                           {/* Recent Updates */}
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                 <Calendar className="h-5 w-5 text-blue-600" />
                                 Recent Updates
                              </h4>
                              <div className="space-y-4">
                                 <div className="border-l-4 border-blue-500 pl-4">
                                    <div className="flex items-start justify-between">
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             New Building Code Regulations
                                          </h5>
                                          <p className="text-sm text-gray-600 mt-1">
                                             Updated hurricane-resistant
                                             building standards effective
                                             January 2024. All new construction
                                             must meet enhanced safety
                                             requirements.
                                          </p>
                                          <div className="flex items-center gap-2 mt-2">
                                             <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                                Construction
                                             </span>
                                             <span className="text-xs text-gray-500">
                                                Updated: Dec 15, 2023
                                             </span>
                                          </div>
                                       </div>
                                       <AlertTriangle className="h-4 w-4 text-orange-500 mt-1" />
                                    </div>
                                 </div>

                                 <div className="border-l-4 border-green-500 pl-4">
                                    <div className="flex items-start justify-between">
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             Small Business Tax Relief
                                          </h5>
                                          <p className="text-sm text-gray-600 mt-1">
                                             New tax incentives for local
                                             businesses with annual revenue
                                             under EC$500,000. Includes reduced
                                             rates and simplified filing.
                                          </p>
                                          <div className="flex items-center gap-2 mt-2">
                                             <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                                Business
                                             </span>
                                             <span className="text-xs text-gray-500">
                                                Updated: Dec 10, 2023
                                             </span>
                                          </div>
                                       </div>
                                       <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                                    </div>
                                 </div>

                                 <div className="border-l-4 border-purple-500 pl-4">
                                    <div className="flex items-start justify-between">
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             Land Use Planning Changes
                                          </h5>
                                          <p className="text-sm text-gray-600 mt-1">
                                             Proposed amendments to zoning
                                             regulations in Barbuda. Public
                                             consultation period open until
                                             February 2024.
                                          </p>
                                          <div className="flex items-center gap-2 mt-2">
                                             <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                                                Land Use
                                             </span>
                                             <span className="text-xs text-gray-500">
                                                Updated: Dec 5, 2023
                                             </span>
                                          </div>
                                       </div>
                                       <AlertTriangle className="h-4 w-4 text-purple-500 mt-1" />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Resources */}
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                 <Globe className="h-5 w-5 text-green-600" />
                                 Where to Find More Details
                              </h4>
                              <div className="space-y-3 text-sm text-gray-600">
                                 <div className="flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-blue-600" />
                                    <span>
                                       <strong>Government Gazette:</strong>{" "}
                                       Official legal notices and regulations
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <Building2 className="h-4 w-4 text-orange-600" />
                                    <span>
                                       <strong>Planning Department:</strong>{" "}
                                       Building permits and zoning information
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <Shield className="h-4 w-4 text-green-600" />
                                    <span>
                                       <strong>Barbuda Council:</strong> Local
                                       governance and community matters
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-purple-600" />
                                    <span>
                                       <strong>ABCLU Newsletter:</strong>{" "}
                                       Monthly updates on legal matters
                                    </span>
                                 </div>
                              </div>
                           </div>

                           <div className="bg-blue-50 rounded-lg p-4">
                              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                 <Phone className="h-4 w-4 text-blue-600" />
                                 Need Legal Support?
                              </h5>
                              <div className="text-sm text-gray-600 space-y-1">
                                 <p>
                                    <strong>Free Consultation:</strong>{" "}
                                    Available for community members
                                 </p>
                                 <p>
                                    <strong>Document Review:</strong> Help
                                    understanding legal documents
                                 </p>
                                 <p>
                                    <strong>Representation:</strong> For matters
                                    affecting community rights
                                 </p>
                                 <p>
                                    <strong>Contact:</strong> (268) 460-0000 or
                                    info@abclu.org
                                 </p>
                              </div>
                           </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                           Subscribe to Updates{" "}
                           <ArrowRight className="h-4 w-4" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Community Impact */}
         <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                     The Impact of Supporting Local
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                     <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Users className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                           Job Creation
                        </h3>
                        <p className="text-gray-600">
                           Every dollar spent locally creates more jobs and
                           opportunities for our community members.
                        </p>
                     </div>

                     <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Heart className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                           Community Bonds
                        </h3>
                        <p className="text-gray-600">
                           Supporting local businesses strengthens the social
                           fabric and builds lasting relationships.
                        </p>
                     </div>

                     <div className="text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Shield className="h-8 w-8 text-orange-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                           Economic Resilience
                        </h3>
                        <p className="text-gray-600">
                           A strong local economy helps our community weather
                           challenges and thrive together.
                        </p>
                     </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-8">
                     <p className="text-lg text-gray-700 leading-relaxed">
                        "When we choose to support local businesses and stay
                        informed about legal matters, we're not just making
                        individual decisions—we're building a stronger, more
                        resilient community for everyone."
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Call to Action */}
         <section className="py-16 bg-green-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h2 className="text-3xl font-bold text-white mb-4">
                  Want to Support Local Communities?
               </h2>
               <p className="text-green-100 text-lg mb-8">
                  Join us in strengthening our communities. List your business,
                  stay informed, or volunteer your time.
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
                     Get Involved
                  </Link>
               </div>
            </div>
         </section>

         {/* Footer */}
         <Footer />
      </div>
   );
}
