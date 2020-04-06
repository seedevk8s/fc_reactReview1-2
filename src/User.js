import React from 'react';

/* 이 컴포넌트는 user 라는 props 를 받아와서 
해당 데이터의 id 와 username 값을 보여줍니다. */
function User({ user }) {
    /* 이렇게 하시면 user 값이 존재하지 않는다면 null 을 렌더링하게 됩니다. 
    리액트 컴포넌트에서 null 을 렌더링하게되면 아무것도 나타나지 않게 됩니다. 
    이를 "null checking" 이라고 부릅니다. */
    /* 보통 데이터를 네트워크 요청을 통하여 나중에 데이터를 받아오게 되는 상황이 발생하는 경우 
    이렇게 데이터가 없으면 null 을 보여주거나, 
    아니면 <div>로딩중</div>과 같은 결과물을 렌더링하시면 됩니다. */
    /* 
    if (!user) {
        return null;
    }
     */

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
