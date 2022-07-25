# Changelog

## 8.1.2 _2022-07-25_ ([GitHub](https://github.com/light-cone-calc/light-cone-calc.github.io/releases/v8.1.1))

### Changed

- Use CosmicExpansion v1.1.0 instead of v1.x.x (which may be an older locally
  cached version).

## 8.1.1 _2022-07-24_ ([GitHub](https://github.com/light-cone-calc/light-cone-calc.github.io/releases/v8.1.1))

### Fixed

- Use more accurate conversions from CosmicExpansion module.
- Correct version in footer.

## 8.1.0 _2022-07-19_ ([GitHub](https://github.com/light-cone-calc/light-cone-calc.github.io/releases/v8.1.0))

### Changed

- Inputs to expansion calclations are now read directly from the HTML form fields.
- Core calculations are now an NPM module
  [cosmic-expansion](https://www.npmjs.com/package/cosmic-expansion).
- Updated and rearranged footer credits etc.

### Fixed

- z_eq/s_eq confusion leading to incorrect calculation of Omega_M0 (see
  [PhysicsForums thread](https://www.physicsforums.com/threads/a-glitch-in-jorries-cosmo-calculator.1014779/post-6653909)).

## 1.8.1 _2022-06-14_ ([GitHub](https://github.com/light-cone-calc/light-cone-calc.github.io/releases/v1.8.1))

### Added

- Moved to light-cone-calc v1.8.1 which supports all functions from LightCone7.

### Fixed

- Various bugs blocking replacement of legacy LightCone7 code.

## 0.2.0 - 2022-05-18

### Added

- LightCone7.html imports light-cone-calc NPM module from jsdelivr.

### Removed

- Calculation script moved to independent NPM module light-cone-calc.

## 0.1.0 - 2022-05-17

### Added

- Web site imported from http://jorrie.epizy.com/lightcone7/2022-05-14/.
- 'development site' added to heading and title tag.
- Index page added with links to this site and Jorrie's original site.
- Copyright and Affero GPL license added to footer.
