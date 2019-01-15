import angular from "angular";
import Button from "@ovh-ui/oui-button";
import Spinner from "@ovh-ui/oui-spinner";
import StepForm from "./step-form/step-form.component";
import Stepper from "./stepper.component";
import StepperProvider from "./stepper.provider";

const moduleName = "oui.stepper";

angular
    .module(moduleName, [
        Button,
        Spinner
    ])
    .component("ouiStepper", Stepper)
    .component("ouiStepForm", StepForm)
    .provider("ouiStepperConfiguration", StepperProvider);

export default moduleName;
