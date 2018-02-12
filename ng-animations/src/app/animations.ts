import {animate, state, style, transition, trigger} from "@angular/animations";

export const clickedStateTriger =  trigger('clickedState', [
    state('default', style({
      backgroundColor: 'orange',
      width: '100px',
      height: '100px'
    })),
    state('clicked', style({
      backgroundColor: 'blue',
      width: '300px',
      height: '50px'
    })),
    state('mousedown', style({
      backgroundColor: 'red',
      border: '1px solid black',
      width: '100px',
      height: '100px'
    })),
    transition('default => clicked', animate('900ms 500ms ease-in')),
    transition('clicked => default', animate(900)),
    transition('mousedown <=> clicked', animate(400))
  ]);

export const numberEnteredTriger = trigger('enteredState', [
  state('unselected', style({
    border: '1px solid black',
    padding: '5px'
  })),
  state('selected', style({
    border: '2px solid blue',
    padding: '4px',
    backgroundColor: 'lightblue',
  })),
  transition('unselected => selected', [
    style({
      border: '2px solid black',
      padding: '4px',
      transform: 'scale(1)'
    }),
    animate('600ms 100ms ease-out', style({
      backgroundColor: 'red',
      transform: 'scale(1.05)'
    })),
    animate(300)
  ])
]);
