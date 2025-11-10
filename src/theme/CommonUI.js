
import styled from "styled-components";

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

export const SubHeading = styled.h2`
  color: ${({ theme }) => theme.colors.subtext};
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.subtext};
  line-height: 1.6;
`;

export const GradientButton = styled.button`
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
  padding: 0.6rem 1.5rem;
  border-radius: 9999px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: translateY(-2px);
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.3s ease;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;
