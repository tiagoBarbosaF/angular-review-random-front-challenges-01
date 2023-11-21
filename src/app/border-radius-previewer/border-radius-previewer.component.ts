import {Component, OnInit, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-border-radius-previewer',
  templateUrl: './border-radius-previewer.component.html',
  styleUrls: ['./border-radius-previewer.component.css']
})
export class BorderRadiusPreviewerComponent implements OnInit {

  valueInputTopLeft: number = 0;
  valueInputTopRight: number = 0;
  valueInputBottomLeft: number = 0;
  valueInputBottomRight: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  updateStyles(): void {
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.square'),
      'border-top-left-radius',
      `${this.valueInputTopLeft}px`
    );
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.square'),
      'border-top-right-radius',
      `${this.valueInputTopRight}px`
    );
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.square'),
      'border-bottom-left-radius',
      `${this.valueInputBottomLeft}px`
    );
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.square'),
      'border-bottom-right-radius',
      `${this.valueInputBottomRight}px`
    );
  }
}
