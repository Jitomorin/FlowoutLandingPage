import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import OverviewIcon from '../public/overview.svg';
import FeaturesIcon from '../public/features.svg';
import TutorialsIcon from '../public/tutorials.svg';
import ReleasesIcon from '../public/releases.svg';

const menuItems = [
  {
    label: 'Overview',
    description: 'You gotta get schwifty',
    icon: OverviewIcon,
    onClick: () => alert('Overview clicked'),
  },
  {
    label: 'Features',
    description: 'You gotta get schwifty in here.',
    icon: FeaturesIcon,
    onClick: () => alert('Features clicked'),
  },
  {
    label: 'Tutorials',
    description: 'It’s time to get schwifty.',
    icon: TutorialsIcon,
    onClick: () => alert('Tutorials clicked'),
  },
  {
    label: 'Releases',
    description: 'You gotta get schwifty.',
    icon: ReleasesIcon,
    onClick: () => alert('Releases clicked'),
  },
];

const NavbarDropdown = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: any = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <TriggerButton onClick={handleToggle}>{children}</TriggerButton>
      {isOpen && (
        <Menu>
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={item.onClick}>
              <Icon src={item.icon} alt={item.label} />
              <TextContainer>
                <Label>{item.label}</Label>
                <Description>{item.description}</Description>
              </TextContainer>
            </MenuItem>
          ))}
        </Menu>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TriggerButton = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgb(var(--background));
  /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); */
  z-index: 1;
  min-width: 250px;
  border-radius: 8px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  border-radius: 8px;
  /* transition: background-color 0.2s ease; */

  /* &:hover {
    background-color: #f1f1f1;
  } */
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 4px;
`;

const Description = styled.div`
  font-size: 14px;
  color: #666;
`;

export default NavbarDropdown;
