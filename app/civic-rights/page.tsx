import {
   ArrowRight,
   BookA,
   Calendar,
   Car,
   CheckCircle,
   FileText,
   Globe,
   Home,
   Mail,
   Phone,
   Shield,
   UserCheck,
   Users,
   Vote,
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function CivicRightsPage() {
   return (
      <div className="min-h-screen bg-white">
         {/* Header */}
         <Header />

         {/* Hero Section */}
         <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20">
            <div
               className="absolute inset-0 bg-cover bg-center opacity-10"
               style={{
                  backgroundImage:
                     "url('https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
               }}></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-6">
                     <Vote className="h-12 w-12 text-blue-600" />
                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Your Civic Rights & How to Access Services
                     </h1>
                  </div>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                     Knowing how to register to vote, cast your ballot, and
                     obtain essential documents ensures every resident can fully
                     exercise their civic rights and access public services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <a
                        href="#voting"
                        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
                        Register & Vote
                     </a>
                     <a
                        href="#documents"
                        className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all">
                        Get Documents
                     </a>
                  </div>
               </div>
            </div>
         </section>

         {/* Importance of Civic Participation */}
         <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                     <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        The Importance of Participating in Local and National
                        Elections
                     </h2>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-8 mb-8">
                     <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Your vote is your voice in shaping the future of Antigua
                        and Barbuda. Participating in elections ensures that
                        your community's needs and values are represented at all
                        levels of government.
                     </p>

                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-6">
                           <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-green-600" />
                              Local Impact
                           </h3>
                           <p className="text-gray-600">
                              Local elections determine who represents your
                              community in the Barbuda Council and other local
                              governing bodies.
                           </p>
                        </div>

                        <div className="bg-white rounded-lg p-6">
                           <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Shield className="h-5 w-5 text-blue-600" />
                              National Voice
                           </h3>
                           <p className="text-gray-600">
                              National elections shape policies that affect
                              education, healthcare, infrastructure, and
                              economic development.
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
                  {/* Registering & Voting */}
                  <div
                     id="voting"
                     className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                     <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                        <Vote className="h-8 w-8 mb-3" />
                        <h3 className="text-xl font-bold mb-2">
                           Registering & Voting
                        </h3>
                        <p className="text-blue-100">
                           Clear steps for local and overseas residents to
                           participate in elections
                        </p>
                     </div>

                     <div className="p-6 flex-1 flex flex-col">
                        <div className="space-y-6 mb-6 flex-1">
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                 <UserCheck className="h-5 w-5 text-green-600" />
                                 How to Register for the First Time
                              </h4>
                              <div className="space-y-3 text-sm text-gray-600">
                                 <div className="flex items-start gap-2">
                                    <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                                       1
                                    </span>
                                    <span>
                                       Visit the Electoral Commission office in
                                       St. John's or your local registration
                                       center
                                    </span>
                                 </div>
                                 <div className="flex items-start gap-2">
                                    <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                                       2
                                    </span>
                                    <span>
                                       Bring valid identification (passport,
                                       birth certificate, or driver's license)
                                    </span>
                                 </div>
                                 <div className="flex items-start gap-2">
                                    <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                                       3
                                    </span>
                                    <span>
                                       Complete the voter registration form with
                                       your personal details
                                    </span>
                                 </div>
                                 <div className="flex items-start gap-2">
                                    <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                                       4
                                    </span>
                                    <span>
                                       Receive your voter ID card within 2-3
                                       weeks
                                    </span>
                                 </div>
                              </div>
                           </div>

                           <div>
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                 <Calendar className="h-5 w-5 text-orange-600" />
                                 Voting Procedures
                              </h4>
                              <div className="space-y-3 text-sm text-gray-600">
                                 <div className="flex items-start gap-2">
                                    <span className="bg-orange-100 text-orange-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                                       1
                                    </span>
                                    <span>
                                       Check your polling station location on
                                       your voter ID card
                                    </span>
                                 </div>
                                 <div className="flex items-start gap-2">
                                    <span className="bg-orange-100 text-orange-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                                       2
                                    </span>
                                    <span>
                                       Bring your voter ID card and a valid
                                       photo ID
                                    </span>
                                 </div>
                                 <div className="flex items-start gap-2">
                                    <span className="bg-orange-100 text-orange-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                                       3
                                    </span>
                                    <span>
                                       Mark your ballot in private and deposit
                                       it in the ballot box
                                    </span>
                                 </div>
                              </div>
                           </div>

                           <div className="bg-blue-50 rounded-lg p-4">
                              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                 <Phone className="h-4 w-4 text-blue-600" />
                                 Key Contacts
                              </h5>
                              <div className="text-sm text-gray-600 space-y-1">
                                 <p>
                                    <strong>Electoral Commission:</strong> (268)
                                    462-6000
                                 </p>
                                 <p>
                                    <strong>Barbuda Council:</strong> (268)
                                    460-0000
                                 </p>
                                 <p>
                                    <strong>Overseas Voting:</strong> Contact
                                    your nearest embassy
                                 </p>
                              </div>
                           </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                           Download Voter Guide{" "}
                           <ArrowRight className="h-4 w-4" />
                        </button>
                     </div>
                  </div>

                  {/* Obtaining Your Documents */}
                  <div
                     id="documents"
                     className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                     <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                        <FileText className="h-8 w-8 mb-3" />
                        <h3 className="text-xl font-bold mb-2">
                           Obtaining Your Documents
                        </h3>
                        <p className="text-purple-100">
                           How to apply for or replace birth certificates,
                           driver's licenses, and passports
                        </p>
                     </div>

                     <div className="p-6 flex-1 flex flex-col">
                        <div className="space-y-6 mb-6 flex-1">
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                 <FileText className="h-5 w-5 text-red-600" />
                                 Birth Certificates
                              </h4>
                              <div className="space-y-2 text-sm text-gray-600">
                                 <p>
                                    <strong>Where to apply:</strong> Civil
                                    Registry Office, St. John's
                                 </p>
                                 <p>
                                    <strong>Required documents:</strong> Valid
                                    ID, parent's information
                                 </p>
                                 <p>
                                    <strong>Processing time:</strong> 5-10
                                    business days
                                 </p>
                                 <p>
                                    <strong>Cost:</strong> EC$25 for first copy
                                 </p>
                              </div>
                           </div>

                           <div>
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                 <BookA className="h-5 w-5 text-blue-600" />
                                 Passports
                              </h4>
                              <div className="space-y-2 text-sm text-gray-600">
                                 <p>
                                    <strong>Where to apply:</strong> Passport
                                    Office, St. John's
                                 </p>
                                 <p>
                                    <strong>Required documents:</strong> Birth
                                    certificate, ID photos, application form
                                 </p>
                                 <p>
                                    <strong>Processing time:</strong> 2-4 weeks
                                 </p>
                                 <p>
                                    <strong>Cost:</strong> EC$150 for adults
                                 </p>
                              </div>
                           </div>

                           <div>
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                 <Car className="h-5 w-5 text-green-600" />
                                 Driver's Licenses
                              </h4>
                              <div className="space-y-2 text-sm text-gray-600">
                                 <p>
                                    <strong>Where to apply:</strong> Traffic
                                    Department, St. John's
                                 </p>
                                 <p>
                                    <strong>Required documents:</strong> Birth
                                    certificate, medical certificate, test
                                    results
                                 </p>
                                 <p>
                                    <strong>Processing time:</strong> 1-2 weeks
                                 </p>
                                 <p>
                                    <strong>Cost:</strong> EC$50 for new license
                                 </p>
                              </div>
                           </div>

                           <div className="bg-purple-50 rounded-lg p-4">
                              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                 <Globe className="h-4 w-4 text-purple-600" />
                                 Online Resources
                              </h5>
                              <div className="text-sm text-gray-600 space-y-1">
                                 <p>
                                    <strong>Government Portal:</strong>{" "}
                                    <a
                                       href="#"
                                       className="text-purple-600 hover:underline">
                                       www.gov.ag
                                    </a>
                                 </p>
                                 <p>
                                    <strong>Forms Download:</strong>{" "}
                                    <a
                                       href="#"
                                       className="text-purple-600 hover:underline">
                                       www.forms.gov.ag
                                    </a>
                                 </p>
                                 <p>
                                    <strong>Appointment Booking:</strong>{" "}
                                    Available online for most services
                                 </p>
                              </div>
                           </div>
                        </div>

                        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                           Download Application Forms{" "}
                           <ArrowRight className="h-4 w-4" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Overseas Residents Section */}
         <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                     <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        For Overseas Residents
                     </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="bg-green-50 rounded-xl p-6">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                           <Mail className="h-5 w-5 text-green-600" />
                           Overseas Voting
                        </h3>
                        <div className="space-y-3 text-sm text-gray-600">
                           <p>
                              <strong>Registration:</strong> Contact your
                              nearest Antigua and Barbuda embassy or consulate
                           </p>
                           <p>
                              <strong>Voting:</strong> Absentee ballots
                              available for registered overseas voters
                           </p>
                           <p>
                              <strong>Deadlines:</strong> Register at least 30
                              days before election
                           </p>
                           <p>
                              <strong>Documentation:</strong> Valid passport and
                              proof of citizenship required
                           </p>
                        </div>
                     </div>

                     <div className="bg-blue-50 rounded-xl p-6">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                           <FileText className="h-5 w-5 text-blue-600" />
                           Document Services Abroad
                        </h3>
                        <div className="space-y-3 text-sm text-gray-600">
                           <p>
                              <strong>Embassy Services:</strong> Passport
                              renewal and document certification
                           </p>
                           <p>
                              <strong>Notarization:</strong> Embassy staff can
                              notarize documents
                           </p>
                           <p>
                              <strong>Fees:</strong> Additional processing fees
                              may apply
                           </p>
                           <p>
                              <strong>Processing Time:</strong> Allow extra time
                              for overseas processing
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Why Civic Participation Matters */}
         <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                     Why Civic Participation Matters
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                     <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Users className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                           Community Voice
                        </h3>
                        <p className="text-gray-600">
                           Your vote helps shape policies that directly impact
                           your community and family.
                        </p>
                     </div>

                     <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Shield className="h-8 w-8 text-purple-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                           Democratic Rights
                        </h3>
                        <p className="text-gray-600">
                           Voting is a fundamental right and responsibility of
                           citizenship.
                        </p>
                     </div>

                     <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Home className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                           Future Generations
                        </h3>
                        <p className="text-gray-600">
                           Your participation today helps secure a better future
                           for your children.
                        </p>
                     </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-8">
                     <p className="text-lg text-gray-700 leading-relaxed">
                        "Democracy is not a spectator sport. Every vote counts,
                        and every voice matters. By participating in elections
                        and staying informed about civic processes, we
                        strengthen our democracy and ensure our community's
                        needs are heard."
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Call to Action */}
         <section className="py-16 bg-blue-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h2 className="text-3xl font-bold text-white mb-4">
                  Need Help with Civic Services?
               </h2>
               <p className="text-blue-100 text-lg mb-8">
                  Our team can help you navigate the registration process,
                  understand voting procedures, or assist with document
                  applications.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                     href="/contact"
                     className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                     Contact Our Team
                  </Link>
                  <Link
                     href="/get-help"
                     className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
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
