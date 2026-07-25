export const siteName = "Modern Faber";

export const inquiryEmailAddress = "john@fastrepl.com";

const inquiryEmailParams = new URLSearchParams({
  subject: "Modern Faber inquiry",
  body: [
    "Hi John,",
    "",
    "I want to inquire about Modern Faber.",
    "",
    "Recent work:",
    "",
    "Why I want in:",
  ].join("\n"),
});

export const inquiryEmailUrl = `mailto:${inquiryEmailAddress}?${inquiryEmailParams.toString()}`;
