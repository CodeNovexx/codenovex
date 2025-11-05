import { lazy, ComponentType } from "react";

// Map of slug to component
// Using React.lazy for code-splitting and performance
export const postComponents: Record<
  string,
  ComponentType<Record<string, never>>
> = {
  // English posts
  "how-to-reduce-development-costs": lazy(
    () => import("./articles/HowToReduceDevelopmentCostsEN")
  ),
  "react-performance-optimization-2025": lazy(
    () => import("./articles/ReactPerformanceOptimizationEN")
  ),
  "choosing-right-tech-stack-2025": lazy(
    () => import("./articles/ChoosingRightTechStackEN")
  ),

  // Georgian posts
  "rogor-shevamciro-ganvitreba-xarjebi": lazy(
    () => import("./articles/HowToReduceDevelopmentCostsKA")
  ),
  "react-performance-optimizacia-2025": lazy(
    () => import("./articles/ReactPerformanceOptimizationKA")
  ),
  "swori-teqnologiuri-steki-2025": lazy(
    () => import("./articles/ChoosingRightTechStackKA")
  ),
};

// Helper function to get component by slug
export const getPostComponent = (
  slug: string
): ComponentType<Record<string, never>> | null => {
  return postComponents[slug] || null;
};
