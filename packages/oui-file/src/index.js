import angular from "angular";
import Button from "@ovh/ui-kit.button";
import File from "./file.component";
import FileProvider from "./file.provider";
import Spinner from "@ovh/ui-kit.spinner";

const moduleName = "oui.file";

angular
    .module(moduleName, [
        Button,
        Spinner
    ])
    .component("ouiFile", File)
    .provider("ouiFileConfiguration", FileProvider);

export default moduleName;
