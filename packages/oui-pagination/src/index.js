import Dropdown from "@ovh-ui/oui-dropdown";
import Pagination from "./pagination.component";
import PaginationConfigurationProvider from "./pagination.provider";

export default angular
    .module("oui.pagination", [Dropdown])
    .component("ouiPagination", Pagination)
    .provider("ouiPaginationConfiguration", PaginationConfigurationProvider)
    .name;
