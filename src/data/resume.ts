export const profile = {
  name: "Chintan Chauhan",
  title: "Jr. Network Security Analyst",
  tagline: "Securing Networks & Endpoints",
  location: "Jersey City, NJ",
  email: "chintan.chauhan1@outlook.com",
  linkedin: "https://www.linkedin.com/in/chintanc",
  github: "https://github.com/chintanchauhan7",
  domain: "chintanchauhan.com",
  summary:
    "Network security analyst with hands-on experience in network monitoring, vulnerability assessment, and IT infrastructure support, including endpoint security solutions. Skilled at troubleshooting across Windows Server, Microsoft 365, and network systems, with a strong understanding of cloud environments such as Microsoft Azure and AWS. Recently completed a Master's degree in Information Systems at Pace University, with a concentration in Security and Information Assurance, focusing on data encryption, network defense, and modern cyber threats. Dedicated to strengthening security protocols, performing risk assessments, and improving operational resilience in fast-paced, security-focused environments.",
};

export const skillGroups = [
  {
    label: "SIEM & Threat Detection",
    skills: ["SIEM Monitoring", "Threat Detection", "Malware Analysis", "Incident Response"],
  },
  {
    label: "Security Tools",
    skills: ["Nmap", "Wireshark", "Vulnerability Assessment", "Penetration Testing", "BitLocker", "OpenSSL", "MFA"],
  },
  {
    label: "Network Infrastructure",
    skills: ["Cisco Catalyst", "SonicWall", "Fortinet FortiGate", "Ubiquiti EdgeRouter / UniFi", "NETGEAR ProSAFE", "VPN & RBAC"],
  },
  {
    label: "Cloud & Platforms",
    skills: ["Microsoft Azure", "AWS", "Office 365 / Exchange Admin", "Windows Server", "SQL Server", "Linux"],
  },
  {
    label: "Endpoint Management",
    skills: ["SentinelOne", "NinjaOne", "Comodo", "Microsoft Endpoint Configuration Manager", "WSUS", "Active Directory", "FileVault"],
  },
  {
    label: "Compliance & Frameworks",
    skills: ["CIA Triad", "GDPR", "HIPAA", "CCPA"],
  },
];

export const certifications = [
  "Information Privacy and Security (IPS)",
  "Cryptography Basics",
  "Program Management for IT Professionals",
  "IT Help Desk for Beginners",
];

export const experience = [
  {
    company: "IT Tec Solutions Inc.",
    role: "Jr. Network Security Analyst",
    period: "July 2025 — Present",
    location: "New York, United States",
    bullets: [
      "Perform real-time monitoring and analysis of SIEM dashboards, overseeing the security posture of 1,600+ endpoints (Windows, macOS, Windows Server, SQL Server, EDI machines) and executing advanced threat detection, malware analysis, and incident response.",
      "Troubleshoot and resolve escalated Tier 1/2 network events, supporting 150+ clients across 300+ physical and virtual servers and 48 EDI units, ensuring SLA compliance and infrastructure resilience.",
      "Administer VPN solutions (licensing, tunnel configuration, RBAC) for a distributed remote workforce; manage cloud-based Office 365 Exchange administration and license provisioning for 5,000+ global users.",
      "Architect and deploy network topologies, including secure segmentation, virtual/terminal server environments, and remote access configurations aligned to compliance mandates.",
      "Lead server implementations with UPS redundancy and automated backup strategies, generating audit-ready reports and coordinating with Azure/AWS cloud partners for data retention and business continuity.",
    ],
  },
  {
    company: "IT Tec Solutions Inc.",
    role: "Jr. Network Security Specialist",
    period: "July 2024 — May 2025",
    location: "New York City Metropolitan Area",
    bullets: [
      "Installed and configured workstation patching solutions through Microsoft Endpoint Configuration Manager to maintain system and security patch compliance.",
      "Monitored and maintained endpoint security across Comodo, NinjaOne, and SentinelOne platforms for data protection and secure device network access.",
      "Managed network infrastructure for 80+ servers and firewalls across multiple locations using Windows Server, SQL Server, Linux, SonicWall, Cisco, Ubiquiti EdgeRouter, Fortinet FortiGate, Ubiquiti UniFi AP, Cisco Catalyst, and NETGEAR ProSAFE.",
      "Performed penetration tests and vulnerability assessments for clients, identifying and eliminating security vulnerabilities through system hardening using Nmap and Wireshark.",
      "Deployed security solutions based on Windows BitLocker, OpenSSL, VPN, and MFA to ensure data protection across all network infrastructure.",
      "Developed group policies for patching 1,600+ user machines via Microsoft WSUS, Group Policy Enforcement, Active Directory, and Network Access Control, aligned to CIA Triad, GDPR, HIPAA, and CCPA standards.",
    ],
  },
  {
    company: "Air India SATS Airport Services Private Limited (AISATS)",
    role: "Information Technology",
    period: "February 2023 — August 2023",
    location: "Mumbai, Maharashtra, India",
    bullets: [
      "Configured and maintained network computer systems, including hardware, software, and IP phone setups.",
      "Provided technical support to end users and collaborated with the technology team to resolve issues.",
      "Troubleshot printers and networking devices, applied driver and firewall firmware updates, and performed preventive laptop maintenance.",
      "Monitored bandwidth usage across pan-India locations, producing weekly usage reports for the regional office.",
      "Managed IT asset inventory and coordinated with vendors on procurement and issue resolution.",
    ],
  },
];

export const education = [
  {
    school: "Pace University — Seidenberg School of Computer Science and Information Systems",
    degree: "Master's Degree, Information Systems (Security & Information Assurance)",
    period: "September 2023 — April 2025",
  },
  {
    school: "Vidyalankar Institute of Technology",
    degree: "Bachelor of Engineering, Electronics and Telecommunication Engineering",
    period: "July 2018 — May 2021",
  },
  {
    school: "Vidyalankar Polytechnic",
    degree: "Diploma in Engineering, Electronics and Telecommunication Engineering",
    period: "June 2015 — April 2018",
  },
];

export const projects = [
  {
    title: "Home SOC Lab — SIEM & Log Monitoring",
    description:
      "Self-hosted security operations lab using Wazuh/ELK to centralize log collection from Windows, Linux, and network devices, with custom detection rules for brute-force and lateral-movement patterns.",
    tags: ["SIEM", "Wazuh", "Log Analysis", "Detection Engineering"],
  },
  {
    title: "Segmented Home Network with VLANs & Firewall Rules",
    description:
      "Designed a segmented network topology (IoT, trusted, guest, DMZ) using VLANs, inter-VLAN firewall policy, and a pfSense/Ubiquiti stack to reduce lateral attack surface.",
    tags: ["Network Segmentation", "pfSense", "VLANs", "Ubiquiti"],
  },
  {
    title: "Automated Vulnerability Scan & Reporting Script",
    description:
      "Python wrapper around Nmap for scheduled internal scans, diffing results between runs and generating a summarized risk report highlighting newly exposed services.",
    tags: ["Python", "Nmap", "Automation", "Vulnerability Management"],
  },
  {
    title: "Endpoint Hardening Baseline",
    description:
      "Documented and scripted a Windows/macOS hardening baseline covering BitLocker/FileVault enforcement, MFA, patch policy via WSUS/Group Policy, and CIS-benchmark-aligned configuration checks.",
    tags: ["BitLocker", "FileVault", "CIS Benchmarks", "Group Policy"],
  },
];
