import {
  RichTextExpression,
  RichTextNewLineExpression,
  RichTextPlayerNameExpression,
  RichTextStyleTextExpression,
  RichTextTextExpression,
} from './expressions';
import { RichTextTokens } from './RichTextTokens';

export type RichTextParameters = {
  playerName?: string;
  ignoreNewLine?: boolean;
}

export class RichTextParser {
  public parse(text: string, options?: RichTextParameters) {
    const expressions = [] as RichTextExpression[];
    const chars = text.trim();
    let startPos = 0;
    for (const [pos, char] of chars.split('').entries()) {
      if (startPos > pos) {
        continue;
      }

      if (['\r', '\n'].includes(char)) {
        expressions.push(new RichTextTextExpression(chars.substr(startPos, pos - startPos)));
        expressions.push(options?.ignoreNewLine ? new RichTextExpression() : new RichTextNewLineExpression());
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
          } else {
            // if not found, its syntax error. ignore for now
            continue;
          }
        }
        expressions.push(new RichTextStyleTextExpression(chars.substr(pos, startPos - pos)));
      } else if (`${char}${chars[pos + 1]}${chars[pos + 2]}${chars[pos + 3]}` === RichTextTokens.playerName) {
        expressions.push(new RichTextTextExpression(chars.substr(startPos, pos - startPos)));
        expressions.push(new RichTextPlayerNameExpression(options?.playerName))
        startPos = pos + RichTextTokens.playerName.length;
      }
    }
    expressions.push(new RichTextTextExpression(chars.substr(startPos)));

    return expressions;
  }
}
