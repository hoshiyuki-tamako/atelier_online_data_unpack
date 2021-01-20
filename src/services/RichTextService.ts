import { RichTextParser, RichTextParameters } from './richText';

export class RichTextService {
  public richTextParser = new RichTextParser();

  public richTextToHtml(text: string, options?: RichTextParameters) {
    return this.richTextParser.parse(text, options).join('');
  }
}
