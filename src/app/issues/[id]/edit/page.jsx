"use client";

import dynamic from "next/dynamic";
import { useFetchIssue } from "../../../api/issue.api";

import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("../../_components/IssueForm"), {
  ssr: false,
  loading: () => IssueFormSkeleton,
});

const EditIssuePage = ({ params }) => {
  const { data: issue, error, isFetching } = useFetchIssue(params.id);

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
