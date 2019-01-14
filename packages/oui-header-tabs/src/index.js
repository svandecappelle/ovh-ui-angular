import Dropdown from "@ovh-ui/oui-dropdown";
import HeaderTabs from "./header-tabs.component";
import HeaderTabsDivider from "../../oui-dropdown/src/divider/dropdown-divider.component";
import HeaderTabsDropdown from "./dropdown/header-tabs-dropdown.component";
import HeaderTabsItem from "./item/header-tabs-item.component";

export default angular
    .module("oui.header-tabs", [Dropdown])
    .component("ouiHeaderTabs", HeaderTabs)
    .component("ouiHeaderTabsDivider", HeaderTabsDivider)
    .component("ouiHeaderTabsDropdown", HeaderTabsDropdown)
    .component("ouiHeaderTabsItem", HeaderTabsItem)
    .name;
