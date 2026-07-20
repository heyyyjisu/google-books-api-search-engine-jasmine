import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BookCard from "./BookCard";

describe("BookCard", () => {
  it("Should render", () => {
    render(
      <BookCard
        title="Test card"
        subtitle="some content"
        authors="test author"
        cat="test categories"
        pubDate="test date"
        imgLink="test link"
        avgRating="test average rating"
      />,
    );
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
  });

  it("Should render correct content based on props", () => {
    render(<BookCard title="Test card" subtitle="some content" />);
    // regular expression is case insensitive
    const heading = screen.getByText(/test card/i);
    expect(heading).toBeInTheDocument();
    // shows that paragraph is rendered by default
    const para = screen.queryByText(/Some content/i);
    expect(para).toBeInTheDocument();
  });
});
