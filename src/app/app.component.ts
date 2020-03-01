import {Component} from '@angular/core';
import {Article} from 'src/app/interface/article.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTitle: string;
  newURL: string;
  showAddForm = false;
  articles: Article[] = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40',
      hide: true
    },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html',
      hide: true
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7',
      hide: true
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/',
      hide: true
    }
  ];
  btnName = 'Edit';

  toggleHidden(index: number) {
    this.articles[index].hide = !this.articles[index].hide;
    if (this.articles[index].hide) {
      this.btnName = 'Edit';
    } else {
      this.btnName = 'Save';
    }
  }

  addArticle() {
    this.articles.unshift({
      title: this.newTitle,
      url: this.newURL,
      hide: true
    });
    this.newTitle = '';
    this.newURL = '';
    this.showAddForm = false;
  }

  deleteArticle(index) {
    // @ts-ignore
    this.articles.splice(index, 1);
  }
}
