"use client";
import { ThinkingOrb } from "thinking-orbs";

export function Orb(props: React.ComponentProps<typeof ThinkingOrb>) {
  return <ThinkingOrb theme="auto" {...props} />;
}
