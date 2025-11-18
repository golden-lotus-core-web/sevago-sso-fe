import React from 'react';
import { COLOR_CONSTANT } from '../../../common/constant/color.constant';
import { COLOR_HIERARCHIAL } from '../../../common/constant/hierarchical.constant';
import { normalizeText } from '../../../common/utils/other/hierarchical.utils';

export const highlightText = (text: string, searchTerm: string): React.ReactNode => {
  if (!searchTerm || !text) return text;

  const normalizedText = normalizeText(text);
  const normalizedSearchTerm = normalizeText(searchTerm);

  if (!normalizedText.includes(normalizedSearchTerm)) return text;

  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  const searchLen = searchTerm.length;

  // Tìm các đoạn văn bản cần highlight và tạo phần tử JSX cho nó
  for (let i = 0; i <= text.length - searchLen; ) {
    const substr = text.substr(i, searchLen);
    if (normalizeText(substr) === normalizedSearchTerm) {
      if (lastIndex < i) {
        result.push(text.slice(lastIndex, i));
      }
      result.push(
        <span
          key={i}
          style={{
            color: COLOR_HIERARCHIAL.COLOR_HIGHLIGHT_TEXT,
            textDecoration: 'underline',
          }}
        >
          {text.substr(i, searchLen)}
        </span>,
      );
      i += searchLen;
      lastIndex = i;
    } else {
      i++;
    }
  }

  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result;
};

export const highlightYellow = (text: string | React.ReactNode, highlightQuery: string, showEmptyAsDots: boolean) => {
  const q = (highlightQuery ?? '').toString().trim().toLowerCase();

  if (!q || typeof text !== 'string') return text || (showEmptyAsDots ? '...' : '');
  const lower = text.toLowerCase();
  const idx = lower.indexOf(q);
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + q.length);
  const after = text.slice(idx + q.length);
  return (
    <span>
      {before}
      <mark style={{ backgroundColor: COLOR_CONSTANT.yellow, padding: 0 }}>{match}</mark>
      {after}
    </span>
  );
};
