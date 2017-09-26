### Component Name

SVGIconsPreviewer

### Synopsis

**Browse an SVG icons collection.**
Use it in collaboration with **Showroom** to get a possibility to check colors, sizes and other styles of icons on fly.
*Write here a short introduction and/or overview that explains **what** component is.*

### Props Reference

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| containerBgColor | string | Background color of previewer container |
| icons | arrayOf({ name: string, svg: string }) | Collection of icons |
| iconsProps | object | Object pass to each **SVGIcon** component |


### Code Example

```
<SVGIconsPreviewer
  containerBgColor="#fff"
  icons={_scope.state.icons}
  iconsProps={{
    color: '#333',
    bgColor: '#fff'
  }}
/>
```

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

let icons = requireAll(require.context( '!!raw-loader!@opuscapita/svg-icons/lib', true, /.*\.svg$/));
```

In this case don't forget install **raw-loader**:
`npm install --save-dev -E raw-loader`
