import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

@Component({
  selector: 'lib-sil-button',
  imports: [CommonModule, UIRouterModule],
  templateUrl: './sil-button.component.html',
  styleUrl: './sil-button.component.css',
})
export class SilButtonComponent {
  @Input() hasLink = false;
  @Input() classList = '';
  @Input() finalState = '';
  @Input() buttonText = '';
  @Output() clickEvent = new EventEmitter();

  handleClick() {
    this.clickEvent.emit();
  }
}
