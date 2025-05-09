import React from "react";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const marketplaceLinks1 = [
  { name: "VR Courses", path: "/marketplace/vr-courses" },
  { name: "XR Courses", path: "/marketplace/xr-courses" },
  { name: "Immersive Simulations", path: "/marketplace/immersive-simulations" },
  { name: "Gamified Learning Modules", path: "/marketplace/gamified-modules" },
  { name: "Virtual Tours", path: "/marketplace/virtual-tours" },
  { name: "Interactive Story Experiences", path: "/marketplace/interactive-story-experiences" },
  { name: "Digital Heritage Projects", path: "/marketplace/digital-heritage" },
];

const marketplaceLinks2 = [
  { name: "XR Headsets & Accessories", path: "/marketplace/xr-headsets" },
  { name: "Creator Toolkits", path: "/marketplace/creator-toolkits" },
  { name: "Game Assets", path: "/marketplace/game-assets" },
  { name: "3D Models", path: "/marketplace/3d-models" },
  { name: "Digital Sound Packs", path: "/marketplace/sound-packs" },
  { name: "Animation Packs", path: "/marketplace/animation-packs" },
  { name: "AR Filters & Lenses", path: "/marketplace/ar-filters" },
];

const marketplaceLinks3 = [
  { name: "User Interface Kits For XR", path: "/marketplace/ui-kits" },
  { name: "Unity/Unreal Asset Packs", path: "/marketplace/unity-unreal-assets" },
  { name: "Scene Template", path: "/marketplace/scene-templates" },
  { name: "Community Challenges & Collaboration Tools", path: "/marketplace/community-tools" },
  { name: "Monetization Tools", path: "/marketplace/monetization" },
  { name: "Portfolio Hosting", path: "/marketplace/portfolio-hosting" },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "FAQs", path: "/faqs" },
  { name: "Courses", path: "/courses" },
  { name: "Blog", path: "/blog" },
  { name: "Jobs", path: "/jobs" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
];

const socialIcons = [
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaLinkedinIn />, link: "#" },
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaXTwitter />, link: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-semibold">Contact</h3>
          <p className="flex items-center text-gray-300 gap-2">
            <MdPhone className="text-lg" /> +2347000330333
          </p>
          <p className="flex items-center text-gray-300 gap-2">
            <MdEmail className="text-lg" /> Help@weimmersive.com
          </p>
          <div className="mt-4">
            <p className="text-gray-400 mb-2">Follow us on:</p>
            <div className="flex space-x-4 text-white text-lg">
              {socialIcons.map(({ icon, link }, index) => (
                <a key={index} href={link} className="hover:text-purple-500" aria-label={`social-${index}`}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {quickLinks.map(({ name, path }, i) => (
              <li key={i}>
                <a href={path} className="hover:text-purple-500">{name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Marketplace Section */}
        <div className="col-span-3">
          <h3 className="text-white text-xl font-semibold mb-2 text-center">Marketplace</h3>
          <div className="border-b border-dotted border-gray-500 mb-4 w-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-300">
            <ul className="space-y-2">
              {marketplaceLinks1.map(({ name, path }, i) => (
                <li key={i}>
                  <a href={path} className="hover:text-purple-500">{name}</a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {marketplaceLinks2.map(({ name, path }, i) => (
                <li key={i}>
                  <a href={path} className="hover:text-purple-500">{name}</a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {marketplaceLinks3.map(({ name, path }, i) => (
                <li key={i}>
                  <a href={path} className="hover:text-purple-500">{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
