export function copyToClipboard(link: string, setCopied: Function) {
  navigator.clipboard.writeText(link);
  setCopied(true);
}
