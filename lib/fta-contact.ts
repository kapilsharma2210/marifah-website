// Federal Tax Authority (FTA) contact details, as published on tax.gov.ae
// (Contact Us page and the "Submit Inquiry" / "Submit Complaint" service cards), checked November 2026.
// If the FTA changes a number or its hours, update this file: the page reads everything from here.

export const FTA = {
  phoneUae: { display: "800 82923", tel: "80082923" },
  phoneIntl: { display: "+971 8008 2923", tel: "+97180082923" },
  email: "info@tax.gov.ae",
  website: "https://tax.gov.ae",
  contactPage: "https://tax.gov.ae/en/contact.us.aspx",
  inquiryCard: "https://tax.gov.ae/en/services/inquiries.and.feedback.request.aspx",
  complaintCard: "https://tax.gov.ae/en/services/feedback.complains.aspx",
  taxAgents: "https://tax.gov.ae/en/tax.support/tax.agents.aspx",
  emaraTax: "https://eservices.tax.gov.ae/",
  offices: [
    {
      city: "Abu Dhabi",
      address: "Emirates Property Investment Company Building, P.O. Box 2440, Abu Dhabi",
      map: "https://www.google.com/maps/search/?api=1&query=Federal+Tax+Authority+Emirates+Property+Investment+Company+Building+Abu+Dhabi",
    },
    {
      city: "Dubai",
      address: "Central Park Business Towers, DIFC, P.O. Box 2440, Dubai",
      map: "https://www.google.com/maps/search/?api=1&query=Federal+Tax+Authority+Central+Park+Towers+DIFC+Dubai",
    },
  ],
  social: [
    { name: "X (Twitter)", handle: "@uaetax", url: "https://twitter.com/uaetax" },
    { name: "Instagram", handle: "@uaetax", url: "https://www.instagram.com/uaetax/" },
    { name: "Facebook", handle: "TheUAETaxes", url: "https://www.facebook.com/Theuaetaxes/" },
    { name: "LinkedIn", handle: "Federal Tax Authority", url: "https://www.linkedin.com/company/federal-tax-authority" },
  ],
};

/** Opening hours in UAE time. Days: 0 = Sunday … 6 = Saturday. */
export const HOURS = {
  callCentre: { days: [1, 2, 3, 4, 5, 6], open: "07:30", close: "22:00", label: "Monday to Saturday, 7:30 am – 10:00 pm" },
  supportCentre: { days: [1, 2, 3, 4, 5], open: "07:30", close: "15:30", label: "Monday to Friday, 7:30 am – 3:30 pm" },
};

export type Channel = { name: string; when: string; response: string; bestFor: string };

/** Published service levels from the FTA's Contact Us page. */
export const CHANNELS: Channel[] = [
  { name: "Call centre (800 82923)", when: "Mon–Sat, 7:30 am – 10:00 pm", response: "Answered in about 8 minutes", bestFor: "Quick questions and general guidance" },
  { name: "Live chat on tax.gov.ae", when: "24 hours, 7 days", response: "About 5 minutes", bestFor: "Questions you'd rather type than call about" },
  { name: "TARA virtual assistant", when: "24 hours, 7 days", response: "About 5 minutes", bestFor: "Simple, common questions" },
  { name: "Email (info@tax.gov.ae)", when: "24 hours, 7 days", response: "Within 2 business days", bestFor: "Detailed questions with documents attached" },
  { name: "EmaraTax portal or app", when: "24 hours, 7 days", response: "Gives you a reference number", bestFor: "Anything linked to your registration, returns or a case" },
  { name: "Tax Connect (video appointment)", when: "Book an available slot", response: "30-minute session", bestFor: "Talking a complex matter through with FTA staff" },
  { name: "Taxpayer Support Centre (in person)", when: "Mon–Fri, 7:30 am – 3:30 pm", response: "Served in about 15 minutes", bestFor: "Face-to-face help in Abu Dhabi or Dubai" },
];
