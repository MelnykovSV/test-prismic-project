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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={s.wrapper}
      style={{
        "--columns": slice.primary.columns,
        "--alignTitle": slice.primary.align_title,
        "--alignTitleMobile": slice.primary.align_title,
        "--alignSubtitle": slice.primary.align_title,
        "--alignSubtitleMobile": slice.primary.align_title,
        "--alignText": slice.primary.align_title,
        "--alignTextMobile": slice.primary.align_title,
      }}>
      <div className={s.container}>
        {slice.primary.title && (
          <h2 className={s.title}>{slice.primary.title}</h2>
        )}
        {slice.primary.subtitle && (
          <p className={s.subtitle}>{slice.primary.subtitle}</p>
        )}
        {slice.primary.text && (
          <div className={s.text}>
            <PrismicRichText field={slice.primary.text} />
          </div>
        )}

        {slice.primary.cards.length && (
          <ul className={s.cardsList}>
            {/* <p>{JSON.stringify(slice.primary.cards[0])}</p> */}
            {slice.primary.cards.map((item: any, i: any) => (
              // Render the item
              <li key={i}>
                <h3 className={s.cardTitle}>{item.title}</h3>
                <PrismicRichText field={item.text} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CardsSlice;
