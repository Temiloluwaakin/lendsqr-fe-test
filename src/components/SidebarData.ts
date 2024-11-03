import UserIcon from './icons/UserSb.png';
import GuarantorIcon from './icons/GuarantorsSb.png';
import loansIcon from './icons/LoansSb.png';
import karmaIcon from './icons/karmaSb.png';
import savingsIcon from './icons/savingsSb.png';
import loanRequestIcon from './icons/loanRequestSb.png';
import decisionModelIcon from './icons/DecModSb.png';
import whitelistIcon from './icons/whitelistSb.png';
import organizationIcon from './icons/organizationSb.png';
import loanProductIcon from './icons/loanProductSb.png';




type SidebarItem = {
  label: string;
  icon: string
  link: string;
};

type SidebarCategory = {
  title: string;
  items: SidebarItem[];
};

export const sidebarData: SidebarCategory[] = [
  {
    title: "CUSTOMERS",
    items: [
      { label: "Users", icon: UserIcon, link: "/dashboard" },
      { label: "Guarantors", icon: GuarantorIcon, link: "/guarantors" },
      { label: "Loans", icon: loansIcon, link: "/loans" },
      { label: "Decision Models", icon: decisionModelIcon, link: "/decision-models" },
      { label: "Savings", icon: savingsIcon, link: "/savings" },
      { label: "Loan Request", icon: loanRequestIcon, link: "/loan-request" },
      { label: "Whitelist", icon: whitelistIcon, link: "/whitelist" },
      { label: "/karma", icon: karmaIcon, link: "/karma" },
    ]
  },
  {
    title: "BUSINESSES",
    items: [
      { label: "Organization", icon: organizationIcon, link: "/organization" },
      { label: "Loan Products", icon: loanProductIcon, link: "/loan-products" },
    ]
  }
];
