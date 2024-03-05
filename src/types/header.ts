import { ReactNode, MouseEventHandler } from "react";

interface HeaderProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  teamRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  footerRef: React.RefObject<HTMLDivElement>;
}

interface DropdownContentProps {
  closeDropdown: () => void;
  scrollToRef: (refName: string) => void;
}

interface HeaderContentProps {
  toggleDropdown: () => void;
  scrollToRef: (refName: string) => void;
}

interface NavItemProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export type {
  HeaderProps,
  DropdownContentProps,
  HeaderContentProps,
  NavItemProps,
};
