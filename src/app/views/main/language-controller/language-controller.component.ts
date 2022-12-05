import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-language-controller',
  templateUrl: './language-controller.component.html',
  styleUrls: ['./language-controller.component.scss']
})
export class LanguageControllerComponent implements OnInit {
  languages = {
    en: 'https://stripe.com/img/flags/gb.png',
    ar: 'https://stripe.com/img/flags/ae.png',
    ru: 'https://stripe.com/img/flags/ru.png'
  }

// @ts-ignore
  currentLang = this.languages[this.translateService.currentLang]

  constructor(public translateService: TranslateService) {
  }

  ngOnInit(): void {
  }

  langChange(lang: string) {
    // @ts-ignore
    this.currentLang = this.languages[lang]
    this.translateService.use(lang)
  }

}
