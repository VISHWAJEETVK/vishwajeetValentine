import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('audioPlayer', { static: false })
  audioPlayer!: ElementRef;

  isBackgroundMusicPlaying = false;
  constructor(private renderer: Renderer2) {}
  title = 'ValentinesApp';
  NoButtonNames = ['No', 'Are you sure?', 'Really sure?', 'Think again!', 'Last chance!','Surely not?','You might regret this!','Give it another thought!','This could be a mistake!','Dont be so cold!','Change of heart?'
,'Wouldn`t you reconsider?','Is that your final answer?','You`re breaking my heart ;('];
  currentIndex = 0;
  buttonHeight = 34; // Initial height
  buttonWidth = 54; // Initial width
  yesPressed: boolean | undefined;

  toggleBackgroundMusic(): void {
    const audio: HTMLAudioElement = this.audioPlayer.nativeElement;
      audio.play();
    this.isBackgroundMusicPlaying = !this.isBackgroundMusicPlaying;
  }
  
  changeButtonText(): void {
    if (this.currentIndex < this.NoButtonNames.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }

    // Increase height and width by 10px on each click
    this.buttonHeight += 10;
    this.buttonWidth += 10;
    this.yesPressed = false;
  }

  yayy():void{
this.yesPressed = true;
this.buttonHeight = 34; // Initial height
this.buttonWidth = 50; // Initial width
this.currentIndex = 0;
  }
}
