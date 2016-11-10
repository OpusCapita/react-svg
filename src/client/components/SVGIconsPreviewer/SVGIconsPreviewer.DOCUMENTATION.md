### Synopsis

SVGIconsPreviewer is a component which allow to browse an SVG icons collection.
Using it with **Showroom** to get a possibility to check colors, sizes and other styles of icons on fly.
*Write here a short introduction and/or overview that explains **what** component is.*

### Props Reference

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| icons | arrayOf({ name: string, component: func (ReactClass) }) | Collection of icons |
| iconsProps | object | Object pass to each icon renderer |
| containerStyles | object | Icon container styles. |

### Code Example

```
<SVGIconsPreviewer
	iconsProps={{
  	style: {
      fill: '#555',
      width: '48px',
      height: '48px'
    }
  }}
  containerStyle={{
    color: '#000',
    backgrounColor: '#f9f9f9'
  }}
/>
```

### Contributors
*Write here contributor names/contacts*

[GIT REPOSITORY](http://buildserver.jcatalog.com/gitweb/?p=js-react-application-generator.git)

### Component Name

SVGIconsPreviewer

### License

Licensed by © 2016 OpusCapita

