import { Link, Table } from "@radix-ui/themes";

import { IssueStatusBadge } from "../../components";

const IssuesTable = ({ issues }) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>#</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Status
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Created At
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues?.map((item, idx) => {
          return (
            <Table.Row key={idx}>
              <Table.Cell>{idx + 1}</Table.Cell>
              <Table.Cell>
                <p className="mb-2 md:mb-0">
                  <Link href={`/issues/${item.id}`}>{item.title}</Link>
                </p>
                <div className="block md:hidden">
                  <IssueStatusBadge
                    status={item.status}
                    classValue={"text-normal"}
                    fontSize="16"
                  />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge
                  status={item.status}
                  classValue={"text-normal"}
                  fontSize="16"
                />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {new Date(item.createdAt).toLocaleString()}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Root>
  );
};

export default IssuesTable;
