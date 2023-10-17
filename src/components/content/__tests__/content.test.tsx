import { render } from "@testing-library/react";
import matchers from "@testing-library/jest-dom";
import Content from "../content";

expect.extend(matchers);

let renderResult: ReturnType<typeof render>;

describe("Main", () => {
    beforeEach(() => {
        renderResult = render(<Content data-testid="layout-content" />);
    });

    it("renders correctly with testId", () => {
        expect(renderResult.getByTestId("layout-content")).toBeInTheDocument();
    });

    it("uses layout-content as default className", () => {
        expect(renderResult.getByTestId("layout-content")).toHaveClass("layout-content");
    });
});

describe("HTML Props", () => {
    it("uses the passed HTML props", () => {
        renderResult = render(<Content data-testid="layout-content" id="my-layout-content" className="test-class" />);
        expect(renderResult.getByTestId("layout-content")).toHaveAttribute("id", "my-layout-content");
        expect(renderResult.getByTestId("layout-content")).toHaveClass("test-class");
    });
});
