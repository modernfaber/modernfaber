export const siteName = "Modern Faber";

// Admission is referral-only, so this inbox belongs to the faber doing the
// introducing — never to the person hoping to get in.
export const referralEmailAddress = "john@fastrepl.com";

const referralEmailParams = new URLSearchParams({
  subject: "Modern Faber referral",
  body: [
    "Hi John,",
    "",
    "I want to bring someone to the table.",
    "",
    "Who they are:",
    "",
    "Work that convinced me:",
    "",
    "Why I am vouching:",
  ].join("\n"),
});

export const referralEmailUrl = `mailto:${referralEmailAddress}?${referralEmailParams.toString()}`;
