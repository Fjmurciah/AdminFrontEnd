import { Image } from "@nextui-org/react";
import { GeneralNavbar } from "../../navbar";

export const ImagenesPage = () => {
  const imageComponents = [];

  for (let i = 0; i < 20; i++) {
    const url = "https://picsum.photos/" + (250 + i);
    imageComponents.push(
      <div className="p-1" key={i}>
        <Image
          isZoomed
          width={250}
          height={250}
          alt={`Image ${i}`}
          src={url}
          fallbackSrc="https://via.placeholder.com/250x250"
        />
      </div>
    );
  }

  return (
    <>
      <GeneralNavbar />
      <div className="flex flex-wrap gap-5 justify-between">
        {imageComponents}
      </div>
    </>
  );
};
