import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectModal from "./ProjectModal";

describe("ProjectModal", () => {
	it("renders ProjectModal", () => {
		const { getByText } = render(<ProjectModal open onClose={() => ({})} />);

		expect(getByText("ProjectModal Component")).toBeInTheDocument();
	});
});
