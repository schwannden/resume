import { Type, ALargeSmall, AArrowUp } from "lucide-react"
import { FontSize } from "@/hooks/use-font-size"

export interface FontSizeConfig {
  name: FontSize
  label: string
  multiplier: number
  icon: typeof Type
  description: string
}

export const fontSizeConfigs: FontSizeConfig[] = [
  {
    name: "normal",
    label: "Normal",
    multiplier: 1,
    icon: Type,
    description: "Default text size",
  },
  {
    name: "large",
    label: "Large",
    multiplier: 1.25,
    icon: ALargeSmall,
    description: "Larger text for better readability",
  },
  {
    name: "extra-large",
    label: "Extra Large",
    multiplier: 1.5,
    icon: AArrowUp,
    description: "Maximum text size for accessibility",
  },
]

export function getFontSizeConfig(fontSize: FontSize): FontSizeConfig {
  return (
    fontSizeConfigs.find((config) => config.name === fontSize) ??
    fontSizeConfigs[0]
  )
}

export function getFontSizeLabel(fontSize: FontSize): string {
  return getFontSizeConfig(fontSize).label
}
