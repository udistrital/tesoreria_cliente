import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class TranslateFormItemsService {
  constructor(private translate: TranslateService) {}

  public translateItemTableConfiguration(item): any {
    if (
      typeof item === "object" &&
      (item.label_i18n || (item.label_i18n_name && item.label_i18n_title))
    ) {
      item.title = item.label_i18n_title
        ? this.translate.instant(item.label_i18n_title)
        : this.translate.instant(item.label_i18n);
      item.name = item.label_i18n_name
        ? this.translate.instant(item.label_i18n_name)
        : this.translate.instant(item.label_i18n);
      item.text = item.label_i18n
        ? this.translate.instant(item.label_i18n)
        : this.translate.instant(item.label_i18n_name);
    } else if (typeof item === "object") {
      for (const config of Object.keys(item)) {
        this.translateItemTableConfiguration(item[config]);
      }
    }

    return item;
  }
}
