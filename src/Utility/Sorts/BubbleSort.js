import { StateQueue, Sorter } from "../Utility";

class BubbleSort extends Sorter {
  // static name = "Bubble Sort";
  constructor() {
    super();
    this.stateQueue = new StateQueue({
      SORTED: "sortedIndices",
      COMPARING: "toBeComparedIndices",
      SWAPPING: "toBeSwapedIndices",
    });
    this.sorter = this.bubbleSort;
  }

  bubbleSort(array) {
    for (let i = 0; i < array.length; ++i) {
      this.captureStateHolding(array);
      for (let j = 0; j < array.length - 1; ++j) {
        this.captureStateComparing(array, j, j + 1);
        if (this.comparator(array[j], array[j + 1])) {
          this.captureStateSwapping(array, j, j + 1);
          this.swap(array, j, j + 1);
        }
      }
      this.sortedIndices.push(array.length - 1 - i);
    }
    this.sortedIndices.push(array.length - 1);
  }
}

export default BubbleSort;
