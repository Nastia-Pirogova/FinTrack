import sanitizeHml from "sanitize-html";

export function sanitize(html){
   return  sanitizeHml(html);
}