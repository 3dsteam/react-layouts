import { render } from "@testing-library/react";
import matchers from "@testing-library/jest-dom";
import { Container } from "../index";

expect.extend(matchers);

let renderResult: ReturnType<typeof render>;

describe("Main", () => {
    beforeEach(() => {
        renderResult = render(<Container data-testid="layout-container" />);
    });

    it("renders correctly with testId", () => {
        expect(renderResult.getByTestId("layout-container")).toBeInTheDocument();
    });

    it("uses layout-container as default className", () => {
        expect(renderResult.getByTestId("layout-container")).toHaveClass("layout-container");
    });
});

describe("FullScreen option", () => {
    beforeEach(() => {
        renderResult = render(<Container data-testid="layout-container" fullScreen />);
    });

    it("uses layout-container-screen as className", () => {
        expect(renderResult.getByTestId("layout-container")).toHaveClass("layout-container-screen");
    });
});

describe("HTML Props", () => {
    it("uses the passed HTML props", () => {
        renderResult = render(
            <Container data-testid="layout-container" id="my-layout-container" className="test-class" />,
        );
        expect(renderResult.getByTestId("layout-container")).toHaveAttribute("id", "my-layout-container");
        expect(renderResult.getByTestId("layout-container")).toHaveClass("test-class");
    });
});
