import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import FlowLogo from '../public/Logo.svg';
import { media } from 'utils/media';
import Image from 'next/image';
import dynamic from 'next/dynamic';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];
const ColorSwitcher = dynamic(() => import('../components/ColorSwitcher'), { ssr: false });

const footerItems: FooterItems = [
  {
    title: 'Product',
    items: [
      { title: 'Overview', href: '/overview' },
      { title: 'Features', href: '/features' },
      { title: 'Tutorials', href: '/tutorials' },
      { title: 'Pricing', href: '/pricing' },
      { title: 'Releases', href: '/releases' },
    ],
  },
  {
    title: 'Company',
    items: [
      { title: 'About', href: '/about' },
      { title: 'Press', href: '/press' },
      { title: 'Careers', href: '/careers' },
      { title: 'Contact', href: '/contact' },
      { title: 'Partners', href: '/partners' },
    ],
  },
  {
    title: 'Support',
    items: [
      { title: 'Help Center', href: '/help-center' },
      { title: 'Terms of service', href: '/terms-of-service' },
      { title: 'Legal', href: '/legal' },
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Status', href: '/status' },
    ],
  },
  {
    title: 'Follow us',
    items: [
      { title: 'Facebook', href: 'https://www.facebook.com' },
      { title: 'Twitter', href: 'https://www.twitter.com' },
      { title: 'Dribbble', href: 'https://www.dribbble.com' },
      { title: 'Instagram', href: 'https://www.instagram.com' },
      { title: 'LinkedIn', href: 'https://www.linkedin.com' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <BottomBar>
          <LightDarkToggle>
            <Image priority width={32} height={32} src={FlowLogo} />
          </LightDarkToggle>
          <Copyright>&copy; 2020 Flowout. All rights reserved</Copyright>
          <ColorSwitcherContainer>
            <ColorSwitcher />
          </ColorSwitcherContainer>
        </BottomBar>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
      </FooterContainer>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  padding-left: 8.438rem;
  padding-right: 8.438rem;
  background: rgb(var(--background));
  color: rgb(var(--text));
  ${media('<tablet')} {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
const FooterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  ${media('<tablet')} {
    flex-direction: column;
  }
`;

const ColorSwitcherContainer = styled.div`
  width: 4rem;
  margin-top: 24px;
`;

const ListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 1.7rem;
  color: rgba(var(--footerText));
  margin-bottom: 1rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-right: 2rem;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 50%;
    text-align: center;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.3rem;

  a {
    text-decoration: none;
    color: rgba(var(--text));
  }
`;

const BottomBar = styled.div`
  /* margin-top: 2rem; */
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  ${media('<tablet')} {
    align-items: center;
    justify-content: center;
    margin-right: 0px;
  }
`;

const LightDarkToggle = styled.div`
  font-size: 1rem;

  label {
    display: flex;
    align-items: center;
  }

  input {
    margin: 0 0.5rem;
  }
`;

const Copyright = styled.p`
  font-size: 1rem;
  margin-top: 2rem;
`;
