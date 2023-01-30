import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myText = 'サメハックです！';

  /**
   * 入力欄が更新されるたびに呼び出される
   * eventとしてmyTextの値が渡される
   */
  onChangeText(event: string) {
    console.log(event);
  }
}
