import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

// Testing that Loading Page renders correctly
test('should render LoadingPage correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});