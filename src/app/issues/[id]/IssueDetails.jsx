import { IssueStatusBadge } from "../../components";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";

const IssueDetails = ({ issue }) => {
  return (
    <>
      <Heading className="mb-4">{issue?.title}</Heading>
      <Flex className="space-x-4" align="center">
        <IssueStatusBadge
          status={issue?.status}
          classValue="text-lg"
          fontSize="24"
        />
        <Text className="text-sm text-gray-600">
          {new Date(issue?.createdAt).toLocaleString()}
        </Text>
      </Flex>
      <Card className="max-w-4xl mt-8 py-4">
        <div>
          <Text className="max-w-4xl text-md">{issue?.description}</Text>
        </div>
      </Card>
    </>
  );
};

export default IssueDetails;
