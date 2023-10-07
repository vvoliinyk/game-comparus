import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() disabled = false
  @Output() click: EventEmitter<unknown> = new EventEmitter()

  constructor() {}
  
  onClick(data: unknown) {
    this.click.emit(data)
  }
}
