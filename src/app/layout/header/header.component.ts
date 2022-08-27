import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from 'src/app/uxServices/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  switchLang: string = '';

  constructor(
    private _homeService: HomeService,
    public translate: TranslateService
  ) {
    // To subscribe Behaviour Subject
    this._homeService.selectedLang.subscribe(
      (res: string) => (this.switchLang = res)
    );

    // To set defalt language
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {}

  onLanguageChanges(lang: any) {
    console.log(lang);
    this.switchLang = lang;
    this.translate.use(lang);
  }
}
