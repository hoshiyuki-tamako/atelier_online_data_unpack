import sleep from 'sleep-promise';

export type TranslateFunction = (str: string) => string;

export class TranslationQueue {
  public static start(translateFunction: TranslateFunction) {
    return new TranslationQueue(translateFunction);
  }

  public translateFunction: TranslateFunction;

  public queue = false;

  public mutationObserver: MutationObserver;

  public constructor(translateFunction: TranslateFunction) {
    this.translateFunction = translateFunction;
    this.mutationObserver = this.createMutationObserver();
  }

  private createMutationObserver() {
    const mutationObserver = new MutationObserver(async (mutationRecords) => {
      if (this.queue) {
        return;
      }
      this.queue = true;
      for (const mutationRecord of mutationRecords) {
        this.translate([mutationRecord.target, ...mutationRecord.addedNodes] as HTMLElement[]);
      }
      await sleep(0);
      this.queue = false;
    });

    const options = {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    }
    mutationObserver.observe(document.head, options);
    mutationObserver.observe(document.body, options);

    return mutationObserver;
  }

  public translate(nodes: NodeList | HTMLElement[]) {
    for (const node of nodes) {
      if (node.nodeType === node.TEXT_NODE && node.nodeValue) {
        node.nodeValue = this.translateFunction(node.nodeValue);
      }
      if (node.nodeType === node.ATTRIBUTE_NODE && (node as HTMLElement).attributes) {
        for (const attribute of (node as HTMLElement).attributes) {
          if (!['id', 'style', 'class', 'src'].includes(attribute.name) && attribute.value) {
            const newValue = this.translateFunction(attribute.value);
            if (attribute.value !== newValue) {
              attribute.value = newValue;
            }
          }
        }
      }
      if (node.childNodes) {
        this.translate(node.childNodes);
      }
    }
  }
}