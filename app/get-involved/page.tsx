import {
   ArrowRight,
   Briefcase,
   CheckCircle,
   Clock,
   Facebook,
   FileText,
   Globe,
   Handshake,
   Heart,
   Instagram,
   Linkedin,
   Mail,
   MapPin,
   Megaphone,
   MessageCircle,
   Phone,
   Shield,
   Star,
   Twitter,
   UserPlus,
   Users,
   Users2,
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function GetInvolvedPage() {
   return (
      <div className="min-h-screen bg-white">
         {/* Header */}
         <Header />

         {/* Hero Section */}
         <section className="relative bg-gradient-to-br from-purple-50 to-pink-50 py-20">
            <div
               className="absolute inset-0 bg-cover bg-center opacity-10"
               style={{
                  backgroundImage:
                     "url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
               }}></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-6">
                     <Handshake className="h-12 w-12 text-purple-600" />
                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Connect, Contribute, Stay Informed
                     </h1>
                  </div>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                     Whether you live on the island or abroad, there are many
                     ways to stay connected and lend your support. We welcome
                     volunteers, ideas, and community partnerships.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <a
                        href="#volunteer"
                        className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105">
                        Volunteer Your Skills
                     </a>
                     <a
                        href="#contact"
                        className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">
                        Contact Us
                     </a>
                  </div>
               </div>
            </div>
         </section>

         {/* Why Get Involved */}
         <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                     <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why Your Involvement Matters
                     </h2>
                  </div>

                  <div className="bg-pink-50 rounded-xl p-8 mb-8">
                     <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Every volunteer, every idea, and every partnership
                        strengthens our ability to protect rights and support
                        our community. Your involvement helps us reach more
                        people and create lasting positive change.
                     </p>

                     <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-6">
                           <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Users className="h-5 w-5 text-purple-600" />
                              Community Impact
                           </h3>
                           <p className="text-gray-600">
                              Your skills and time directly help families and
                              individuals access the support they need.
                           </p>
                        </div>

                        <div className="bg-white rounded-lg p-6">
                           <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Shield className="h-5 w-5 text-blue-600" />
                              Knowledge Sharing
                           </h3>
                           <p className="text-gray-600">
                              Share your expertise and help others understand
                              their rights and available resources.
                           </p>
                        </div>

                        <div className="bg-white rounded-lg p-6">
                           <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Globe className="h-5 w-5 text-green-600" />
                              Network Building
                           </h3>
                           <p className="text-gray-600">
                              Connect with like-minded individuals and build
                              relationships that strengthen our community.
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
                  {/* Volunteer or Share Your Skills */}
                  <div
                     id="volunteer"
                     className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                     <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                        <UserPlus className="h-8 w-8 mb-3" />
                        <h3 className="text-xl font-bold mb-2">
                           Volunteer or Share Your Skills
                        </h3>
                        <p className="text-purple-100">
                           Types of help needed and how to get started
                        </p>
                     </div>

                     <div className="p-6 flex-1 flex flex-col">
                        <div className="space-y-6 mb-6 flex-1">
                           {/* Volunteer Opportunities */}
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                 <Briefcase className="h-5 w-5 text-blue-600" />
                                 Current Opportunities
                              </h4>
                              <div className="space-y-4">
                                 <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-start justify-between">
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             Administrative Support
                                          </h5>
                                          <p className="text-sm text-gray-600 mt-1">
                                             Help with office tasks, data entry,
                                             and organizing community events
                                          </p>
                                          <div className="flex items-center gap-4 mt-2">
                                             <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3 text-gray-500" />
                                                <span className="text-xs text-gray-500">
                                                   Flexible hours
                                                </span>
                                             </div>
                                             <div className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3 text-gray-500" />
                                                <span className="text-xs text-gray-500">
                                                   Remote or local
                                                </span>
                                             </div>
                                          </div>
                                       </div>
                                       <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                          High Need
                                       </span>
                                    </div>
                                 </div>

                                 <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-start justify-between">
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             Community Outreach
                                          </h5>
                                          <p className="text-sm text-gray-600 mt-1">
                                             Connect with residents, share
                                             information, and gather community
                                             feedback
                                          </p>
                                          <div className="flex items-center gap-4 mt-2">
                                             <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3 text-gray-500" />
                                                <span className="text-xs text-gray-500">
                                                   Weekends
                                                </span>
                                             </div>
                                             <div className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3 text-gray-500" />
                                                <span className="text-xs text-gray-500">
                                                   Barbuda & Antigua
                                                </span>
                                             </div>
                                          </div>
                                       </div>
                                       <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                          Local
                                       </span>
                                    </div>
                                 </div>

                                 <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-start justify-between">
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             Legal Research & Writing
                                          </h5>
                                          <p className="text-sm text-gray-600 mt-1">
                                             Help research legal matters,
                                             prepare documents, and create
                                             educational materials
                                          </p>
                                          <div className="flex items-center gap-4 mt-2">
                                             <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3 text-gray-500" />
                                                <span className="text-xs text-gray-500">
                                                   Flexible
                                                </span>
                                             </div>
                                             <div className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3 text-gray-500" />
                                                <span className="text-xs text-gray-500">
                                                   Remote
                                                </span>
                                             </div>
                                          </div>
                                       </div>
                                       <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                                          Expertise
                                       </span>
                                    </div>
                                 </div>

                                 <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-start justify-between">
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             Local Guides & Mentors
                                          </h5>
                                          <p className="text-sm text-gray-600 mt-1">
                                             Share your knowledge of local
                                             processes, history, and community
                                             resources
                                          </p>
                                          <div className="flex items-center gap-4 mt-2">
                                             <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3 text-gray-500" />
                                                <span className="text-xs text-gray-500">
                                                   As needed
                                                </span>
                                             </div>
                                             <div className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3 text-gray-500" />
                                                <span className="text-xs text-gray-500">
                                                   Local
                                                </span>
                                             </div>
                                          </div>
                                       </div>
                                       <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                                          Knowledge
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Skills Needed */}
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                 <Star className="h-5 w-5 text-yellow-600" />
                                 Skills We're Looking For
                              </h4>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                 <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-gray-600">
                                       Administration
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-gray-600">
                                       Communication
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-gray-600">
                                       Legal Knowledge
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-gray-600">
                                       Community Outreach
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-gray-600">
                                       Research
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-gray-600">
                                       Event Planning
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-gray-600">
                                       Translation
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-gray-600">
                                       Technology
                                    </span>
                                 </div>
                              </div>
                           </div>

                           <div className="bg-purple-50 rounded-lg p-4">
                              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                 <Heart className="h-4 w-4 text-purple-600" />
                                 What You'll Gain
                              </h5>
                              <div className="text-sm text-gray-600 space-y-1">
                                 <p>
                                    • Valuable experience in community service
                                    and advocacy
                                 </p>
                                 <p>
                                    • Networking opportunities with
                                    professionals and community leaders
                                 </p>
                                 <p>
                                    • Training and skill development in relevant
                                    areas
                                 </p>
                                 <p>
                                    • Satisfaction of helping your community
                                    thrive
                                 </p>
                              </div>
                           </div>
                        </div>

                        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                           Start Volunteering <ArrowRight className="h-4 w-4" />
                        </button>
                     </div>
                  </div>

                  {/* Contact Us */}
                  <div
                     id="contact"
                     className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                     <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                        <MessageCircle className="h-8 w-8 mb-3" />
                        <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                        <p className="text-blue-100">
                           How to reach out with questions or concerns
                        </p>
                     </div>

                     <div className="p-6 flex-1 flex flex-col">
                        <div className="space-y-6 mb-6 flex-1">
                           {/* Contact Information */}
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                 <Phone className="h-5 w-5 text-blue-600" />
                                 Get in Touch
                              </h4>
                              <div className="space-y-4">
                                 <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-start gap-3">
                                       <Mail className="h-5 w-5 text-blue-600 mt-1" />
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             Email Us
                                          </h5>
                                          <p className="text-sm text-gray-600">
                                             info@abclu.org
                                          </p>
                                          <p className="text-xs text-gray-500 mt-1">
                                             We respond within 24 hours
                                          </p>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-start gap-3">
                                       <Phone className="h-5 w-5 text-green-600 mt-1" />
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             Call Us
                                          </h5>
                                          <p className="text-sm text-gray-600">
                                             (268) 460-0000
                                          </p>
                                          <p className="text-xs text-gray-500 mt-1">
                                             Monday-Friday, 9AM-5PM
                                          </p>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-start gap-3">
                                       <MapPin className="h-5 w-5 text-red-600 mt-1" />
                                       <div>
                                          <h5 className="font-medium text-gray-900">
                                             Visit Our Office
                                          </h5>
                                          <p className="text-sm text-gray-600">
                                             123 Main Street, Codrington
                                          </p>
                                          <p className="text-sm text-gray-600">
                                             Barbuda, Antigua and Barbuda
                                          </p>
                                          <p className="text-xs text-gray-500 mt-1">
                                             By appointment only
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Social Media */}
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                 <Globe className="h-5 w-5 text-purple-600" />
                                 Follow Us
                              </h4>
                              <div className="grid grid-cols-2 gap-3">
                                 <a
                                    href="#"
                                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <Facebook className="h-5 w-5 text-blue-600" />
                                    <span className="text-sm font-medium text-gray-700">
                                       Facebook
                                    </span>
                                 </a>
                                 <a
                                    href="#"
                                    className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors">
                                    <Twitter className="h-5 w-5 text-sky-600" />
                                    <span className="text-sm font-medium text-gray-700">
                                       Twitter
                                    </span>
                                 </a>
                                 <a
                                    href="#"
                                    className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                                    <Instagram className="h-5 w-5 text-pink-600" />
                                    <span className="text-sm font-medium text-gray-700">
                                       Instagram
                                    </span>
                                 </a>
                                 <a
                                    href="#"
                                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <Linkedin className="h-5 w-5 text-blue-700" />
                                    <span className="text-sm font-medium text-gray-700">
                                       LinkedIn
                                    </span>
                                 </a>
                              </div>
                           </div>

                           {/* Contact Form */}
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                 <FileText className="h-5 w-5 text-green-600" />
                                 Send Us a Message
                              </h4>
                              <div className="space-y-3">
                                 <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                 />
                                 <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                 />
                                 <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                                    <option>Select Topic</option>
                                    <option>Volunteer Opportunity</option>
                                    <option>Legal Question</option>
                                    <option>Community Support</option>
                                    <option>General Inquiry</option>
                                 </select>
                                 <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"></textarea>
                              </div>
                           </div>

                           <div className="bg-blue-50 rounded-lg p-4">
                              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                 <Clock className="h-4 w-4 text-blue-600" />
                                 Response Times
                              </h5>
                              <div className="text-sm text-gray-600 space-y-1">
                                 <p>
                                    <strong>Email:</strong> Within 24 hours
                                 </p>
                                 <p>
                                    <strong>Phone:</strong> During business
                                    hours
                                 </p>
                                 <p>
                                    <strong>Social Media:</strong> Within 48
                                    hours
                                 </p>
                                 <p>
                                    <strong>Urgent Matters:</strong> Call our
                                    hotline
                                 </p>
                              </div>
                           </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                           Send Message <ArrowRight className="h-4 w-4" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Ways to Stay Connected */}
         <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                     Ways to Stay Connected
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                     <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Mail className="h-8 w-8 text-purple-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                           Newsletter
                        </h3>
                        <p className="text-gray-600">
                           Get monthly updates on our work, community news, and
                           opportunities to get involved.
                        </p>
                     </div>

                     <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Users2 className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                           Community Events
                        </h3>
                        <p className="text-gray-600">
                           Join our workshops, meetings, and community
                           gatherings to stay informed and connected.
                        </p>
                     </div>

                     <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Megaphone className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                           Advocacy Alerts
                        </h3>
                        <p className="text-gray-600">
                           Receive notifications about important legal matters
                           and opportunities to take action.
                        </p>
                     </div>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-8">
                     <p className="text-lg text-gray-700 leading-relaxed">
                        "Every voice matters, every contribution counts. Whether
                        you have an hour a week or want to take on a larger
                        role, your involvement helps us build a stronger, more
                        resilient community for everyone."
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Call to Action */}
         <section className="py-16 bg-purple-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Make a Difference?
               </h2>
               <p className="text-purple-100 text-lg mb-8">
                  Join our community of volunteers and supporters. Every
                  contribution helps us protect rights and strengthen our
                  community.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                     href="#volunteer"
                     className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                     Start Volunteering
                  </Link>
                  <Link
                     href="#contact"
                     className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                     Get in Touch
                  </Link>
               </div>
            </div>
         </section>

         {/* Footer */}
         <Footer />
      </div>
   );
}
