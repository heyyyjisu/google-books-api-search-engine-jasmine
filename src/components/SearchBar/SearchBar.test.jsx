import { describe, expect, vi, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("Should call the function passed into it when the search button is clicked", async () => {
    const user = userEvent.setup();
    // we create the mock function to pass into onSearch
    const fakeSearch = vi.fn(() => {});
    render(<SearchBar onSearch={fakeSearch} />);

    const input = screen.getByRole("textbox");
    await user.type(input, "hello");
    const btn = screen.getByRole("button");

    await user.click(btn);
    screen.debug();
    // console.log(fakeSearch.mock);
    expect(fakeSearch).toHaveBeenCalled();
    expect(fakeSearch).toHaveBeenCalledOnce();
    expect(fakeSearch).toHaveBeenCalledWith("hello");
  });
});
