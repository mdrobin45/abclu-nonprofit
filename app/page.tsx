import {
   ArrowRight,
   Bell,
   Briefcase,
   Handshake,
   Heart,
   HomeIcon,
   Scale,
   Users,
} from "lucide-react";
import BannerSlider from "./components/BannerSlider";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
   return (
      <div className="min-h-screen bg-white">
         {/* Header */}
         <Header />

         {/* Banner Slider */}
         <BannerSlider />

         {/* Mission Statement */}
         <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                     Our Mission
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                     The Antigua and Barbuda Civil Liberties Union is dedicated
                     to protecting and advancing the fundamental rights of all
                     residents of Antigua and Barbuda. We work tirelessly to
                     ensure that every person has access to justice, fair
                     treatment under the law, and the resources needed to
                     protect their land, livelihood, and dignity within our
                     island communities.
                  </p>
               </div>
            </div>
         </section>

         {/* Key Services */}
         <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                     How We Help
                  </h2>
                  <p className="text-lg text-gray-600">
                     Three key areas where we make a difference
                  </p>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  {/* Land Guidance */}
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                     <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                        <HomeIcon className="h-8 w-8 text-green-600" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Land Rights Guidance
                     </h3>
                     <p className="text-gray-600 mb-6">
                        Expert assistance with land disputes, property rights,
                        and navigating complex legal processes to protect your
                        most valuable assets.
                     </p>
                     <button className="text-green-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Learn More <ArrowRight className="h-4 w-4" />
                     </button>
                  </div>

                  {/* Civil Rights */}
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                     <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <Scale className="h-8 w-8 text-blue-600" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Civil Rights Help
                     </h3>
                     <p className="text-gray-600 mb-6">
                        Advocacy and support for individuals facing
                        discrimination, ensuring equal treatment and access to
                        justice for all community members.
                     </p>
                     <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Get Support <ArrowRight className="h-4 w-4" />
                     </button>
                  </div>

                  {/* Local Business Support */}
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                     <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                        <Briefcase className="h-8 w-8 text-orange-600" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Local Business Support
                     </h3>
                     <p className="text-gray-600 mb-6">
                        Resources and guidance to help local entrepreneurs
                        navigate regulations, protect their interests, and
                        contribute to community economic growth.
                     </p>
                     <button className="text-orange-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Explore Resources <ArrowRight className="h-4 w-4" />
                     </button>
                  </div>
               </div>
            </div>
         </section>

         {/* Latest Updates */}
         <section className="py-16 bg-blue-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center text-white mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                     <Bell className="h-6 w-6" />
                     <h2 className="text-3xl font-bold">
                        Latest Updates & Notices
                     </h2>
                  </div>
                  <p className="text-blue-100 text-lg">
                     Stay informed about important developments
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                     <div className="text-blue-100 text-sm mb-2">
                        January 15, 2025
                     </div>
                     <h3 className="text-white font-semibold text-lg mb-3">
                        New Land Rights Workshop Series
                     </h3>
                     <p className="text-blue-100 mb-4">
                        Join us for comprehensive workshops on understanding and
                        protecting your property rights. Sessions begin February
                        1st.
                     </p>
                     <button className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                     </button>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                     <div className="text-blue-100 text-sm mb-2">
                        January 10, 2025
                     </div>
                     <h3 className="text-white font-semibold text-lg mb-3">
                        Community Legal Clinic Schedule
                     </h3>
                     <p className="text-blue-100 mb-4">
                        Free legal consultations available every Tuesday and
                        Thursday. Book your appointment online or call our
                        office.
                     </p>
                     <button className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Book Appointment <ArrowRight className="h-4 w-4" />
                     </button>
                  </div>
               </div>
            </div>
         </section>

         {/* Quick Navigation */}
         <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                     Quick Access
                  </h2>
                  <p className="text-lg text-gray-600">
                     Find what you need fast
                  </p>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <a
                     href="#legal-aid"
                     className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all">
                     <Scale className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                     <div className="font-semibold text-gray-900">
                        Legal Aid
                     </div>
                  </a>

                  <a
                     href="#resources"
                     className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all">
                     <Users className="h-8 w-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                     <div className="font-semibold text-gray-900">
                        Resources
                     </div>
                  </a>

                  <a
                     href="#community"
                     className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all">
                     <Heart className="h-8 w-8 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                     <div className="font-semibold text-gray-900">
                        Community
                     </div>
                  </a>

                  <a
                     href="#contact"
                     className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all">
                     <Handshake className="h-8 w-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                     <div className="font-semibold text-gray-900">Get Help</div>
                  </a>
               </div>
            </div>
         </section>

         {/* Footer */}
         <Footer />
      </div>
   );
}
