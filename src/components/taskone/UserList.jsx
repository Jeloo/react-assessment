import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFetch from '../../common/hooks/useFetch';
import useDebounce from '../../common/hooks/useDebounce';

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
  const [userName, setUserName] = useState('');
  const debouncedUserName = useDebounce(userName, 5000);

  const {
    data, fetchData, pending, error
  } = useFetch();

  const fetchInput = `https://jsonplaceholder.typicode.com/users${
    userName ? `?username=${encodeURIComponent(userName)}` : ''
  }`;

  useEffect(() => {
    fetchData(fetchInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedUserName]);

  if (error) {
    return (
      <div>
        An error occurred:
        {error}
      </div>
    );
  }

  return (
    <>
      <div>
        Filter:
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="Enter username"
        />
      </div>
      {data && !pending ? (
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
    </>
  );
};

export default UserList;
