export const maskEmail = (email?: string): string => {
  if (!email) return "-";

  const [localPart, domain] = email.split("@");
  const maskedLocal = localPart[0] + "*".repeat(localPart.length - 1);
  return `${maskedLocal}@${domain}`;
};
