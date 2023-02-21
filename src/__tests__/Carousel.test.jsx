import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Carousel from "../Carousel";

test("let users to click on thumbnail to make the image hero", async () => {
  const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
  const carousel = render(<Carousel images={images} />);

  const hero = await carousel.findByTestId("hero");
  expect(hero.src).toContain("0.jpg");

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const thumb = await carousel.findByTestId(`thumbnail${i}`);
    await thumb.click();

    expect(hero.src).toContain(image);
    expect(Array.from(thumb.classList)).toContain("active");
  }

  carousel.unmount();
});
