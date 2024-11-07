import { StatLabel, StatRoot, StatValueText } from '@chakra-ui/react';

import type { FunctionComponent } from 'react';

export interface ImagePreviewProps {
  image: string | null;
  mse: number;
}

export const ImagePreview: FunctionComponent<ImagePreviewProps> = ({
  image,
  mse,
}) => {
  return (
    <>
      <StatRoot>
        <StatLabel>MSE</StatLabel>
        <StatValueText>{`${mse}`}</StatValueText>
      </StatRoot>
      {image && <img src={`${image}`} alt="test" />}
    </>
  );
};
