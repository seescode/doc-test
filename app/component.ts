import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

/**
 * higgs pagination ftw
 */
@Component({
  selector: 'higgs-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {

  /** Called when previous is clicked */
  @Output() prev : EventEmitter<number> = new EventEmitter<number>();
  @Output() next : EventEmitter<Array<number>> = new EventEmitter<Array<number>>();

  @Input() numberOfPages: number[];
  @Input() currentPage: number;

  constructor() {      
  }

  ngOnInit() {

  }

  /**
   * This does something very random and unimportant.
   */
  someRandomMethod(height: number, url: string, abc: Array<number>) : string {
      return height + url;
  }
}

