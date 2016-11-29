### Synopsis

Simple SVG renderer

### Props Reference

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| className | string | Default behaviour |
| style | string | Write a description of the property |
| svg | string | Write a description of the property |

### Tips

You can `require` an **SVG** file content using **webpack**.

```
let ShoppingCartIcon = require('!!raw-loader/@opuscapita/ui-svg-icons/lib/add_shopping_cart.svg');

...
<SVG
  svg={ShoppingCartIcon}
/>
...
```

Don't forget install **raw-loader**:
`npm install --save-dev -E raw-loader`

### Code Example

```
<SVG
  style={{ width: '100px', height: '100px', fill: '#000' }}
  svg={`
    <svg viewBox="0 0 120 120" version="1.1">
      <circle cx="60" cy="60" r="50"/>
    </svg>
  `}
/>
```


### Contributors
Kirill Volkovich

### Component Name

SVG

### License

Licensed by © 2016 OpusCapita
