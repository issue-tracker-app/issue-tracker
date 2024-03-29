import { Table } from "@radix-ui/themes";
import { Skeleton } from "../components";
import IssueActions from "./_components/IssueActions";


const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
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
          {issues.map((_, idx) => {
            return (
              <Table.Row key={idx}>
                <Table.Cell>
                  <Skeleton />
                  <div className="block md:hidden">
                    <Skeleton />
                  </div>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default LoadingIssuesPage;
