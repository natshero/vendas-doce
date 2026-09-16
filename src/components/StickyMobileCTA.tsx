import { productConfig } from "@/config/product";
import { CTAButton } from "./CTAButton";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brown/10 bg-white/95 p-3 backdrop-blur-sm md:hidden">
      <CTAButton className="w-full">{productConfig.botaoFixoMobile}</CTAButton>
    </div>
  );
}
