
import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from './components/welcome';
import App from './App';
import BlogEntries from './components/welcome/blogentries';
import UserEntries from './components/blog/userentries';

const AppComp = shallow(<App />);

it("renders Nav", () => {
    expect(AppComp.find('MenuAppBar').length).toBe(1);
});

describe('blog entries test', () => {
    
    it("renders BlogEntries", () => {
        const WelcomeComp = shallow(<Welcome />);
        expect(WelcomeComp.find('BlogEntries').length).toBe(1);
    });
    
    it("renders BlogRead items", () => {
        const blogEntries = [{ picture: "", title: "title1", description: "description1" }]
        const BlogEntriesComp = mount(<BlogEntries blogEntries={blogEntries} />);
        const card = BlogEntriesComp.find('.card')
        expect(card.length).toBe(1);
        expect(card.contains(
            <h2>title1</h2>,
            <p>description1</p>,
        )).toEqual(true);
    });

    it("render create a blog item", () => {
        const UserEntriesComp = mount(<UserEntries />);
        UserEntriesComp.find("button#create").last().simulate("click");
        expect(UserEntriesComp.find("input")).toHaveLength(2);
        expect(UserEntriesComp.find("textarea#description")).toHaveLength(1);
        expect(UserEntriesComp.find("button#submit")).toHaveLength(1);
    });
});