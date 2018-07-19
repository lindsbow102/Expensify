import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

// Test does Header render
test('should render Header correctly', () => {
    let wrapper = shallow(<Header startLogout={() => { }}/>);
    expect(wrapper).toMatchSnapshot();
});

// Testing Logout button
test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    let wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});