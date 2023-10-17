import { render } from "@testing-library/react";
import matchers from "@testing-library/jest-dom";
import Header from "../header";

expect.extend(matchers);

let renderResult: ReturnType<typeof render>;

describe("Main", () => {
    beforeEach(() => {
        renderResult = render(<Header data-testid="layout-header" />);
    });

    it("renders correctly with testId", () => {
        expect(renderResult.getByTestId("layout-header")).toBeInTheDocument();
    });

    it("uses layout-header as default className", () => {
        expect(renderResult.getByTestId("layout-header")).toHaveClass("layout-header");
    });
});

describe("HTML Props", () => {
    it("uses the passed HTML props", () => {
        renderResult = render(<Header data-testid="layout-header" id="my-layout-header" className="test-class" />);
        expect(renderResult.getByTestId("layout-header")).toHaveAttribute("id", "my-layout-header");
        expect(renderResult.getByTestId("layout-header")).toHaveClass("test-class");
    });
});
