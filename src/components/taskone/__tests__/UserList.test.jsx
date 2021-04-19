import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import UserList from '@components/taskone/UserList';
import useFetch from '../../../common/hooks/useFetch';

jest.mock('../../../common/hooks/useFetch');

const setup = () => {
  const data = [
    {
      id: 1,
      name: 'Ivan Yaros',
      username: 'Bret',
      address: {},
      company: {}
    },
    {
      id: 2,
      name: 'Foo',
      username: 'Bar',
      address: {},
      company: {}
    }
  ];

  const fetchDataFactory = (neededData) => () => Promise.resolve(neededData);

  // eslint-disable-next-line no-shadow
  const createMockReturnValue = (data, pending = false, error = '') => ({
    fetchData: fetchDataFactory(data),
    data,
    pending,
    error,
  });

  return { data, createMockReturnValue };
};

describe('UserList Component', () => {
  it('renders with the fetched data', () => {
    const { data, createMockReturnValue } = setup();

    useFetch.mockReturnValue(createMockReturnValue(data));

    const { getAllByTestId } = render(<UserList />);

    expect(getAllByTestId('user-info')[0]).toHaveTextContent('Ivan Yaros');
    expect(getAllByTestId('user-info')[1]).toHaveTextContent('Foo');
    expect(getAllByTestId('user-info').length).toBe(2);
  });

  it('renders an error', () => {
    const { createMockReturnValue } = setup();

    useFetch.mockReturnValue(createMockReturnValue([], false, 'Server error'));

    const { getByText } = render(<UserList />);

    expect(getByText('Server error')).toBeInTheDocument();
  });

  it('renders a pending message', () => {
    const { createMockReturnValue } = setup();

    useFetch.mockReturnValue(createMockReturnValue([], true));

    const { getByText } = render(<UserList />);

    expect(getByText('Waiting...')).toBeInTheDocument();
  });

  it('filters data by username', async () => {
    const { data, createMockReturnValue } = setup();

    useFetch.mockReturnValue(createMockReturnValue(data));

    const { getByTestId, getAllByTestId } = render(<UserList />);

    const container = getByTestId('user-list');

    const input = getByTestId('username-input');

    fireEvent.change(input, { target: { value: 'Bret' } });

    useFetch.mockReturnValue(createMockReturnValue([data[0]]));

    expect(getAllByTestId('user-info').length).toBe(2);

    await waitFor(() => {
      expect(getAllByTestId('user-info').length).toBe(1);
    }, { timeout: 5000, container });
  });
});
