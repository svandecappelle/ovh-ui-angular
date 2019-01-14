import Button from "@ovh-ui/oui-button";
import File from "./file.component";
import FileProvider from "./file.provider";
import Spinner from "@ovh-ui/oui-spinner";

export default angular
    .module("oui.file", [
        Button,
        Spinner
    ])
    .component("ouiFile", File)
    .provider("ouiFileConfiguration", FileProvider)
    .name;
