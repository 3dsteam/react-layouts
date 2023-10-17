import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import MyButton from "../MyButton";

expect.extend(matchers);

describe("MyButton", () => {
    it("renders button component", () => {
        const { getByTestId } = render(<MyButton text="Click me!" onClick={vi.fn} />);
        expect(getByTestId("my-button")).toBeInTheDocument();
    });

    it("renders button text", () => {
        const { getByTestId } = render(<MyButton text="Click me!" onClick={vi.fn} />);
        expect(getByTestId("my-button")).toHaveTextContent("Click me!");
    });

    it("calls onClick when clicked", () => {
        const onClick = vi.fn();
        const { getByTestId } = render(<MyButton text="Click me!" onClick={onClick} />);
        getByTestId("my-button").click();
        expect(onClick).toHaveBeenCalled();
    });
});
