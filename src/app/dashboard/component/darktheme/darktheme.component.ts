import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-darktheme',
  templateUrl: './darktheme.component.html',
  styleUrls: ['./darktheme.component.css'],
})
export class DarkthemeComponent implements OnInit {
  setdaktheme: boolean = false;
  @Output() darkMode = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  /** 
   * @Name changeThemeMode
   * @Description changeThemeMode method for set theme true or false for toggled
   * @Author Dharmesh
   * @createdAt 19/12/2022
   * @updatedAt 19/12/2022
   */
  chnageThemeMode() {
    this.setdaktheme = !this.setdaktheme;
    this.darkMode.emit(this.setdaktheme);
    console.log('dark theme value from child', this.setdaktheme);
  }
}
