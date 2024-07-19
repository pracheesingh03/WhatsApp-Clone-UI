import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "whatsApp_Clone";
  conversation: any;
  onConversationSelected(conv: any) {
    this.conversation = conv;
  }
}
