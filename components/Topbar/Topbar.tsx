import * as S from './Topbar.styles';

import LogoDesktop from 'components/Svg/LogoDesktop';
import LogoMobile from 'components/Svg/LogoMobile';

import { useMediaQuery } from '@chakra-ui/react';

export default function Topbar() {
  const [isDesktop] = useMediaQuery('(min-width: 600px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return <S.Wrapper>{isDesktop ? <LogoDesktop /> : <LogoMobile />}</S.Wrapper>;
}
