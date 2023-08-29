'use client';

import { useEffect, useState, useRef } from 'react';
import { useSpring } from 'framer-motion';
import { Typography } from '@mui/material';
import { delay } from '@/hooks/useDelay';

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
  text: string;
  start?: boolean;
  delay?: number;
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

    if (position % 1 < 0.5 || position < index) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index].value };
  });
}

export default function GlyphText({
  text,
  start = true,
  delay: startDelay = 0,
}: GlyphTextType) {
  const output = useRef([{ type: CharType.Glyph, value: '' }]);
  const decoderSpring = useSpring(0, { stiffness: 10, damping: 3 });
  const [glyph, setGlyph] = useState<string | null>(null);

  useEffect(() => {
    const content: string[] = text.split('');

    const renderOutput = () => {
      const characterMap = output.current.map((item) => {
        return item.value;
      });

      setGlyph(characterMap.join(''));
    };

    const startSpring = async () => {
      await delay(startDelay);
      decoderSpring.set(content.length);
      decoderSpring.on('change', (value) => {
        output.current = shuffle(content, output.current, value);
        renderOutput();
      });
    };

    if (start) {
      startSpring();
    } else {
      decoderSpring.set(0);
      output.current = [{ type: CharType.Glyph, value: '' }];
    }

    return () => {
      // Clean up the animation when the component unmounts
      decoderSpring.stop();
    };
  }, [start, text, decoderSpring, startDelay]);

  return (
    <Typography
      sx={{
        color: '#ffffff',
        fontSize: `${'inherit'} : ${'1rem'}`,
        textTransform: 'uppercase',
        letterSpacing: `${'inherit'} : ${'0.25rem'}`,
        clip: 'rect(0 0 0 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        transition: 'all 0.3s ease',
      }}
    >
      {glyph}
    </Typography>
  );
}
