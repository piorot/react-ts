import { DryRunPreview } from "@/components/ui/dry-run-preview";
import { Grid } from "@chakra-ui/react";

const Test = () => {
  return (
    <Grid gap={4}>
      <section>
        <DryRunPreview />
      </section>
    </Grid>
  );
};

export default Test;
