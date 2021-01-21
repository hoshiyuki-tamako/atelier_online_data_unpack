export class RichTextExpression {
  public toHtml() {
    return document.createElement('span');
  }

  public toString() {
    return this.toHtml().outerHTML;
  }
}
