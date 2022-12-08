import styled from '@emotion/styled';

import { colors } from 'utils/theme';

import { TextWorkSans } from 'components/Text/Text';

import { IconButton as ChakraIconButton } from '@chakra-ui/react';

export const InputWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  @media (min-width: 600px) {
    max-width: 192px;
  }
`;

export const Label = styled(TextWorkSans)`
  color: ${colors.blueGray[900]};
  font-weight: 400;
  line-height: 150%;
  font-size: 14px;
  margin-bottom: 4px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Month = styled(TextWorkSans)`
  color: ${colors.blueGray[900]};
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const Year = styled(TextWorkSans)`
  color: ${colors.blueGray[900]};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const InputBox = styled.div`
  &:focus {
    z-index: 1;
    border-color: ${colors.brandPrimary};
    box-shadow: 0 0 0 1px ${colors.brandPrimary};
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border: 1px solid ${colors.blueGray[50]};
  border-radius: 4px;
  height: 56px;
  width: 100%;
  padding: 0 12px;
`;

export const IconButton = styled(ChakraIconButton)`
  width: 24px;
  height: 24px;
  min-height: 0;
  min-width: 0;
`;

export const TextWrapper = styled.div`
  text-align: center;
`;
