import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ConfirmationDialog from "./ConfirmationDialog";

describe("ConfirmationDialog", () => {
	it("renders ConfirmationDialog", () => {
		const { getByText } = render(<ConfirmationDialog />);

		expect(getByText("ConfirmationDialog Component")).toBeInTheDocument();
	});
});
