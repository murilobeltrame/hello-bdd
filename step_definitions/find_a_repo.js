const { I } = inject();

const repoName = 'hello-mutation-tests';
const fullRepoName = `murilobeltrame/${repoName}`


Given('I`m on GitHubs home page', () => {
  I.amOnPage('https://github.com');
  I.see('GitHub');
});

When('I search for a repo name', () => {
  var repoName = 'hello-mutation-tests';
  I.fillField('Search GitHub', repoName);
  I.pressKey('Enter');
  I.wait(.5)
});

Then('I should see it on a listing', () => {
  I.see(fullRepoName)
});
