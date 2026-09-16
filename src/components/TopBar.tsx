import { Sun } from "lucide-react";
import { productConfig } from "@/config/product";

export function TopBar() {
  return (
    <div className="w-full bg-brown py-2.5 text-center text-sm font-medium text-cream">
      <p className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4">
        <Sun className="h-4 w-4 text-yellow" aria-hidden="true" />
        <span>{productConfig.barraSuperior}</span>
      </p>
    </div>
  );
}
