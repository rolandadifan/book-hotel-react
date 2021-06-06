import moduleName from "module";
import { render } from "@testing-library/react";
import Button from "./index";

test("Should not allowed click button disable is disable is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disable")).toBeInTheDocument();
});
