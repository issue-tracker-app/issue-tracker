"use client";

import LoadingIssuesPage from "./loading";
import IssueActions from "./_components/IssueActions";
import IssuesTable from "./_components/IssuesTable";
import { useFetchIssuesList } from "../api/issue.api";

const IssuesPage = () => {
  const { data: issues, error, isFetching } = useFetchIssuesList();
  if (isFetching) return <LoadingIssuesPage />;
  return (
    <div>
      <IssueActions />
      <IssuesTable issues={issues} />
    </div>
  );
};

export default IssuesPage;
