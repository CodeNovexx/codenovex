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

export type { HeaderProps, DropdownContentProps, HeaderContentProps };
