import { describe, expect, it } from "vitest";

import { whatsappLink } from "@/lib/whatsapp";

describe("WhatsApp contact", () => {
  it("opens a chat with 656 228 5134 using the Mexico country code", () => {
    expect(whatsappLink("hola")).toBe("https://wa.me/526562285134?text=hola");
  });
});
