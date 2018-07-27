import React from 'react';
import { shallow } from 'enzyme';
import ConfirmationModal from '../../components/ConfirmationModal';

test('should render Confirmation Modal correctly', () => {
    const wrapper = shallow(<ConfirmationModal />);
    expect(wrapper).toMatchSnapshot();
});