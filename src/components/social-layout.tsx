import React from 'react';
import SocialNavigation from './social-navigation';

interface SocialLayoutProps {
  children: React.ReactNode;
}

const SocialLayout = ({ children }: SocialLayoutProps) => {
  return (
    <div>
      <SocialNavigation />
      {children}
    </div>
  );
};

export default SocialLayout;
