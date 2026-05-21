# The Jar

The Jar is a physics-based tip jar widget. Coins or cheers fall into a shaped container driven by p2.js, which Streamlabs provides at runtime.

**How to use:** Paste the contents of `thejar.js` into the **Custom JS** field of the Jar Widget in Streamlabs. There is no custom HTML to paste — the widget rendering is managed by Streamlabs internally.

## Two built-in layouts

`thejar.js` includes two physics configurations:

1. **Glass pint** (active by default) — a simple funnel-shaped glass.
2. **Plinko board** (commented out) — adds a dot grid and inner shot glass. Swap the `jarEl.src` URL and uncomment the plinko block to use it.

## Customization

- Change `jarEl.src` to any image URL to use a custom jar graphic.
- Add more `p2.Body` objects to reshape the container or add bumpers.
- Define a custom `p2.ContactMaterial` to change bounciness between the falling items and your surfaces.
- `cupBase` is a `[x, y]` array provided by Streamlabs representing the center of the cup base in physics space.

## p2.js helpers (provided by Streamlabs)

```js
this.createRectangleBody(position, width, height, angle)
this.createCircleBody(position, radius)
this.createWallBody(x, y, l, w, angle)
this.materials.cheer   // material applied to falling items
this.materials.wall    // material applied to static surfaces
this.world             // the p2.World instance
```

Full p2.js docs: http://schteppe.github.io/p2.js/docs/
