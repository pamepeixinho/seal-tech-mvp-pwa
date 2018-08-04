export const selectHomePage = (state) => state.get('homePage');

export const selectName = (state) => selectHomePage(state).get('name');

export const selectLink = (state) => selectHomePage(state).get('link');

