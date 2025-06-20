import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EntityEditor from "./EntityEditor";

describe("GenericEntityModificationForm", () => {
	it("renders GenericEntityModificationForm", () => {
		const { getByText } = render(<EntityEditor />);

		expect(
			getByText("GenericEntityModificationForm Component"),
		).toBeInTheDocument();
	});
});
