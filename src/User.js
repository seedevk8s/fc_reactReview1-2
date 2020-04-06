import React from 'react';

/* 이 컴포넌트는 user 라는 props 를 받아와서 
해당 데이터의 id 와 username 값을 보여줍니다. */
function User({ user }) {

    return (
        <div>
            <div>
                <div>
                    <b>ID</b>: {user.id}
                </div>
            </div>
            <div>
                <b>Username:</b> {user.username}
            </div>
        </div>
    );
}

export default User;
