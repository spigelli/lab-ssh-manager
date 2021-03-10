import React from 'react';

interface Props {
    host: Host;
}

const hostNameStyle: React.CSSProperties = {fontWeight: 'bold'}

export const HostItem: React.FC<Props> = ({host}) => {
    return (
        <li>
            <label style={hostNameStyle}>
                {host.host_name}
            </label>
            <p>{ host.ipv4_address }</p>
        </li>
    );
};
