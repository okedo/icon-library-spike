import { Injectable } from '@angular/core';
import { WqIconModel } from './wq-icon.model';

@Injectable({
  providedIn: 'root'
})
export class WqIconsService {
  private registry = new Map<string, string>();

  public registerIcons(icons: WqIconModel[]): void {
    icons.forEach((icon: WqIconModel) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`We could not find Icon with the name ${iconName}, did you add it to the Icon registry?`);
    }
    return this.registry.get(iconName);
  }
}
