import React from 'react';
import { HostList } from './HostList';
import {MainContainer} from "@dell/clarity-react/dist/layout/main-container/MainContainer";
import { Card } from '@dell/clarity-react/dist/cards/Card';

const initialState = {
};

type MainPageProps = {
    token?: string
    level?: string
    message?: string
}

const default_hosts: Host[] = [
	{host_name: "sus-gaming", ipv4_address:"192.168.0.181"},
	{host_name: "sus-code", ipv4_address:"192.168.0.181",  associated_keys: ["asfdasdfa"], known_hosts: ["sus-gaming"], public_key: "asdlfkja", users: ["spigelli"],}
];

export type MainPageState = Readonly<typeof initialState>;

export default class Main extends React.Component<MainPageProps> {
    readonly state: MainPageState = initialState;
    render(){
        return(
            <MainContainer title="SSH Key Manager" >
				<div style={{display: "flex"}}>
					<div style={{width:"60%"}}>
						<HostList hosts={default_hosts}></HostList>
					</div>
					<div style={{width:"40%", marginLeft:"24px"}}>
						<Card header="Network Graph" style={{margin: "0px"}}>
							graph here
						</Card>
					</div>
				</div>
            </MainContainer>
        );
    }
}
