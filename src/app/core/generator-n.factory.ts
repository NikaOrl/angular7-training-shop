import { InjectionToken } from '@angular/core';

export const GeneratorService = new InjectionToken<any[]>('GeneratorService');
export function GeneratorNFactory(n: number) {
  return function(): any[] {
    const text = [];
    const possible = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < n; i++) {
      text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
    }
    return text;
  };
}
