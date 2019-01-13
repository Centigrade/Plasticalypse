import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'pf-cleaness-image',
  templateUrl: './cleaness-image.component.html',
  styleUrls: ['./cleaness-image.component.scss'],
})
export class CleanessImageComponent implements OnChanges {
  @Input() percentage: number = 0;

  public clippingPath: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.percentage);
    this.clippingPath = this.clipPath(this.percentage);
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
