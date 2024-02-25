"use client";

import { useFetchIssue } from "../../api/issue.api";
import { Box, Grid } from "@radix-ui/themes";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import LoadingIssueDetails from "./loading";

const IssueDetailPage = ({ params }) => {
  const { data: issue, error, isFetching } = useFetchIssue({ id: params.id });
  if (isFetching) return <LoadingIssueDetails />;
  return (
    <div>
      <Grid columns={{ initial: "1", md: "2" }} gap="4">
        <Box>
          <IssueDetails issue={issue} />
        </Box>
        <Box>
          <EditIssueButton issueId={issue?.id} />
        </Box>
      </Grid>
    </div>
  );
};

export default IssueDetailPage;
