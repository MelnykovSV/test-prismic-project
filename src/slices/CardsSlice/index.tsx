import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CardsSlice`.
 */
export type CardsSliceProps = SliceComponentProps<Content.CardsSliceSlice>;

/**
 * Component for "CardsSlice" Slices.
 */
const CardsSlice = ({ slice }: CardsSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cards_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CardsSlice;
