import angular from "angular";
import Modal from "./modal.component.js";
import Spinner from "@ovh-ui/oui-spinner";

const moduleName = "oui.modal";

angular
    .module(moduleName, [Spinner])
    .component("ouiModal", Modal);

export default moduleName;
