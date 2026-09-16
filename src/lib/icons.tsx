import {
  HelpCircle,
  Percent,
  Receipt,
  Megaphone,
  Users,
  ClipboardList,
  LayoutGrid,
  ChefHat,
  Calculator,
  Tag,
  Smile,
  Repeat,
  TrendingUp,
  Compass,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  "help-circle": HelpCircle,
  percent: Percent,
  receipt: Receipt,
  megaphone: Megaphone,
  users: Users,
  "clipboard-list": ClipboardList,
  "layout-grid": LayoutGrid,
  "chef-hat": ChefHat,
  calculator: Calculator,
  tag: Tag,
  smile: Smile,
  repeat: Repeat,
  "trending-up": TrendingUp,
  compass: Compass,
  "book-open": BookOpen,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? HelpCircle;
}
