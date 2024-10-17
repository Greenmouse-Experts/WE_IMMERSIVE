import { FC } from "react";

interface Props {
  image: string;
  headText: string;
  bodyText: string;
}
const PageBanner: FC<Props> = ({ image, headText, bodyText }) => {
  return (
    <div>
      <div className={`h-[180px] lg:h-[220px] text-white`} style={{background: `url("${image}")`}}>
        <div className="box h-full flex items-center">
          <div>
            <p className="unbound fw-500 text-2xl lg:text-4xl">{headText}</p>
            <p className="mt-3 lg:w-[400px] fs-500">{bodyText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
