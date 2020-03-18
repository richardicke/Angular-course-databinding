import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  // this is not assigning a value, it is setting the type!!!!
  // Add decorator `@Input` to make parent be able to bind to it.
  // Add outside facing alias `servElement`
  @Input('servElement') element: {
    type: string,
    name: string, 
    content: string
  }

  constructor() { 
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

}
