import styled from '@emotion/styled';

import { colors } from 'utils/theme';

import { TextWorkSans } from 'components/Text/Text';

import { Button as ChakraButton } from '@chakra-ui/react';

export const Button = styled(ChakraButton)`
  width: 100%;
  max-width: 320px;
  height: 56px;
  background: ${colors.brandPrimary};
  border-radius: 32px;
`;

export const Text = styled(TextWorkSans)`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: white;
`;
