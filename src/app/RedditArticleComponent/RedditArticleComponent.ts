import { Component } from '@angular/core';
import { Article } from '../Article/Article';

@Component({
	selector: 'reddit-article',
	inputs: ['article'],
	styleUrls: ['./RedditArticleComponent.css'],
	host: {
		class: 'row'
	},
	templateUrl: './RedditArticleComponent.html'
})

export class RedditArticleComponent {
	article: Article;

	voteUp(): boolean {
		this.article.voteUp();
		return false;
	}

	voteDown(): boolean {
		this.article.voteDown();
		return false;
	}

}
