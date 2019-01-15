import angular from "angular";
import Chips from "@ovh-ui/oui-chips";
import Criteria from "./criteria.component";
import CriteriaAdder from "./adder/criteria-adder.component";
import CriteriaAdderProvider from "./adder/criteria-adder.provider";
import Dropdown from "@ovh-ui/oui-dropdown";
import Field from "@ovh-ui/oui-field";
import Search from "@ovh-ui/oui-search";
import Select from "@ovh-ui/oui-select";

const moduleName = "oui.criteria";

angular
    .module(moduleName, [
        Chips,
        Dropdown,
        Field,
        Search,
        Select
    ])
    .component("ouiCriteria", Criteria)
    .component("ouiCriteriaAdder", CriteriaAdder)
    .provider("ouiCriteriaAdderConfiguration", CriteriaAdderProvider);

export default moduleName;
