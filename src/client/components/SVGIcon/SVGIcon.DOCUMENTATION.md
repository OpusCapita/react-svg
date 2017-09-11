### Component Name

SVGIcon

### Synopsis

A wrapper for **SVG component** for icons rendering.
You can pass any **SVG component specific properties** to this component.

### Code Example

```
<div style={{ display: 'flex', alignItems: 'flex-end' }}>
  <SVGIcon svg={_scope.getIcon('cancel')} />

  <SVGIcon 
    svg={_scope.getIcon('work')} 
    style={{ 
      fill: '#fff', 
      backgroundColor: '#42A5F5',
      width: '48px',
      height: '48px'
    }}
  />

  <SVGIcon 
    svg={_scope.getIcon('monetization_on')}
    style={{
      fill: '#fff',
      backgroundColor: '#66BB6A',
      width: '48px',
      height: '48px'
    }}
  />

  <SVGIcon 
    svg={_scope.getIcon('access_alarm')} 
    style={{
      fill: '#fff',
      backgroundColor: '#FF3D00',
      width: '72px',
      height: '72px'
    }}
  />
</div>
```

### Props Reference

| Name                           | Type                    | Description                                                                                                    |
| ------------------------------ | :---------------------- | -----------------------------------------------------------                                                    |
| svg                            | string                  | SVG content string. Example: `<svg viewBox="0 0 120 120" version="1.1"><circle cx="60" cy="60" r="50"/></svg>` |

### FAQ

Q: Where I can get an icons *.svg files?
A: You can use `@opuscapita/svg-icons` package.
