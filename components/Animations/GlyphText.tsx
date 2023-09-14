import { useEffect, useState, useRef } from 'react';
import { useSpring } from 'framer-motion';
import { Typography } from '@mui/material';

// prettier-ignore
const glyphs = [
    'ア', 'イ', 'ウ', 'エ', 'オ',
    'カ', 'キ', 'ク', 'ケ', 'コ',
    'サ', 'シ', 'ス', 'セ', 'ソ',
    'タ', 'チ', 'ツ', 'テ', 'ト',
    'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
    'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
    'マ', 'ミ', 'ム', 'メ', 'モ',
    'ヤ', 'ユ', 'ヨ', 'ー',
    'ラ', 'リ', 'ル', 'レ', 'ロ',
    'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン',
    'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
    'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
    'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
    'バ', 'ビ', 'ブ', 'ベ', 'ボ',
    'パ', 'ピ', 'プ', 'ペ', 'ポ',
  ];

const CharType = {
  Glyph: 'glyph',
  Value: 'value',
};

interface GlyphTextType {
  start?: boolean;
  english: string;
  japanese: string;
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  animate?: boolean;
  dark?: boolean;
}

function shuffle(
  content: string[],
  output: { type: string; value: string }[],
  position: number
) {
  return content.map((value: string, index: number) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index]?.value };
  });
}

export const GlyphText = ({
  english,
  japanese,
  start = true,
  size = 'small',
  animate = true,
  dark = false,
}: GlyphTextType) => {
  const output = useRef([{ type: CharType.Glyph, value: '' }]);
  const decoderSpring = useSpring(0, { stiffness: 6, damping: 3 });
  const [startGlyph, setStartGlyph] = useState(start);
  const [glyph, setGlyph] = useState<string | null>(null);
  const [isJapanese, setIsJapanese] = useState(false);
  const [enText] = useState(english);
  const [jpText] = useState(japanese);

  useEffect(() => {
    const content: string[] = isJapanese ? jpText.split('') : enText.split('');

    const renderOutput = () => {
      const characterMap = output.current.map((item) => {
        return item.value;
      });

      setGlyph(characterMap.join(''));
    };

    const startSpring = () => {
      decoderSpring.set(content.length);
      decoderSpring.on('change', (value) => {
        output.current = shuffle(content, output.current, value);
        renderOutput();
      });
    };

    if (startGlyph) {
      startSpring();
    } else {
      decoderSpring.clearListeners();
      decoderSpring.set(0);
      output.current = [{ type: CharType.Glyph, value: '' }];
    }

    const glyphInterval = setInterval(() => {
      // Toggle the startGlyph state to restart the animation
      setStartGlyph((prevState) => !prevState);

      startGlyph && setIsJapanese(isJapanese ? false : true);
    }, 3000);

    return () => {
      decoderSpring.stop();
      clearInterval(glyphInterval);
    };
  }, [startGlyph, decoderSpring, isJapanese, jpText, enText]);

  return (
    <Typography
      sx={{
        minHeight: '1.5rem',
        color: dark ? '#0F1923' : '#ffffff',
        fontSize:
          size === 'small'
            ? '1rem'
            : size === 'medium'
            ? '1.5rem'
            : size === 'large'
            ? '2rem'
            : size === 'extraLarge'
            ? '3rem'
            : '1rem',
        textTransform: 'uppercase',
        letterSpacing: `${'inherit'} : ${'0.25rem'}`,
        clip: 'rect(0 0 0 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        transition: 'all 0.3s ease',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: animate ? 'transparent' : 'none',
        backgroundImage: animate
          ? 'linear-gradient(90deg, #2196f3, #00dfd8)'
          : 'none',
        animation: animate ? 'hueSwitch 20s linear infinite' : 'none',
        '@keyframes hueSwitch': {
          '0%': {
            filter: 'hue-rotate(0)',
          },
          '50%': {
            filter: 'hue-rotate(120deg)',
          },
          '100%': {
            filter: 'hue-rotate(0deg)',
          },
        },
      }}
    >
      {glyph}
    </Typography>
  );
};
