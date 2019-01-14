import Slideshow from "./slideshow.component";
import SlideshowPanel from "./panel/slideshow-panel.component";
import Spinner from "@ovh-ui/oui-spinner";

export default angular
    .module("oui.slideshow", [Spinner])
    .component("ouiSlideshow", Slideshow)
    .component("ouiSlideshowPanel", SlideshowPanel)
    .name;
