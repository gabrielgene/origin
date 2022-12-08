import * as S from './HomePage.styles';
import React from 'react';

import { formatCurrency, valueFormat } from 'utils/formatCurrency';
import { handleNextMonth, monthNames } from 'utils/month';

import AmountInput from 'components/AmountInput/AmountInput';
import Button from 'components/Button/Button';
import MonthlyPicker from 'components/MonthlyPicker/MonthlyPicker';
import HouseIcon from 'components/Svg/House';
import Topbar from 'components/Topbar/Topbar';

export default function HomePage() {
  const [currentDate, setCurrentDate] = React.useState(handleNextMonth());
  const [plusAmount, setPlusAmount] = React.useState(1);
  const [value, setValue] = React.useState(0);
  const [formattedInputValue, setFormattedInputValue] = React.useState(
    formatCurrency('0'),
  );

  const installments = React.useMemo(() => {
    return value / plusAmount;
  }, [value, plusAmount]);

  const handleMonth = (value: number) => {
    const tempDate = new Date(currentDate);
    tempDate.setMonth(tempDate.getMonth() + value);
    setCurrentDate(tempDate);
    setPlusAmount((previous) => previous + value);
  };

  const handleValue = (value: number, formattedValue: string) => {
    setValue(value);
    setFormattedInputValue(formattedValue);
  };

  return (
    <div>
      <Topbar />
      <S.Wrapper>
        <S.Title role="title">
          {`Let's plan your`} <strong>saving goal.</strong>
        </S.Title>

        <S.Card>
          <S.CardHeader>
            <HouseIcon />
            <S.CardHeaderWrapper>
              <S.CardTitle>Buy a house</S.CardTitle>
              <S.CardSubtitle>Saving goal</S.CardSubtitle>
            </S.CardHeaderWrapper>
          </S.CardHeader>

          <S.InputWrapper>
            <AmountInput handleValue={handleValue} />
            <MonthlyPicker date={currentDate} handleMonth={handleMonth} />
          </S.InputWrapper>

          <S.BoxAmount>
            <S.BoxHeader>
              <S.MonthlyAmountText>Monthly amount</S.MonthlyAmountText>
              <S.MonthlyAmount data-testid="monthly-amount">
                ${valueFormat(installments)}
              </S.MonthlyAmount>
            </S.BoxHeader>

            <S.BoxFooter>
              <S.BoxFooterText>
                You’re planning <strong>{plusAmount} monthly deposits</strong>{' '}
                to reach your <strong>${formattedInputValue}</strong> goal by{' '}
                <strong>
                  {monthNames[currentDate.getMonth()]}{' '}
                  {currentDate.getFullYear()}.
                </strong>
              </S.BoxFooterText>
            </S.BoxFooter>
          </S.BoxAmount>

          <S.ButtonWrapper>
            <Button>Confirm</Button>
          </S.ButtonWrapper>
        </S.Card>
      </S.Wrapper>
    </div>
  );
}
