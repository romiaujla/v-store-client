import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import SellerForm from './SellerForm';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');

    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(
        <SellerForm />
        , div);

    //clean up code
    ReactDOM.unmountComponentAtNode(div);
});

