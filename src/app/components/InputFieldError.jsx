import { Callout, Text } from "@radix-ui/themes";
import { MdError } from "react-icons/md";

const InputFieldError = ({ message }) => {
  return (
    <>
      <Callout.Root size={"1"} color="red" role="alert">
        <Callout.Icon>
          <MdError />
        </Callout.Icon>
        <Callout.Text>
          <Text color="red" as="span" className="text-sm">
            {message}
          </Text>
        </Callout.Text>
      </Callout.Root>
    </>
  );
};

export default InputFieldError;
