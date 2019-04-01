import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progressBarType = '2';
  progressBar1 = 80;
  progressBar2 = 50;
  progressBar3 = 75;
  progressBarClassOriginal  = 'progress-bar progress-bar-striped';
  progressBarClass1 = this.progressBarClassOriginal;
  progressBarClass2 = this.progressBarClassOriginal;
  progressBarClass3 = this.progressBarClassOriginal;
  title = 'projectbar';
  limit = 210;
  setProgress(a) {
    /*Progress Bar 1 settings*/
    if (this.progressBarType === '1') {
      if (this.progressBar1 + a < 0 ) {
        return;
      }
      if ((this.progressBar1 + a) > this.limit ) {
        this.progressBar1 = this.limit;
      }

      this.progressBarClass1 = this.setProgressBarClass(this.progressBar1, a);

      this.progressBar1 = this.progressBar1 + a;
    }

    /*Progress Bar 2 settings*/
    if (this.progressBarType === '2') {
      if (this.progressBar2 + a < 0 ) {
        return;
      }
      if ((this.progressBar2 + a) > this.limit ) {
        this.progressBar2 = this.limit;
      }
      this.progressBarClass2 = this.setProgressBarClass(this.progressBar2, a);
      this.progressBar2 = this.progressBar2 + a;
    }
    /*Progress Bar 3 settings*/
    if (this.progressBarType === '3') {
      if (this.progressBar3 + a < 0 ) {
        return;
      }
      if ((this.progressBar3 + a) > this.limit ) {
        this.progressBar3 = this.limit;
      }
      this.progressBarClass3 = this.setProgressBarClass(this.progressBar3, a);
      this.progressBar3 = this.progressBar3 + a;
    }
  }

  setProgressBarClass(progressBar, a): any {
    if (progressBar + a > 100) {
      return this.progressBarClassOriginal + ' progress-bar-danger';
    }
    if (progressBar + a <= this.limit) {
      return this.progressBarClassOriginal ;
    }

  }


  setProgressBarLimit(progressBar, a): any {

  }
}
