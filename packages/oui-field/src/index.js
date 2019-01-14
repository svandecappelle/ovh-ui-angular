import Field from "./field.component.js";
import FieldConfigurationProvider from "./field.provider.js";
import Popover from "@ovh-ui/oui-popover";

export default angular
    .module("oui.field", [Popover])
    .component("ouiField", Field)
    .provider("ouiFieldConfiguration", FieldConfigurationProvider)
    .name;
