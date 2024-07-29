import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ButtonProps = PropsWithChildren<{ transparent?: boolean }>;

const Button = styled.a<ButtonProps>`
  border: none;
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background: ${(p) => (p.transparent ? 'transparent' : 'rgb(var(--primary))')};
  padding: 1rem 2.188rem;
  font-size: 1.5rem;
  color: ${(p) => (p.transparent ? 'rgb(var(--text))' : 'rgb(var(--textSecondary))')};
  text-transform: uppercase;
  font-family: var(--font);
  border-radius: 8px;
  font-weight: 700;
  /* border: ${(p) => (p.transparent ? 'none' : '2px solid rgb(var(--primary))')}; */
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;

  span {
    margin-left: 2rem;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

export default Button;
