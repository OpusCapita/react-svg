### Synopsis

**Browse an SVG icons collection.**
Use it in collaboration with **Showroom** to get a possibility to check colors, sizes and other styles of icons on fly.
*Write here a short introduction and/or overview that explains **what** component is.*

### Props Reference

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| containerStyles | object | Icon container styles |
| icons | arrayOf({ name: string, svg: string }) | Collection of icons |
| iconsProps | object | Object pass to each icon renderer |

### Tips

You can `require` whole directory of files using **webpack**.

Something like this:

```
function requireAll(requireContext) {
  return requireContext.keys().map(key => ({
    name: key.replace(/(\.svg$|^\.\/)/gi, ''),
    svg: requireContext(key)
  }));
}

let icons = requireAll(require.context( '!!raw-loader!jcatalog-svg-icons/lib', true, /.*\.svg$/));
```

In this case don't forget install **raw-loader**:
`npm install --save-dev -E raw-loader`

### Code Example

```
<SVGIconsPreviewer
  iconsProps={{
    style: {
      fill: '#333',
      width: '48px',
      height: '48px'
    }
  }}
  containerStyle={{
    backgroundColor: '#fff',
    color: '#000'
  }}
  icons={_scope.state.icons}
/>
```

### Contributors
Kirill Volkovich

### Component Name

SVGIconsPreviewer

### License

Licensed by © 2016 OpusCapita

