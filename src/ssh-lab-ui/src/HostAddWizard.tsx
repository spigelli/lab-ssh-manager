import React from 'react';
import { Button } from '@dell/clarity-react/dist/forms/button/Button';
import { State } from '@sambego/storybook-state';
import { Wizard, WizardSize, WizardValidationType } from "@dell/clarity-react/dist/wizards/Wizard";

const wizardRefSync = React.createRef<Wizard>();

const stepsSyncValidation = [
    {
        stepName: "Host Identification",
        stepId: 0,
        stepComponent: (
            <Button onClick={() => { wizardRefSync.current!.checkStepValidity(0); }} > {" "} Finish Step 1{" "} </Button>
        ),
        isStepValid: () => true,
    },
    {
        stepName: "Public Key",
        stepId: 1,
        stepComponent: (
            <div> {" "} <Button onClick={() => { wizardRefSync.current!.checkStepValidity(1); }} > {" "} Finish Step 2{" "} </Button>{" "} </div>
        ),
        isStepValid: () => true,
    },
    {
        stepName: "Connected Peers",
        stepId: 2,
        stepComponent: (
            <Button onClick={() => { wizardRefSync.current!.checkStepValidity(2); }} > {" "} Finish Step 3{" "} </Button>
        ),
        isStepValid: () => true,
    },
];

export default class HostAddWizard extends React.Component<HostAddProps> {
    render(){
        return(
            <State store={this.props.store}>
                <Wizard
                    ref={wizardRefSync}
                    size={WizardSize.XLARGE}
                    title="Add a host"
                    steps={stepsSyncValidation}
                    validationType={WizardValidationType.SYNC}
                    onClose={() => this.props.store.set({show: false})}
                />
            </State>
        );
    }
}
