import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import s from "./CardsSlice.module.scss";

/**
 * Props for `CardsSlice`.
 */
export type CardsSliceProps = SliceComponentProps<Content.CardsSliceSlice>;

/**
 * Component for "CardsSlice" Slices.
 */
const CardsSlice = ({ slice }: any): JSX.Element => {
  console.log("slice");
  console.log(slice);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={s.wrapper}>
      <div className={s.container}>
        <h2>{slice.primary.title}</h2>
        <p>{slice.primary.subtitle}</p>
        <PrismicRichText field={slice.primary.text} />
      </div>

      <ul>
        {/* <p>{JSON.stringify(slice.primary.cards[0])}</p> */}
        {slice.primary.cards.map((item: any) => {
          // Render the item
          <li>
            <p>{JSON.stringify(item)}</p>
            <h3>{item.title}</h3>
            <PrismicRichText field={item.text} />
          </li>;
        })}
      </ul>
    </section>
  );
};

export default CardsSlice;
