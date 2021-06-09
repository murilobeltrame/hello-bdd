const { I } = inject();

Given('I`m on Marvel`s char database', () => {
    I.amOnPage('https://www.marvel.com/characters');
    I.see('MARVEL CHARACTERS');
});

When('I search for the {string}', (hero_name) => {
    I.click('#search');
    I.wait(.5);
    I.fillField('Search', hero_name);
    I.pressKey('Enter');
});

Then('I need to see the character item', () => {
    I.see('CHARACTER', {css: 'ul.search-list__cards'});
});

Then('in onscreen details', () => {
    I.click('character', {css: 'ul.search-list__cards'});
    I.wait(.5);
    I.click('On Screen Full Report');
    I.wait(.5);
});

Then('should confirm the {string}', (hero_information) => {
    I.see(hero_information)
});