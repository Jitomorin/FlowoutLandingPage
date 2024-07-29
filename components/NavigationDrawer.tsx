import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { NavItems } from 'types';
import ClientOnly from './ClientOnly';
import CloseIcon from './CloseIcon';
import OriginalDrawer from './Drawer';
import { media } from 'utils/media';

type NavigationDrawerProps = PropsWithChildren<{ items: NavItems }>;

export default function NavigationDrawer({ children, items }: NavigationDrawerProps) {
  return (
    <OriginalDrawer.Drawer>
      <Wrapper>
        <ClientOnly>
          <OriginalDrawer.Target openClass="drawer-opened" closedClass="drawer-closed">
            <div className="my-drawer">
              <div className="my-drawer-container">
                <DrawerCloseButton />
                <NavItemsList items={items} />
                <CustomButton>Get Swifty</CustomButton>
              </div>
            </div>
          </OriginalDrawer.Target>
        </ClientOnly>
      </Wrapper>
      {children}
    </OriginalDrawer.Drawer>
  );
}

function NavItemsList({ items }: NavigationDrawerProps) {
  const { close } = OriginalDrawer.useDrawer();
  const router = useRouter();

  useEffect(() => {
    function handleRouteChangeComplete() {
      close();
    }

    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => router.events.off('routeChangeComplete', handleRouteChangeComplete);
  }, [close, router]);

  return (
    <ul>
      {items.map((singleItem, idx) => {
        return (
          <NavItem key={idx}>
            <NextLink href={singleItem.href}>{singleItem.title}</NextLink>
          </NavItem>
        );
      })}
    </ul>
  );
}

function DrawerCloseButton() {
  const ref = useRef(null);
  const a11yProps = OriginalDrawer.useA11yCloseButton(ref);

  return <CloseIcon className="close-icon" _ref={ref} {...a11yProps} />;
}

const Wrapper = styled.div`
  .my-drawer {
    width: 100vw;
    height: 100%;
    overflow: hidden;
    z-index: var(--z-drawer);
    background: rgb(var(--background));

    flex-direction: column;

    transition: margin-left 0.3s cubic-bezier(0.82, 0.085, 0.395, 0.895);
  }

  .my-drawer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: auto;
    padding: 0 1.2rem;
  }

  .close-icon {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }

  .drawer-closed {
    margin-left: -100%;
  }

  .drawer-opened {
    margin-left: 0;
  }

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 0;
    padding-left: 10.9px;
    margin: 0;
    list-style: none;

    & > *:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;

const CustomButton = styled.button`
  margin-bottom: 2rem;
  width: 100%;
  margin: 0 auto;
  padding: 0.625rem 1rem;
  background-color: #8c30f5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all ease-in-out 0.3s;
  margin-top: 2rem; /* Adding some margin to separate it from the list items */
  ${media('<=tablet')} {
    margin-right: 1.5rem;
  }
  :hover {
    scale: 1.03;
  }
`;

const NavItem = styled.li`
  a {
    font-size: 3rem;
    display: block;
    color: currentColor;
    text-decoration: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    text-align: left;
  }
`;
