import Modal from "./modal.component.js";
import Spinner from "@ovh-ui/oui-spinner";

export default angular
    .module("oui.modal", [Spinner])
    .component("ouiModal", Modal)
    .name;
