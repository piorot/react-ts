import { LivePreview } from "@/components/ui/live-preview";
import { Grid } from "@chakra-ui/react";

const Test = () => {
  return (
    <Grid gap={4}>
      <section>
        <LivePreview />
      </section>
    </Grid>
  );
};

export default Test;
