
import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from './components/welcome';
import App from './App';
import BlogEntries from './components/welcome/blogentries';

const AppComp = shallow(<App />);
const WelcomeComp = shallow(<Welcome />);

it("renders BlogEntries", () => {
    expect(WelcomeComp.find('BlogEntries').length).toBe(1);
});

it("renders BlogRead items", () => {
    const blogEntries = [{ picture: "", title: "title1", description: "description1" }]
    const BlogEntriesComp = shallow(<BlogEntries blogEntries={blogEntries} />);
    expect(BlogEntriesComp.find('BlogRead').length).toBe(1);
});

it("renders Nav", () => {
    expect(AppComp.find('MenuAppBar').length).toBe(1);
});