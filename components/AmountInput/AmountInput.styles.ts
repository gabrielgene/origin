import styled from '@emotion/styled';

import { colors } from 'utils/theme';

import { TextWorkSans } from 'components/Text/Text';

import { Input, InputLeftElement } from '@chakra-ui/react';

export const InputWrapper = styled.div`
  width: 100%;
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

export const InputIconWrapper = styled(InputLeftElement)`
  height: 56px;
`;

export const StyledInput = styled(Input)`
  text-indent: 23px;
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: #4d6475;
  @media (max-width: 600px) {
    font-size: 20px;
  }
  &:focus {
    z-index: 1;
    border-color: ${colors.brandPrimary};
    box-shadow: 0 0 0 1px ${colors.brandPrimary};
  }
`;
