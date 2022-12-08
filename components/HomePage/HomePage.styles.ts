import styled from '@emotion/styled';

import { colors } from 'utils/theme';

import { TextRubik, TextWorkSans } from 'components/Text/Text';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
  @media (max-width: 600px) {
    margin-top: 32px;
  }
`;

export const Title = styled(TextWorkSans)`
  color: ${colors.brandPrimary};
  font-weight: 400;
  line-height: 120%;
  font-size: 20px;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    font-size: 18px;
    color: blue;
  }
`;

export const Card = styled.div`
  background: white;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 32px 40px 40px 40px;
  max-width: 560px;

  @media (max-width: 600px) {
    padding: 24px 24px 40px 24px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  @media (max-width: 600px) {
    margin-bottom: 16px;
  }
`;

export const CardHeaderWrapper = styled.div`
  margin-left: 16px;
`;

export const CardTitle = styled(TextRubik)`
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  margin-bottom: 4px;
  color: ${colors.blueGray[900]};
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const CardSubtitle = styled(TextWorkSans)`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${colors.blueGray[400]};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const BoxAmount = styled.div`
  background: white;
  border: 1px solid ${colors.blueGray[50]};
  border-radius: 8px;
  margin-bottom: 32px;
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px 16px 32px;
  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const MonthlyAmountText = styled(TextWorkSans)`
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: ${colors.blueGray[900]};
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const MonthlyAmount = styled(TextRubik)`
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  color: ${colors.brandSecondary};
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const BoxFooter = styled.div`
  background: ${colors.blueGray[10]};
  padding: 24px 32px;
`;

export const BoxFooterText = styled(TextWorkSans)`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.blueGray[900]};
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;
