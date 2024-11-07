import { StatLabel, StatRoot, StatValueText } from "@chakra-ui/react";

import type { FunctionComponent } from "react";

export interface ImagePreviewProps {
  image: string | null;
  mse?: number;
}

export const ImagePreview: FunctionComponent<ImagePreviewProps> = ({
  image,
  mse,
}) => {
  return (
    <>
      {mse != null && (
        <StatRoot>
          <StatLabel>MSE</StatLabel>
          <StatValueText>{`${mse}`}</StatValueText>
        </StatRoot>
      )}
      {image && (
        <img
          src={`${image}`}
          alt="test"
          style={{ maxWidth: "600px", maxHeight: "600px" }}
        />
      )}
    </>
  );
};
