import Popover from "@ovh-ui/oui-popover";
import Spinner from "@ovh-ui/oui-spinner";
import Tile from "./tile.component.js";
import TileButton from "./button/tile-button.component.js";
import TileDefinition from "./definition/tile-definition.component.js";

export default angular
    .module("oui.tile", [
        Popover,
        Spinner
    ])
    .component("ouiTile", Tile)
    .component("ouiTileButton", TileButton)
    .component("ouiTileDefinition", TileDefinition)
    .name;
