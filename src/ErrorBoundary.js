import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    };

    /* componentDidCatch 메서드에는 두개의 파라미터를 사용하게 되는데 
    첫번째 파라미터는 에러의 내용, 두번째 파라미터에서는 에러가 발생한 위치를 알려줍니다. */
    /* 현재 컴포넌트 상태 error 를 true 로 설정을 해주고 */
    componentDidCatch(error, info) {
        console.log('에러가 발생했습니다!');
        console.log({
            error, info
        });
        this.setState({
            error: true
        });
    }

    /* 만약 this.state.error 값이 true 라면 에러가 발생했다는 문구를 렌더링하도록 하고 
    그렇지 않다면 this.props.children 을 렌더링하도록 처리 */
    render() {
        if(this.state.error) {
            return <h1>에러 발생!</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
