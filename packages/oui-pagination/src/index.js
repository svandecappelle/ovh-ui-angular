import angular from "angular";
import Dropdown from "@ovh-ui/oui-dropdown";
import Pagination from "./pagination.component";
import PaginationConfigurationProvider from "./pagination.provider";

const moduleName = "oui.pagination";

angular
    .module(moduleName, [Dropdown])
    .component("ouiPagination", Pagination)
    .provider("ouiPaginationConfiguration", PaginationConfigurationProvider);

export default moduleName;
