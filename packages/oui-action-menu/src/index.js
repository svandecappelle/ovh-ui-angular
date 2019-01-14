import ActionMenu from "./action-menu.component";
import Dropdown from "@ovh-ui/oui-dropdown";
import DropdownDivider from "../../oui-dropdown/src/divider/dropdown-divider.component";
import DropdownItem from "../../oui-dropdown/src/item/dropdown-item.component";

export default angular
    .module("oui.action-menu", [Dropdown])
    .component("ouiActionMenu", ActionMenu)
    .component("ouiActionMenuDivider", DropdownDivider)
    .component("ouiActionMenuItem", DropdownItem)
    .name;
