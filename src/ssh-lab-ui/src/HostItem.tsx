import React from 'react';
import { Table } from "@dell/clarity-react/dist/tables/Table";
import { Portlet } from "@dell/clarity-react/dist/portlet/Portlet";

interface Props {
    host: Host;
}

export const HostItem: React.FC<Props> = ({host}) => {
    return (
		<Portlet header="sus-code" style={{marginTop: "0px !important"}}>
			<div style={{width: "90%", paddingLeft: "20px"}}>
				<Table className="table-vertical">
					<tbody>
						<tr>
							<th className="left" style={{width: "10%"}}>Hostname</th>
							<td>{host.host_name}</td>
						</tr>
						<tr>
							<th className="left">ipv4 Address</th>
							<td>{ host.ipv4_address }</td>
						</tr>
						<tr>
							<th className="left">Users</th>
							<td>{host.hasOwnProperty('users') ? host.users : "None"}</td>
						</tr>
						<tr>
							<th className="left">Public Key</th>
							<td>{host.hasOwnProperty('public_key') ? host.public_key : "undefined"}</td>
						</tr>
						<tr>
							<th className="left">Allowed Keys</th>
							<td>{host.hasOwnProperty('associated_keys') ? host.associated_keys : "None"}</td>
						</tr>
						<tr>
							<th className="left">Known Hosts</th>
							<td>{host.hasOwnProperty('known_hosts') ? host.known_hosts : "None"}</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</Portlet>
    );
};
