# Pokemon Emerald Ironmon Map

## https://kelseyyoung.github.io/EmeraldIronmonMap

This is an interactive map of Pokemon Emerald meant for Ironmon challenge runners. For information on what Ironmon is, [join the discord](https://discord.gg/QEEsmNUX)

## Looking for other Ironmon Maps?

[FireRed/LeafGreen](https://kelseyyoung.github.io/FRLGIronmonMap)

[HGSS](https://kelseyyoung.github.io/HGSSIronmonMap/)

## Using the map

Trainer information is available on hover, showing the number of pokemon they have, the levels of their pokemon, and any movement information. Trainers can be "marked" by clicking on them

![Trainer Demo](./src/assets/demoGifs/TrainerDemo.gif)

Map "portals", like cave entrances and ladders, are clickable too! They will move the map to where it connects

![Map Portal Click Demo](./src/assets/demoGifs/PortalClickDemo.gif)

You can highlight all map portals via the Control Panel with various display options

![Portal Controls Demo](./src/assets/demoGifs/MapPortalsDemo.gif)

## Developers

1. Clone the repo
2. Update the IronmonMapUtils submodule

- First time initialization: `git submodule update --init --recursive`
- Futher updates: `git pull --recurse-submodules`
  - If this doesn't work, go to `src/IronmonMapUtils` and run `git pull origin main`
- If needing to make & push changes:

```
cd src/IronmonMapUtils
git checkout main
```

- See the README in the [IronmonMapUtils repo](https://github.com/kelseyyoung/IronmonMapUtils) for more info

3. Enable Git LFS with `git lfs install`

- This is for the .xcf files which is the source for the maps

4. Run `yarn` to install dependencies
5. Run `yarn start` to start a local dev server

## Found an issue? Want to suggest a feature?

This is very much still a work in progress so there are sure to be bugs/missing data. The best way to file an issue is on [Github](https://github.com/kelseyyoung/EmeraldIronmonMap/issues) or contact me on Discord (kelsey#8920)
