import {
  Montserrat,
  Liu_Jian_Mao_Cao,
  Poiret_One,
  Comfortaa,
} from 'next/font/google';

export const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const liujian = Liu_Jian_Mao_Cao({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const poiretone = Poiret_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const comfortaa = Comfortaa({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const typography = {
  fontFamily: montserrat.style.fontFamily,
  fontWeightThin: 100,
  fontWeightExtraLight: 200,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
  fontWeightBlack: 900,
};
