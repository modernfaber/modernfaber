export const siteName = "Modern Faber";

// Names reach the room by referral, but the inbox is open either way: a member
// putting someone forward and someone making their own case want the same three
// lines, so the template asks for the work rather than for an introduction.
export const referralEmailAddress = "john@fastrepl.com";

const referralEmailParams = new URLSearchParams({
  subject: "Modern Faber referral",
  body: [
    "Hi John,",
    "",
    "Who this is about:",
    "",
    "The work:",
    "",
    "Why it belongs at the bench:",
  ].join("\n"),
});

export const referralEmailUrl = `mailto:${referralEmailAddress}?${referralEmailParams.toString()}`;
