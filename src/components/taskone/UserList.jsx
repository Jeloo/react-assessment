import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import debounce from '@components/common/utils/debounce';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 20px;

  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const UserInfo = styled.div`
  border-right: 1px solid #000;
  text-align: left;
  width: 260px;
`;

const Users = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;

const UserList = () => {
  const [filter, setFilter] = useState('');
  const [data, setData] = useState();
  const [userName, setUserName] = useState('');
  // const [dataError, setDataError] = useState('');

  const fetchData = useCallback(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users${
        filter ? `?username=${encodeURIComponent(filter)}` : ''
      }`
    ).then(async (response) => {
      // @TODO Add try/catch
      setData(await response.json());
    });
  }, [filter]);

  const applyFilter = (e) => {
    setUserName(e.target.value);
    const debounceFn = debounce(() => {
      setFilter(e.target.value);
    });

    debounceFn();
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div>
        Filter:
        <input
          type="text"
          onChange={applyFilter}
          value={userName}
          placeholder="Enter username"
        />
      </div>
      {data ? (
        <Users>
          {data.map((user) => (
            <Row key={user.id}>
              <UserInfo>
                <span>{`Name: ${user.name}`}</span>
                <span>{`Username: ${user.username}`}</span>
              </UserInfo>
              <div>
                <div>
                  <span>{user.address.street}</span>
                  <span>{user.address.suite}</span>
                  <span>{user.address.city}</span>
                  <span>{user.address.zipcode}</span>
                </div>
                <div>
                  <span>{user.email}</span>
                  <span>{user.phone}</span>
                </div>
              </div>
            </Row>
          ))}
        </Users>
      ) : (
        'Waiting...'
      )}
    </div>
  );
};

export default UserList;
