import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TestSlice1`.
 */
export type TestSlice1Props = SliceComponentProps<Content.TestSlice1Slice>;

/**
 * Component for "TestSlice1" Slices.
 */
const TestSlice1 = ({ slice }: TestSlice1Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for test_slice1 (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TestSlice1;
