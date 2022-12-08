import * as S from './MonthlyPicker.styles';
import React from 'react';

import { handleNextMonth, monthNames } from 'utils/month';

import ChevronLeft from 'components/Svg/ChevronLeft';
import ChevronRight from 'components/Svg/ChevronRight';

type Props = {
  date: Date;
  handleMonth: (value: number) => void;
};

export default function MonthlyPicker(props: Props) {
  const { date, handleMonth } = props;
  const currentDate = handleNextMonth();
  const inputBoxRef = React.useRef<HTMLDivElement>(null);
  const disabled =
    date.toLocaleDateString() === currentDate.toLocaleDateString();

  const handleClick = () => {
    inputBoxRef.current?.focus();
    if (inputBoxRef.current?.tabIndex) {
      inputBoxRef.current.tabIndex = -1;
    }
  };

  const handleKeyDown = (event: any) => {
    const key = event.key;
    if (key === 'ArrowRight') {
      handleMonth(1);
    } else if (key === 'ArrowLeft' && !disabled) {
      handleMonth(-1);
    }
  };

  return (
    <S.InputWrapper onClick={handleClick}>
      <S.Label>Reach goal by</S.Label>
      <S.InputBox
        onKeyDown={handleKeyDown}
        ref={inputBoxRef}
        data-testid="monthly-picker"
      >
        <S.IconButton
          aria-label="back"
          variant="ghost"
          disabled={disabled}
          data-testid="previous-month"
          onClick={() => handleMonth(-1)}
        >
          <ChevronLeft />
        </S.IconButton>
        <S.TextWrapper>
          <S.Month data-testid="month-value">
            {monthNames[date.getMonth()]}
          </S.Month>
          <S.Year data-testid="year-value">{date.getFullYear()}</S.Year>
        </S.TextWrapper>

        <S.IconButton
          aria-label="next"
          variant="ghost"
          data-testid="next-month"
          onClick={() => handleMonth(1)}
        >
          <ChevronRight />
        </S.IconButton>
      </S.InputBox>
      <input
        data-testid="reachDate-input"
        type="hidden"
        name="reachDate"
        value={date.getTime()}
      ></input>
    </S.InputWrapper>
  );
}
