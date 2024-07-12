import React from "react";

import CompSupport from "../assets/compsupport.png";
import Secure from "../assets/secure.png";
import UserFriendly from "../assets/userfriendly.png";
import assetmgmt from "../assets/assetmgmt.png"
import ticketmgmt from "../assets/ticketmanagement.png"
import network1 from "../assets/network1.png"
import emailmgmt from "../assets/emailmgmt.png"
import directorymgmt from "../assets/directorymgmt.png"
import customize from "../assets/customize.png"
import deployment from "../assets/deployment.png"

import Feature from "../components/Feature";

const features = [
  {
    id: 1,
    image: assetmgmt,
    title: "Comprehensive Asset Management",
    text: "Discover, track, and manage your IT assets with unparalleled detail.",
    detail: "From IP and MAC addresses to OS and manufacturer info, keep your finger on the pulse of your infrastructure. Assign assets to users and maintain a complete history of each item in your inventory."
  },
  {
    id: 2,
    image: ticketmgmt,
    title: "Intelligent Ticket Management",
    text: "Streamline your support process with our advanced ticketing system.",
    detail: "Prioritize issues, track resolutions, and link tickets to specific assets for a 360-degree view of your IT landscape. Set up automated workflows and escalation rules to ensure timely resolution of all issues."

  },
  {
    id: 3,
    image: Secure,
    title: "Enterprise-Grade Authentication",
    text: "Secure your system with role-based access control and JWT authentication.",
    detail: "Seamlessly integrate with LDAP for enterprise environments, ensuring rock-solid security and user management. Support for multi-factor authentication and single sign-on (SSO) solutions."

  },
  {
    id: 4,
    image: network1,
    title: "Advanced Network Scanner",
    text: "Unleash the power of our automated subnet scanning and asset discovery.",
    detail: (
      <div className="text-xs">
        <p>Our state-of-the-art network scanner is built to provide comprehensive insights into your network infrastructure:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Utilizes nmap for port scanning and OS fingerprinting</li>
          <li>Leverages WMI for detailed Windows system information</li>
          <li>Implements CIM (Common Information Model) for cross-platform compatibility</li>
          <li>Supports customizable scanning intervals and on-demand manual scans</li>
          <li>Detects new devices and changes in existing assets automatically</li>
          <li>Provides detailed reports on network topology and asset inventory</li>
        </ul>
        <p className="mt-2">The scanner is designed with modularity in mind, allowing for easy extension and customization to meet specific organizational needs.</p>
      </div>
    )

  },
  {
    id: 5,
    image: emailmgmt,
    title: "Comprehensive Email Integration",
    text: "Supercharge your communications with support for SMTP and Office 365.",
    detail: "Customize email templates, set notification preferences, and automate responses for efficient team coordination. Integrate with your existing email workflow to ensure seamless communication with end-users and team members."
  },
  {
    id: 6,
    image: directorymgmt,
    title: "Flexible Directory Integration",
    text: "Choose between local Active Directory (AD) or Azure AD support.",
    detail: "Synchronize users and groups effortlessly, with configurable sync intervals to keep your ITSM system always up-to-date. Supports both on-premises and cloud-based directory services for maximum flexibility."

  },
  {
    id: 7,
    image: customize,
    title: "Tailor-Made Customization",
    text: "Adapt the system to your needs with highly customizable settings.",
    detail: "Fine-tune scanning configurations, email settings, LDAP parameters, and other preferences for a perfect fit. Create custom fields, workflows, and reports to match your organization's unique processes."

  },
  {
    id: 8,
    image: deployment,
    title: "Flexible Deployment Options",
    text: "Deploy your ITSM solution your way: Docker, VirtualBox, or BYOH.",
    detail: (
      <div className="text-xs">
        <p>Choose the deployment method that best fits your infrastructure:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Docker: Quick and easy containerized deployment for scalability and portability</li>
          <li>VirtualBox: Perfect for testing or small-scale deployments in a virtualized environment</li>
          <li>BYOH (Bring Your Own Hardware): Install directly on your hardware for maximum control</li>
          <li>Build Your Own Helpdesk: Customize and extend our solution to create a unique ITSM platform</li>
        </ul>
        <p className="mt-2">Our flexible deployment options ensure that you can implement and scale your ITSM solution to meet your specific needs and infrastructure requirements.</p>
      </div>
    )

  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-16 md:py-24 w-[90%] m-auto flex flex-col gap-8 md:gap-20 items-center"
    >
      <h1 className="text-3xl md:text-4xl font-semibold">Features</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-16 ">
        {features.map((feature) => (
          <Feature
            key={feature.id}
            image={feature.image}
            title={feature.title}
            text={feature.text}
            detail={feature.detail}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
