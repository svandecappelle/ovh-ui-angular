import angular from "angular";
import Dropdown from "@ovh-ui/oui-dropdown";
import DropdownDivider from "../../oui-dropdown/src/divider/dropdown-divider.component";
import DropdownGroup from "../../oui-dropdown/src/group/dropdown-group.component";
import DropdownItem from "../../oui-dropdown/src/item/dropdown-item.component";
import GuideMenu from "./guide-menu.component";

const moduleName = "oui.guide-menu";

angular
    .module(moduleName, [Dropdown])
    .component("ouiGuideMenu", GuideMenu)
    .component("ouiGuideMenuDivider", DropdownDivider)
    .component("ouiGuideMenuGroup", DropdownGroup)
    .component("ouiGuideMenuItem", DropdownItem);

export default moduleName;
