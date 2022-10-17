import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  classList = ''
  @Input() isDark = false
  languageSelector = new FormControl(this.translateService.currentLang)
  subs!: Subscription;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.classList = 'menu_scroll_v1'
    } else if (number === 0) {
      this.classList = ''
    }

  }

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

}
