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
  @Output() prev = new EventEmitter<number>();
  @Output() next = new EventEmitter<number>();

  @Input() numberOfPages: number[];
  @Input() currentPage: number;

}

