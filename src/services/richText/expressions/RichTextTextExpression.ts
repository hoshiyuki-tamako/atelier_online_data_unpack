import { RichTextExpression } from './RichTextExpression';

export class RichTextTextExpression extends RichTextExpression {
  public text: string;

  public constructor(text: string) {
    super();
    this.text = text;
  }

  public toHtml() {
    const span = document.createElement('span');
    span.textContent = this.text;
    return span;
  }
}
