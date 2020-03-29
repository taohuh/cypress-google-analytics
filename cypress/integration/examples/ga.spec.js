function getLastEventLabel(event) {
	const lastIndex = event.length - 1;

	return event[lastIndex][2].event_label;
}

function getLastEventCategory(event) {
	const lastIndex = event.length - 1;

	return event[lastIndex][2].event_category;
}

function getEventClickButton(dataLayer) {
	return dataLayer.filter((data) => data[1] === 'click_button');
}

describe('Google Analytics', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Should track event Like button correctly', () => {
		cy.get('[data-cy="btn-like"]')
			.click();

		cy.window().then((win) => {
			const dataLayer = win.dataLayer;
			const eventClickButton = getEventClickButton(dataLayer);
			const label = getLastEventLabel(eventClickButton);
			const category = getLastEventCategory(eventClickButton);

			expect(label).eq('Like Button');
			expect(category).eq('button');
		});

		cy.get('[data-cy="btn-dislike"]')
			.click();

			cy.window().then((win) => {
				const dataLayer = win.dataLayer;
				const eventClickButton = getEventClickButton(dataLayer);
				const label = getLastEventLabel(eventClickButton);
				const category = getLastEventCategory(eventClickButton);

				expect(label).eq('Dislike Button');
				expect(category).eq('button');
			});
	});
})
