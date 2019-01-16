import angular from "angular";
import Dropdown from "@ovh/ui-kit.dropdown";
import HeaderTabs from "./header-tabs.component";
import HeaderTabsDivider from "@ovh/ui-kit.dropdown/src/divider/dropdown-divider.component";
import HeaderTabsDropdown from "./dropdown/header-tabs-dropdown.component";
import HeaderTabsItem from "./item/header-tabs-item.component";

const moduleName = "oui.header-tabs";

angular
    .module(moduleName, [Dropdown])
    .component("ouiHeaderTabs", HeaderTabs)
    .component("ouiHeaderTabsDivider", HeaderTabsDivider)
    .component("ouiHeaderTabsDropdown", HeaderTabsDropdown)
    .component("ouiHeaderTabsItem", HeaderTabsItem);

export default moduleName;
