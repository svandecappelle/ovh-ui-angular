import Autocomplete from "@ovh-ui/oui-autocomplete";
import Search from "./search.component";

export default angular
    .module("oui.search", [Autocomplete])
    .component("ouiSearch", Search)
    .name;
