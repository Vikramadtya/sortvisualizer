import BubbleSort from "./Sorts/BubbleSort";
import { Sorts } from "./Utility";

const SortFactory = (sort) => {
  switch (sort) {
    case Sorts.BUBBLESORT:
      return new BubbleSort();
  }
};

export default SortFactory;
