### Synopsis

Simple SVGIcon with **minimalistic API** to use in most cases.
It use **SVG** component inside. You can pass **SVG** specific properties.

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
| bgColor | string | Icon background color |
| color | string | Icon fill color |
| size | string | Icon size |
| svg | string | Write a description of the property |

### Contributors
| svg | string | Write a description of the property |

### Component Name

SVGIcon

### License

Licensed by © 2016 OpusCapita

