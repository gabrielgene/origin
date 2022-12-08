import * as S from './Button.styles';

import { ButtonProps } from '@chakra-ui/react';

export default function Button(props: ButtonProps) {
  return (
    <S.Button colorScheme="facebook" {...props}>
      <S.Text>{props.children}</S.Text>
    </S.Button>
  );
}
