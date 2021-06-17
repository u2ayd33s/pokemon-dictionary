import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {
  japanese: any = {
    Grass:'草',
    Poison:'毒',
    Water:'水',
    Bug:'虫',
    Flying:'飛行',
    Fire:'火',
    Fighting:'攻撃',
    Electric:'電気',
    Ice:'氷',
    Steel:'鋼',
    Rock:'岩',
    Ground:'地面',
    Psychic:'能力',
    Fairy:'妖精',
    Dark:'闇',
    Ghost:'妖怪',
    Dragon:'竜',
    Normal:'ノーマル'
  }

  transform(types: string[], ...args:any[]): any {
    return types.map(type => this.japanese[type] || type);
  }

}
