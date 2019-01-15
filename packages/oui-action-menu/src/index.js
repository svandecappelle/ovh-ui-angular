import ActionMenu from "./action-menu.component";
import angular from "angular";
import Dropdown from "@ovh-ui/oui-dropdown";
import DropdownDivider from "../../oui-dropdown/src/divider/dropdown-divider.component";
import DropdownItem from "../../oui-dropdown/src/item/dropdown-item.component";

const moduleName = "oui.action-menu";

angular
    .module(moduleName, [Dropdown])
    .component("ouiActionMenu", ActionMenu)
    .component("ouiActionMenuDivider", DropdownDivider)
    .component("ouiActionMenuItem", DropdownItem);

export default moduleName;
