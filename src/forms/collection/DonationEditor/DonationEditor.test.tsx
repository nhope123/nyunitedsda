import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DonationEditor from "./DonationEditor";

describe("DonationEditor", () => {
	it("renders DonationEditor", () => {
		const { getByText } = render(<DonationEditor />);

		expect(getByText("DonationEditor Component")).toBeInTheDocument();
	});
});
