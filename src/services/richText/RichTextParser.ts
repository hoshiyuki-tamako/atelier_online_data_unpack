import i18n from '@/i18n';

import {
  RichTextExpression,
  RichTextNewLineExpression,
  RichTextStyleTextExpression,
  RichTextTextExpression,
} from './expressions';
import { RichTextTokens } from './RichTextTokens';

export type RichTextParameters = {
  playerName?: string;
}

export class RichTextParser {
  public defaultPlayerName = `[${i18n.t('プレーヤー')}${i18n.t('名前')}]`;

  public parse(text: string, options?: RichTextParameters) {
    const expressions = [] as RichTextExpression[];

    const chars = this.replaceWithPlayerName(text, options?.playerName);

    let pos = 0;
    let startPos = 0;
    for (const char of chars) {
      if (char.match(/\r?\n/g)) {
        expressions.push(new RichTextTextExpression(chars.substr(startPos, pos - startPos)));
        expressions.push(new RichTextNewLineExpression());
        startPos = pos + 1;
      } else if (`${char}${chars[pos + 1]}${chars[pos + 2]}` === RichTextTokens.colorStart) {
        expressions.push(new RichTextTextExpression(chars.substr(startPos, pos - startPos)));

        const boldIndex = chars.indexOf(RichTextTokens.boldEnd, startPos);
        if (boldIndex > 0) {
          startPos = boldIndex + RichTextTokens.boldEnd.length;
        } else {
          const colorIndex = chars.indexOf(RichTextTokens.colorEnd, startPos);
          if (colorIndex > 0) {
            startPos = colorIndex + RichTextTokens.colorEnd.length;
          }
        }
        expressions.push(new RichTextStyleTextExpression(chars.substr(pos, startPos - pos)));
      }
      ++pos;
    }
    expressions.push(new RichTextTextExpression(chars.substr(startPos)));

    return expressions;
  }

  public replaceWithPlayerName(text: string, playerName?: string) {
    return text.trim().replace(/\[px\]/g, playerName || this.defaultPlayerName);
  }
}
