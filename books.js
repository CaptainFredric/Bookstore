const BOOKS = [
	{
		id: 1,
		title: "Crack the Coding Interview",
		url: "assets/crack the coding interview.png",
		originalPrice: 49.95,
		salePrice: 14.95,
		rating: 4.5,
	},
	{
		id: 2,
		title: "Atomic Habits",
		url: "assets/atomic habits.jpg",
		originalPrice: 39,
		salePrice: null,
		rating: 5,
	},
	{
		id: 3,
		title: "Deep Work",
		url: "assets/deep work.jpeg",
		originalPrice: 29,
		salePrice: 12,
		rating: 5,
	},
	{
		id: 4,
		title: "The 10X Rule",
		url: "assets/book-1.jpeg",
		originalPrice: 44,
		salePrice: 19,
		rating: 4.5,
	},
	{
		id: 5,
		title: "Be Obsessed Or Be Average",
		url: "assets/book-2.jpeg",
		originalPrice: 32,
		salePrice: 17,
		rating: 4,
	},
	{
		id: 6,
		title: "Rich Dad Poor Dad",
		url: "assets/book-3.jpeg",
		originalPrice: 70,
		salePrice: 12.5,
		rating: 5,
	},
	{
		id: 7,
		title: "Cashflow Quadrant",
		url: "assets/book-4.jpeg",
		originalPrice: 11,
		salePrice: 10,
		rating: 4,
	},
	{
		id: 8,
		title: "48 Laws of Power",
		url: "assets/book-5.jpeg",
		originalPrice: 38,
		salePrice: 17.95,
		rating: 4.5,
	},
	{
		id: 9,
		title: "The 5 Second Rule",
		url: "assets/book-6.jpeg",
		originalPrice: 35,
		salePrice: null,
		rating: 2,
	},
	{
		id: 10,
		title: "Your Next Five Moves",
		url: "assets/book-7.jpg",
		originalPrice: 40,
		salePrice: null,
		rating: 4,
	},
	{
		id: 11,
		title: "Mastery",
		url: "assets/book-8.jpeg",
		originalPrice: 30,
		salePrice: null,
		rating: 4.5,
	},
];

let books = [];

function priceHTML(originalPrice, salePrice) {
	if (!salePrice) {
		return `$${originalPrice.toFixed(2)}`;
	}

	return `<span class="book__price--normal">$${originalPrice.toFixed(2)}</span> $${salePrice.toFixed(2)}`;
}

function ratingsHTML(rating) {
	let ratingHTML = "";

	for (let index = 0; index < Math.floor(rating); index += 1) {
		ratingHTML += '<span class="star">★</span>';
	}

	if (!Number.isInteger(rating)) {
		ratingHTML += '<span class="star star--half">★</span>';
	}

	return ratingHTML;
}

function renderBooks(filter) {
	const booksWrapper = document.querySelector(".books");

	if (!booksWrapper) {
		return;
	}

	booksWrapper.classList.add("books__loading");

	const nextBooks = [...BOOKS];

	if (filter === "LOW_TO_HIGH") {
		nextBooks.sort(
			(firstBook, secondBook) =>
				(firstBook.salePrice || firstBook.originalPrice) -
				(secondBook.salePrice || secondBook.originalPrice)
		);
	} else if (filter === "HIGH_TO_LOW") {
		nextBooks.sort(
			(firstBook, secondBook) =>
				(secondBook.salePrice || secondBook.originalPrice) -
				(firstBook.salePrice || firstBook.originalPrice)
		);
	} else if (filter === "RATING") {
		nextBooks.sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);
	}

	books = nextBooks;

	const booksHtml = books
		.map(
			(book) => `<div class="book">
							<figure class="book__img--wrapper">
								<img class="book__img" src="${book.url}" alt="${book.title} cover">
							</figure>
							<div class="book__title">
								${book.title}
							</div>
							<div class="book__ratings" aria-label="Rated ${book.rating} out of 5 stars">
								${ratingsHTML(book.rating)}
							</div>
							<div class="book__price">
								${priceHTML(book.originalPrice, book.salePrice)}
							</div>
						</div>`
		)
		.join("");

	requestAnimationFrame(() => {
		booksWrapper.innerHTML = booksHtml;
		booksWrapper.classList.remove("books__loading");
	});
}

function filterBooks(event) {
	renderBooks(event.target.value);
}

document.addEventListener("DOMContentLoaded", () => {
	const filterSelect = document.querySelector("#filter");

	if (filterSelect) {
		filterSelect.addEventListener("change", filterBooks);
	}

	renderBooks();
});
