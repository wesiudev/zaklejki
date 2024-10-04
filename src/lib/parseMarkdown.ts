import { parseMarkdown } from "./renderMarkdown";

export const renderMarkdown = (text: string) => {
  return { __html: parseMarkdown(text) };
};
