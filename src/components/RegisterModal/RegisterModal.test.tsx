import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RegisterModal from "./RegisterModal";

describe("RegisterModal", () => {
	it("renders RegisterModal", () => {
		const { getByText } = render(<RegisterModal />);

		expect(getByText("RegisterModal Component")).toBeInTheDocument();
	});
});
