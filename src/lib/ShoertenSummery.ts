export const shortenSummary = (summary: string) => {
    const words = summary.split(" ");
    const shortened = words.slice(0, 10).join(" ");
    return words.length > 10 ? shortened + "..." : shortened;
  };