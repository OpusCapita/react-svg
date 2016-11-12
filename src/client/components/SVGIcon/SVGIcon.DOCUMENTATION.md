### Synopsis

A wrapper for **SVG component** for icons rendering.
You can pass any **SVG component specific properties** to this component.

### FAQ

Q: Where I can get an icons *.svg files? 
A: You can use `jcatalog-svg-icons` package.

### Code Example

```
<div style={{ display: 'flex', alignItems: 'flex-end' }}>
  <SVGIcon svg={_scope.getIcon('cancel')} />
  <SVGIcon svg={_scope.getIcon('work')} color="#fff" bgColor="#42A5F5"  />
  <SVGIcon svg={_scope.getIcon('monetization_on')} color="#fff" bgColor="#66BB6A" size="48px" />
  <SVGIcon svg={_scope.getIcon('access_alarm')} color="#fff" bgColor="#FF3D00" size="72px" />
</div>
```

### Props Reference

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| bgColor | string | Background color. Example: `#e70` |
| color | string | Fill color. Example: `#fff` |
| size | string | Size. Example: `48px` |
| svg | string | SVG content string. Example: `<svg viewBox="0 0 120 120" version="1.1"><circle cx="60" cy="60" r="50"/></svg>` |

### Contributors

Kirill Volkovich

### Component Name

SVGIcon

### License

Licensed by © 2016 OpusCapita

