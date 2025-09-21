## Test Cases to Try

| Input         | Expected Output |
| ------------- | --------------- |
| `"LZ"`        | 0               |           
| `"L Z "`      | 1               |
| `"L ZL"`      | 1               |
| `"L   Z  L Z"`| 1               |
| `"L  Z L Z"`  | 1               |
|`"L     L"`    | -1              |
|`"Z   Z   Z"`  | -1              |
|`"    Z   L"`  | 2               |
|`"L  L Z  L"`  | 1               |
|`"    "`       | -1              |
|`"L   ZZ  L"`  | 2               |
|`"Z   LL Z"`   | 1               |
|`"  L  ZL"`    | 0               |
|`"L  Z LL  "`  | 1               |
| `"L  ZL Z"`   | 0               |
