import { Badge } from "@radix-ui/themes";

const IssueStatusBadge = ({
  status,
  classValue = "text-normal",
  fontSize = "16",
}) => {
  const map = {
    OPEN: {
      label: "Open",
      color: "red",
    },
    CLOSED: {
      label: "Closed",
      color: "green",
    },
    IN_PROGRESS: {
      label: "In Progress",
      color: "violet",
    },
  };

  return (
    <Badge color={map[status]?.color}>
      <span className={`${classValue} `}>{map[status]?.label}</span>
    </Badge>
  );
};

export default IssueStatusBadge;
