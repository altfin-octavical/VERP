// WhatsApp contact for Valor efectivo — Realpolitik (Mexican number, country code 52).
export const WHATSAPP_LOCAL_NUMBER = "6562285134";
export const WHATSAPP_COUNTRY_CODE = "52";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, vengo del sitio de Valor efectivo – Realpolitik y me gustaría recibir más información.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const digits = `${WHATSAPP_COUNTRY_CODE}${WHATSAPP_LOCAL_NUMBER}`.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DISPLAY = "656 228 5134";
