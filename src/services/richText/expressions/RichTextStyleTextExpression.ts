import Color from 'color';

import { RichTextTextExpression } from './RichTextTextExpression';
import { RichTextTokens } from '../RichTextTokens';

export class RichTextStyleTextExpression extends RichTextTextExpression {
  public color: Color;

  public isBold = false;

  public constructor(text: string) {
    super(text.replace(/\[.*?\]/g, ''));
    const color = text.match(/\[c\]\[(\w+)\]/)?.[1];
    if (!color) {
      this.color = Color('#000000');
    } else {
      this.color = Color(`#${color}`)
    }

    if (text.includes(RichTextTokens.boldEnd)) {
      this.isBold = true;
    }
  }

  public toHtml() {
    const span = super.toHtml();
    span.style.color = this.color.toString();
    if (this.isBold) {
      span.style.fontWeight = 'bold';
    }
    return span;
  }
}
