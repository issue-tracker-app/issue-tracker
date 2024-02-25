import { Skeleton } from "../../components";
import { Box, Card, Flex, Grid } from "@radix-ui/themes";

const LoadingIssueDetails = () => {
  return (
    <>
      <Grid columns={{ initial: "1", md: "2" }} gap="4">
        <Box>
          <Skeleton />
          <Flex className="space-x-4" align="center">
            <Skeleton width="5rem" />
            <Skeleton width="8rem" />
          </Flex>
          <Card className="max-w-4xl mt-8 py-4">
            <div>
              <Skeleton count={3} />
            </div>
          </Card>
        </Box>
        <Box>
          <Skeleton width="4rem" />
        </Box>
      </Grid>
    </>
  );
};

export default LoadingIssueDetails;
