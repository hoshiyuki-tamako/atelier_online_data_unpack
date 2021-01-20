import { RichTextExpression } from './RichTextExpression';

export class RichTextNewLineExpression extends RichTextExpression {
  public toHtml() {
    return document.createElement('span');
  }
}
