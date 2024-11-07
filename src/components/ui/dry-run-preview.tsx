import { ImagePreview } from '@/components/ui/image-preview';
import { useDryRun } from '@/hooks/use-dry-run';
import { Box, Button, Flex, Grid, Input } from '@chakra-ui/react';
import { useState } from 'react';

export const DryRunPreview = () => {
  const [ean, setEan] = useState<string>('50000112651331');
  const [trigger, status, data] = useDryRun();

  return (
    <Grid gap={4}>
      <section>
        <Button variant="outline" onClick={() => setEan('5000112651331')}>
          Coca-Cola
        </Button>
        <Button variant="outline" onClick={() => setEan('5901520000172')}>
          Muszynianka 1,0l
        </Button>
        <Button variant="outline" onClick={() => setEan('5900541011853')}>
          Żywiec 1,2l
        </Button>

        <Flex>
          <Input
            placeholder="EAN"
            value={ean}
            onChange={(e) => setEan(e.target.value)}
            width={'90%'}
            marginEnd={'auto'}
          />
          <Button variant="outline" onClick={() => trigger(ean)}>
            Test
          </Button>
        </Flex>
        <Box border="2px solid">
          <>
            {status === 'LOADING' && <p>Loading...</p>}
            {status === 'IDLE' && (
              <ImagePreview image={data.image} mse={data.mse} />
            )}
          </>
        </Box>
      </section>
    </Grid>
  );
};
