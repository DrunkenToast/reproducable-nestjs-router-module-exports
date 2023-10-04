# Reproducable NestJS issue - Router Module, multiple exports

## Expected behaviour

Exposed routes should be default `/` and `/test/:testMessage`

## Current behaviour

TestController does not get the `/test` when multiple items are exported from
the route-tree file. Instead it is exposed as `/:testMessage`.

## Workaround

Export from a seperate file.  
To use the workaround in this project comment the route-tree import and 
uncomment the workaround import.

