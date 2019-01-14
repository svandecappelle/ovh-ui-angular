import Button from "@ovh-ui/oui-button";
import Spinner from "@ovh-ui/oui-spinner";
import StepForm from "./step-form/step-form.component";
import Stepper from "./stepper.component";
import StepperProvider from "./stepper.provider";

export default angular
    .module("oui.stepper", [
        Button,
        Spinner
    ])
    .component("ouiStepper", Stepper)
    .component("ouiStepForm", StepForm)
    .provider("ouiStepperConfiguration", StepperProvider)
    .name;
