# Popover

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Using value of `oui-popover` attribute

```html:preview
<button type="button" 
    class="oui-button oui-button_primary" 
    oui-popover="This is an awesome popover content.">
    Click to toggle popover
</button>
```

### Using value of `title` attribute

```html:preview
<button type="button" 
    class="oui-button oui-button_primary" 
    title="This is an awesome popover content." 
    oui-popover>
    Click to toggle popover
</button>
```

### Using a template with `oui-popover-template` attribute

<oui-message type="warning">
    This method use <code class="oui-doc-codespan">ngInclude</code> to add the template in a popover and create an <strong>isolated</strong> scope.<br />
    Use <code class="oui-doc-codespan">oui-popover-scope</code> to extend the isolated scope and <code class="oui-doc-codespan">$ctrl</code> to access thoses values.
</oui-message>

```html:preview
<input type="text" class="oui-input oui-input_inline"
  ng-init="$ctrl.awesome = 'awesome'"
  ng-model="$ctrl.awesome">
<button type="button"
    class="oui-button oui-button_primary" 
    oui-popover
    oui-popover-scope="$ctrl"
    oui-popover-template="popover.html">
    Click to toggle popover
</button>

<script type="text/ng-template" id="popover.html">
<p>This is an <strong ng-bind="$ctrl.awesome"></strong> popover content.</p>
<p><a href="#">The quick brown fox jumps over the lazy dog</a></p>
</script>
```

### Using `oui-popover` component

```html:preview
<oui-popover>
    <button type="button" class="oui-button oui-button_primary" oui-popover-trigger>Click to toggle popover</button>
    <oui-popover-content>
        This is an awesome popover content.
    </oui-popover-content>
</oui-popover>
```

**Note**: This use is **deprecated** and will be removed in the next major version

### All directions

```html:preview
<button type="button" class="oui-button oui-button_primary"
    oui-popover="This is an awesome popover content."
    oui-popover-placement="right">
    Popover on right
</button>

<button type="button" class="oui-button oui-button_primary"
    oui-popover="This is an awesome popover content."
    oui-popover-placement="top">
    Popover on top
</button>

<button type="button" class="oui-button oui-button_primary"
    oui-popover="This is an awesome popover content."
    oui-popover-placement="bottom">
    Popover on bottom
</button>

<button type="button" class="oui-button oui-button_primary"
    oui-popover="This is an awesome popover content."
    oui-popover-placement="left">
    Popover on left
</button>
```

### Alignments

```html:preview
<button type="button" class="oui-button oui-button_primary" 
    oui-popover="This is an awesome popover content." 
    oui-popover-placement="bottom-start">
    Align start
</button>

<button type="button" class="oui-button oui-button_primary" 
    oui-popover="This is an awesome popover content." 
    oui-popover-placement="bottom-end">
    Align end
</button>
```

### Help Popover

```html:preview
<button type="button" class="oui-popover-button" oui-popover="This is an awesome popover content."></button>
```

### Dynamic popover text

```html:preview
<input type="text" class="oui-input oui-input_inline"
    ng-init="$ctrl.popoverText = 'Lorem ipsum'" 
    ng-model="$ctrl.popoverText"
    oui-popover="{{ $ctrl.popoverText }}">
```

## API

| Attribute                 | Type      | Binding   | One-time Binding  | Values                                                                                        | Default           | Description
| ----                      | ----      | ----      | ----              | ----                                                                                          | ----              | ----
| `oui-popover`             | string    | @         | no                | n/a                                                                                           | `title` attribute | popover content
| `oui-popover-placement`   | string    | @?        | yes               | See [Popper placements](https://popper.js.org/popper-documentation.html#Popper.placements)    | `right`           | modifier for alignment
| `oui-popover-scope`       | string    | <?        | no                | n/a                                                                                           | n/a               | scope of the popover template
| `oui-popover-template`    | string    | @?        | no                | n/a                                                                                           | n/a               | id of the popover template

## Deprecated

### Attributes

* `placement`: Replaced by `oui-popover-placement` attribute

### Components

* `oui-popover`: Replaced by `oui-popover` attribute
* `oui-popover-trigger`: Replaced by `oui-popover` attribute
* `oui-popover-content`: Replaced by `oui-popover` attribute
