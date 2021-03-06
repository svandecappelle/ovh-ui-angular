import { addBooleanParameter } from "@ovh-ui/common/component-utils";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "external");
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-slideshow-panel")
                .attr("aria-hidden", true)
        );
    }
}
