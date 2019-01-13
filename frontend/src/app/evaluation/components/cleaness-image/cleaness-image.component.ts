import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'pf-cleaness-image',
  templateUrl: './cleaness-image.component.html',
  styleUrls: ['./cleaness-image.component.scss'],
})
export class CleanessImageComponent {
  @Input() percentage: number = 0;

  public clippingPath: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {
    this.clippingPath = this.clipPath(this.percentage);
    const func = value => {
      this.percentage = value;
      this.clippingPath = this.clipPath(this.percentage);
    };

    setTimeout(() => func(35), 1000);
    setTimeout(() => func(45), 2000);
    setTimeout(() => func(55), 3000);
    setTimeout(() => func(65), 4000);
    setTimeout(() => func(75), 5000);
    setTimeout(() => func(100), 5000);
  }

  public clipPath(percentage: number) {
    return this.sanitizer.bypassSecurityTrustStyle(
      `
      clip-path: inset(0 0 0 ${100 - percentage + 1}vw);
      -webkit-clip-path: inset(0 0 0 ${100 - percentage + 1}vw);
      mask-position: ${100 - percentage}vw 0;
      -webkit-mask-position: ${100 - percentage}vw 0;
      `,
    );
  }
}
