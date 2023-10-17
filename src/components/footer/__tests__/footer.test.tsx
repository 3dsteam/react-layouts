import { render } from "@testing-library/react";
import matchers from "@testing-library/jest-dom";
import Footer from "../footer";

expect.extend(matchers);

let renderResult: ReturnType<typeof render>;

describe("Main", () => {
    beforeEach(() => {
        renderResult = render(<Footer data-testid="layout-footer" />);
    });

    it("renders correctly with testId", () => {
        expect(renderResult.getByTestId("layout-footer")).toBeInTheDocument();
    });

    it("uses layout-footer as default className", () => {
        expect(renderResult.getByTestId("layout-footer")).toHaveClass("layout-footer");
    });
});

describe("HTML Props", () => {
    it("uses the passed HTML props", () => {
        renderResult = render(<Footer data-testid="layout-footer" id="my-layout-footer" className="test-class" />);
        expect(renderResult.getByTestId("layout-footer")).toHaveAttribute("id", "my-layout-footer");
        expect(renderResult.getByTestId("layout-footer")).toHaveClass("test-class");
    });
});
