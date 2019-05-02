import { Avatar } from 'antd';
import React from 'react';

const AvatarC = () => {
    return (
        <div>
            <div>
                <Avatar size="large" icon="user" />
            </div>
            <div>
                <Avatar shape="square" size="large" icon="user" />
            </div>
        </div>
    )
}
export default AvatarC;