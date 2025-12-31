import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const smoothTransition = {
  type: "spring",
  damping: 20,
  stiffness: 100
};