import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppModule } from '../app.module';


// interface conversation {
//   name: string;
//   time: string;
//   latestMessage: string;
//   latestmessageRead: boolean;
// }
interface messages {
  me: boolean;
  body: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  searchText: any;
  conversations: any = [
    {
      name: 'David',
      time: '8:21AM',
      latestMessage: 'Good Morning!',
      latestmessageRead: true,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: false },
        { id: 2, body: 'how are you', time: '8:21AM', me: true },
        { id: 3, body: 'Good Morning!', time: '8:21AM', me: false },
      ]
    },
    {
      name: 'Emma',
      time: '9:45AM',
      latestMessage: 'How are you today?',
      latestmessageRead: false,
      messages: [
        { id: 1, body: 'Good morning', time: '8:21AM', me: true },
        { id: 2, body: 'hi, good morning!', time: '8:21AM', me: false },
        { id: 3, body: 'How are you today?', time: '8:21AM', me: true },
      ]
    },
    {
      name: 'Michael',
      time: '10:15AM',
      latestMessage: 'Did you get my email?',
      latestmessageRead: true,
      messages: [
        { id: 1, body: 'hi are you there?', time: '8:21AM', me: false },
        { id: 2, body: 'oh, yes! hello', time: '8:21AM', me: true },
        { id: 3, body: 'Did you get my email?', time: '8:21AM', me: false },
      ]
    },
    {
      name: 'Sophia',
      time: '11:30AM',
      latestMessage: 'Let\'s meet for lunch.',
      latestmessageRead: false,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: false },
        { id: 2, body: 'hello', time: '8:21AM', me: true },
        { id: 3, body: 'hello', time: '8:21AM', me: false },
      ]
    },
    {
      name: 'James',
      time: '1:00PM',
      latestMessage: 'Just finished the presentation.',
      latestmessageRead: true,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: true },
        { id: 2, body: 'hello', time: '8:21AM', me: false },
        { id: 3, body: 'hello', time: '8:21AM', me: true },
      ]
    },
    {
      name: 'Olivia',
      time: '2:20PM',
      latestMessage: 'Can you send me the report?',
      latestmessageRead: false,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: false },
        { id: 2, body: 'hello', time: '8:21AM', me: true },
        { id: 3, body: 'hello', time: '8:21AM', me: false },
      ]
    },
    {
      name: 'William',
      time: '3:45PM',
      latestMessage: 'Are we still on for tomorrow?',
      latestmessageRead: true,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: true },
        { id: 2, body: 'hello', time: '8:21AM', me: false },
        { id: 3, body: 'hello', time: '8:21AM', me: true },
      ]
    },
    {
      name: 'Ava',
      time: '4:55PM',
      latestMessage: 'Thanks for your help today!',
      latestmessageRead: false,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: true },
        { id: 2, body: 'hello', time: '8:21AM', me: false },
        { id: 3, body: 'hello', time: '8:21AM', me: true },
      ]
    },
    {
      name: 'Alexander',
      time: '5:30PM',
      latestMessage: 'Got the files you needed.',
      latestmessageRead: false,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: false },
        { id: 2, body: 'hello', time: '8:21AM', me: true },
        { id: 3, body: 'hello', time: '8:21AM', me: false },
      ]
    },
    {
      name: 'Mia',
      time: '6:15PM',
      latestMessage: 'Heading out now. See you tomorrow!',
      latestmessageRead: false,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: true },
        { id: 2, body: 'hello', time: '8:21AM', me: false },
        { id: 3, body: 'hello', time: '8:21AM', me: true },
      ]
    },
    {
      name: 'Benjamin',
      time: '7:00PM',
      latestMessage: 'Let\'s discuss the project details.',
      latestmessageRead: false,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: false },
        { id: 2, body: 'hello', time: '8:21AM', me: true },
        { id: 3, body: 'hello', time: '8:21AM', me: false },
      ]
    },
    {
      name: 'Charlotte',
      time: '8:10PM',
      latestMessage: 'Could you call me when you\'re free?',
      latestmessageRead: false,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: true },
        { id: 2, body: 'hello', time: '8:21AM', me: false },
        { id: 3, body: 'hello', time: '8:21AM', me: true },
      ]
    },
    {
      name: 'Daniel',
      time: '9:25PM',
      latestMessage: 'Check out the latest update.',
      latestmessageRead: false,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: false },
        { id: 2, body: 'hello', time: '8:21AM', me: true },
        { id: 3, body: 'hello', time: '8:21AM', me: false },
      ]
    },
    {
      name: 'Emily',
      time: '10:00PM',
      latestMessage: 'I\'ll send you the document in the morning.',
      latestmessageRead: false,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: true },
        { id: 2, body: 'hello', time: '8:21AM', me: false },
        { id: 3, body: 'hello', time: '8:21AM', me: true },
      ]
    },
    {
      name: 'Ethan',
      time: '11:20PM',
      latestMessage: 'Just got home. Long day!',
      latestmessageRead: false,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: false },
        { id: 2, body: 'hello', time: '8:21AM', me: true },
        { id: 3, body: 'hello', time: '8:21AM', me: false },
      ]
    },
    {
      name: 'Isabella',
      time: '12:05AM',
      latestMessage: 'Did you see my message from earlier?',
      latestmessageRead: true,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: true },
        { id: 2, body: 'hello', time: '8:21AM', me: false },
        { id: 3, body: 'hello', time: '8:21AM', me: true },
      ]
    },
    {
      name: 'Jacob',
      time: '1:30AM',
      latestMessage: 'Can we reschedule the meeting?',
      latestmessageRead: false,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: false },
        { id: 2, body: 'hello', time: '8:21AM', me: true },
        { id: 3, body: 'hello', time: '8:21AM', me: false },
      ]
    },
    {
      name: 'Madison',
      time: '2:45AM',
      latestMessage: 'I need your input on this project.',
      latestmessageRead: true,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: true },
        { id: 2, body: 'hello', time: '8:21AM', me: false },
        { id: 3, body: 'hello', time: '8:21AM', me: true },
      ]
    },
    {
      name: 'Liam',
      time: '3:55AM',
      latestMessage: 'Sorry for the late response.',
      latestmessageRead: false,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: false },
        { id: 2, body: 'hello', time: '8:21AM', me: true },
        { id: 3, body: 'hello', time: '8:21AM', me: false },
      ]
    },
    {
      name: 'Abigail',
      time: '4:40AM',
      latestMessage: 'Just woke up. What\'s up?',
      latestmessageRead: true,
      messages: [
        { id: 1, body: 'hello', time: '8:21AM', me: true },
        { id: 2, body: 'hello', time: '8:21AM', me: false },
        { id: 3, body: 'hello', time: '8:21AM', me: true },
      ]
    }

  ]
  get filteredConversation() {
    return this.conversations.filter((conversation: any) => {
      return conversation.name.includes(this.searchText);
    })
  }
}
