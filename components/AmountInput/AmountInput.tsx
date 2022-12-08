import * as S from './AmountInput.styles';
import React from 'react';

import { formatCurrency } from 'utils/formatCurrency';

import Dolar from 'components/Svg/Dolar';

import { InputGroup } from '@chakra-ui/react';

type Props = {
  handleValue: (value: number, formattedValue: string) => void;
};

export default function AmountInput(props: Props) {
  const { handleValue } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputValueChange = () => {
    const value = inputRef.current?.value;
    if (!!value) {
      const formatedValue = formatCurrency(value);
      inputRef.current.value = formatedValue;
      handleValue(parseFloat(formatedValue.replace(/,/g, '')), formatedValue);
    }
  };

  return (
    <S.InputWrapper>
      <S.Label>Total amount</S.Label>
      <InputGroup>
        <S.InputIconWrapper>
          <Dolar />
        </S.InputIconWrapper>

        <S.StyledInput
          id="amount"
          name="amount"
          data-testid="amount-input"
          height="56px"
          ref={inputRef}
          defaultValue="0.00"
          onChange={handleInputValueChange}
          placeholder="Enter amount"
        />
      </InputGroup>
    </S.InputWrapper>
  );
}
