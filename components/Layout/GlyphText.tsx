'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion, useSpring } from 'framer-motion';
import { Box, Typography } from '@mui/material';

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
}

function shuffle(content: string[], output: any, position: number) {
  return content.map((value: any, index: any) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index].value };
  });
}

export default function GlyphText({ text, start = true }: GlyphTextType) {
  // variables init
  const output = useRef([{ type: CharType.Glyph, value: '' }]);
  const container = useRef<HTMLSpanElement>(null!);
  const reduceMotion = useReducedMotion();
  const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });

  useEffect(() => {
    const containerInstance = container.current;
    const content = text.split('');

    const renderOutput = () => {
      const characterMap = output.current.map((item) => {
        return item.value;
      });

      containerInstance.innerHTML = characterMap.join('');
    };

    const unsubscribeSpring = decoderSpring.onChange((value) => {
      output.current = shuffle(content, output.current, value);
      renderOutput();
    });

    const startSpring = async () => {
      decoderSpring.set(content.length);
    };

    if (start && !reduceMotion) {
      startSpring();
    }

    if (reduceMotion) {
      output.current = content.map((value, index) => ({
        type: CharType.Value,
        value: content[index],
      }));
      renderOutput();
    }

    return () => {
      unsubscribeSpring?.();
    };
  }, [decoderSpring, reduceMotion, start, text]);

  return (
    <Box component='div'>
      <Typography
        ref={container}
        sx={{
          color: '#ffffff',
          fontSize: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.25rem',
        }}
      />
    </Box>
  );
}
