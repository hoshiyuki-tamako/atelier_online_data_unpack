import i18n from '@/i18n';

import { RichTextExpression } from './RichTextExpression';

export class RichTextPlayerNameExpression extends RichTextExpression {
  public static defaultPlayerName = `[${i18n.t('プレーヤー名前')}]`;

  public playerName = '';

  public constructor(playerName?: string) {
    super();
    this.playerName = playerName || RichTextPlayerNameExpression.defaultPlayerName;
  }

  public toHtml() {
    const span = document.createElement('span');
    span.textContent = this.playerName;
    return span;
  }
}
