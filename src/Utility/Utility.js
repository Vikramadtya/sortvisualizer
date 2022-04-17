export function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export const colorMap = {
  SORTED: "#4cd137",
  COMPARING: "#fbc531",
  SWAPPING: "#e84118",
};

export const Sorts = {
  BUBBLESORT: 1,
  QUICKSORT: 2,
  MERGESORT: 3,
};

export const urlToSortsMap = {
  bubbleSort: "BUBBLE_SORT",
};

Object.freeze(Sorts);

export const addToArrayStateHolder = (traceQueue, newTrace) => {
  return traceQueue.push(newTrace);
};

export const getFromArrayState = (trace, key) => {
  return trace[key];
};

export class StateQueue {
  constructor(keys) {
    this.keys = keys;
    this.states = [];
  }

  addState(state) {
    this.states.push(state);
  }
}

export class State {
  constructor(action, currentArrayState, sortedIndices = []) {
    this.action = action;
    this.currentArrayState = [...currentArrayState];
    this.sortedIndices = [...sortedIndices];
  }

  addTheSortedIndices(sortedIndices = []) {
    this.sortedIndices = [...sortedIndices];
  }

  addTheToBeSwapedIndices(toBeSwapedIndices = []) {
    this.toBeSwapedIndices = [...toBeSwapedIndices];
  }

  addTheToBeComparedIndices(toBeComparedIndices = []) {
    this.toBeComparedIndices = [...toBeComparedIndices];
  }
}

export class Sorter {
  constructor() {
    this.stateQueue = null;
    this.comparator = this.integerComparator;
    this.sortedIndices = [];
    this.sorter = null;
  }
  integerComparator(object_1, object_2) {
    return object_1 > object_2;
  }
  swap(array, index_1, index_2) {
    [array[index_1], array[index_2]] = [array[index_2], array[index_1]];
  }
  sort(array) {
    this.sorter(array);
    return this.stateQueue;
  }

  addState(state) {
    this.stateQueue.addState(state);
  }
  captureStateComparing(array, i, j) {
    let state = new State("COMPARING", array, this.sortedIndices);
    state.addTheToBeComparedIndices([i, j]);
    this.addState(state);
    // this.stateQueue.addState({
    //   action: "COMPARING",
    //   state: createNewArrayState(array, this.sortedIndices, [], [i, j]),
    // });
  }

  captureStateSwapping(array, i, j) {
    let state = new State("SWAPPING", array, this.sortedIndices);
    state.addTheToBeSwapedIndices([i, j]);
    this.addState(state);

    // this.stateQueue.addState({
    //   action: "SWAPPING",
    //   state: createNewArrayState(array, this.sortedIndices, [i, j], []),
    // });
  }

  captureStateHolding(array) {
    let state = new State("HOLDING", array, this.sortedIndices);
    this.addState(state);

    // this.stateQueue.addState({
    //   action: "HOLDING",
    //   state: createNewArrayState(array, this.sortedIndices, [], []),
    // });
  }
}
